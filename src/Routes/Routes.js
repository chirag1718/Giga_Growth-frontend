import React from "react";
// react router imports
import { Routes, Route } from "react-router-dom";
// local imports
import SignIn from "../components/Auth/SignIn";
import Dashboard from "../components/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<SignIn />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
