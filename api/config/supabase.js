import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';

if (!env.supabase.url || !env.supabase.key) {
  throw new Error('Missing Supabase credentials in environment variables');
}

export const supabase = createClient(env.supabase.url, env.supabase.key);