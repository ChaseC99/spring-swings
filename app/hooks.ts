"use client";
import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

import { Game, TeamStanding } from './types';

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

export function useSupabaseFunction<T = any>(functionName: string) {
    const [data, setData] = useState<T>(
        typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(functionName) || "[]") : []
    );
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const { data, error } = await supabase.rpc(functionName);
            if (error) {
                console.log('errror', error);
                setError(error);
            } else {
                localStorage.setItem(functionName, JSON.stringify(data));
                setData(data);
            }
            setLoading(false);
      };
  
      fetchData();
    }, [functionName]);
  
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

export function useTeamStandings() {
    return useSupabaseFunction<TeamStanding[]>('get_team_standings');
}

export function useGames() {
    return useSupabaseFunction<Game[]>('get_games');
}