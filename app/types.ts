import { Database } from "./supabaseTypes";

export type Game = Database['public']['Functions']['get_games']['Returns'][number];
