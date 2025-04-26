import { Database } from "./supabaseTypes";

export type Game = Database['public']['Functions']['get_games']['Returns'][number];
export type TeamStanding = Database['public']['Functions']['get_team_standings']['Returns'][number];
