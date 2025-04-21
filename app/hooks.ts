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
    const { data, error, loading } = useSupabaseData('Games');
    return { games: data, error, loading };
}
