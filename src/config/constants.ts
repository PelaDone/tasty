// API configuration
export const API_CONFIG = {
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
  };
  
  // Supabase configuration
  export const SUPABASE_CONFIG = {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  };