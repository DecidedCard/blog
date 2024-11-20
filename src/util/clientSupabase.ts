import { createClient } from "@supabase/supabase-js";

import type { Database } from "@/types/supabase";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string;

// supabase client용
const clientSupabase = createClient<Database>(supabaseUrl, supabaseKey);

export default clientSupabase;
