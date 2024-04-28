import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Address from "./components/Address";
import VehicleType from "./components/VehicleType";

import { supabase } from "./supabase/supabase.config";
import Layout from "./containers/Layout";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/address" element={<Address />} />
            <Route path="/vehicle" element={<VehicleType />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
