"use client";
import { useCallback, useEffect, useState } from 'react';
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
  
    // Define fetchData using useCallback to memoize it
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null); // Reset error before fetching
        try {
            const { data, error } = await supabase.rpc(functionName);
            if (error) {
                console.error('Error fetching data:', error); // Use console.error for errors
                setError(error);
                // Optionally clear data on error or keep stale data
                // setData(defaultValue); // Replace defaultValue with appropriate initial state like [] or null
            } else {
                if (typeof window !== 'undefined') {
                    localStorage.setItem(functionName, JSON.stringify(data));
                }
                setData(data);
            }
        } catch (catchError) {
            console.error('Caught error during fetch:', catchError);
            setError(catchError);
        } finally {
            setLoading(false);
        }
    }, [functionName]); // Dependency array includes functionName

    useEffect(() => {
      fetchData(); // Call fetchData on initial mount and when functionName changes
    }, [fetchData]); // useEffect depends on the memoized fetchData

    // Return fetchData as refetch
    return { data, error, loading, refetch: fetchData };
}

export function useTeams() {
    const { data, error, loading } = useSupabaseData('Teams');
    return { teams: data, error, loading };
}

export function useTeamStandings() {
    return useSupabaseFunction<TeamStanding[]>('get_team_standings');
}

export function useGames() {
    return useSupabaseFunction<Game[]>('get_games');
}

export async function updateGameScore(gameId: number, teamABScore: number, teamCDScore: number) {
    return await supabase.rpc('update_game_score', {
        game_id: gameId, new_team_ab_score: teamABScore, new_team_cd_score: teamCDScore
    });
}