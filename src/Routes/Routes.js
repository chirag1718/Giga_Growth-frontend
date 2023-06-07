import React from "react";
// react router imports
import { Routes, Route } from "react-router-dom";
// local imports
import SignIn from "../components/Auth/SignIn";
import Dashboard from "../components/Dashboard/Dashboard";
import { UserAuth } from "../context/AuthContext";
const AppRoutes = () => {
  const { user } = UserAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <SignIn />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
