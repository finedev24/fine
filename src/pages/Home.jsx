import React from 'react'

import { useEffect } from 'react'
import { supabase } from '../supabase/supabase.config'

export default function Home() {

  useEffect(()=> {
    if(!supabase.auth.getUser()) {
      navigate("/login")
    }
  }, [navigate])

  return (
    <div>
      Home
      <button onClick={()=> supabase.auth.signOut()}>
        Logout
      </button>
    </div>
  )
}
