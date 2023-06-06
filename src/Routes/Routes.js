import React from "react";
// react router imports
import { Routes, Route } from "react-router-dom";
// local imports
import SignIn from "../components/Auth/SignIn";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/General/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<SignIn />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
