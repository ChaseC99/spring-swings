// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eitkmoifbqxyxttteyco.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdGttb2lmYnF4eXh0dHRleWNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxODA4NDQsImV4cCI6MjA2MDc1Njg0NH0.lSFXr7pu0uM86Nncnh6WemNPEFVxwJQH04l31pio8AM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);