import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://utvnjubgjvtuelfssekj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0dm5qdWJnanZ0dWVsZnNzZWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5NjgzMjUsImV4cCI6MjA1MzU0NDMyNX0.MHckHOu1S3quJmVWxFarqANvI7qK8mDo-vClDKvjEAE';

export const supabase = createClient(supabaseUrl, supabaseKey);