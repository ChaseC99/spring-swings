"use client";
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export function useSupabaseData<T = any>(table: string, query: string = '*') {
    const [data, setData] = useState<T[] | null>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        const { data, error } = await supabase.from(table).select(query);
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


export function useGames() {
    const [games, setGames] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchGames = async () => {
            setLoading(true);
            const { data, error } = await supabase.rpc('get_all_games_with_players_and_round_info');
            
            if (error) {
                console.error('Error fetching games:', error);
                setError(error);
                setGames([]);
            } else {
                setGames(data);
            }
            setLoading(false);
        };

        fetchGames();
    }, []);

    return { games, loading, error };
}