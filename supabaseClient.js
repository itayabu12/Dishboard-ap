import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'הכנס_כאן_את_ה-Project_URL_שלך'
const supabaseKey = 'הכנס_כאן_את_ה-Publishable_key_שלך'

export const supabase = createClient(supabaseUrl, supabaseKey)