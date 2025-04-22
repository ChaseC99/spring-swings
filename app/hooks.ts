"use client";
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

import { Game } from './types';

export function useSupabaseData<T = any>(table: string, query: string = '*') {
    const [data, setData] = useState<T[] | null>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const { data, error } = await supabase.from(table).select(query).order('id', { ascending: true });
        if (error) {
          setError(error);
          setData(null);
        } else {
          setData(data as T[]);
        }
        setLoading(false);
      };
  
      fetchData();
    }, [table]);
  
    return { data, error, loading };
}

export function useTeams() {
    const { data, error, loading } = useSupabaseData('Teams');
    return { teams: data, error, loading };
}

export function usePlayers() {
    // TODO: Implement usePlayers hook
    return { players: [], error: null, loading: false };
}

export function useGames() {
    const [games, setGames] = useState<Game[]>(
        typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("games") || "[]") : []
    );
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchGames = async () => {
            setLoading(true);
            const { data, error } = await supabase.rpc('get_games');
            
            if (error) {
                console.error('Error fetching games:', error);
                setError(error);
                setGames([]);
            } else {
                localStorage.setItem("games", JSON.stringify(data));
                setGames(data);
            }
            setLoading(false);
        };

        fetchGames();
    }, []);

    return { games, loading, error };
}