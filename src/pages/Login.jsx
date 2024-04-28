import React from "react";
import { useState } from "react";
import { supabase } from "../supabase/supabase.config";

function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email
      });
      console.log(email)
      console.log(data)
      console.log(error)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="youremail@example.com"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <button>Send</button>
      </form>
    </div>
  );
}

export default Login;
