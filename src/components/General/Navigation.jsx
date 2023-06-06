import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="h-14 sticky top-0 flex items-center justify-between  bg-neutral-50 shadow-sm border-neutral-300- border-b-[1px]">
      {window.location.pathname.includes("/dashboard") && (<div className="flex ml-3 md:ml-5 font-poppins cursor-pointer hover:text-rose-600 transition-all ease-in-out duration-200" onClick={handleDashboard}>
        Giga Growth Ventures 
      </div>)}
      {window.location.pathname.includes("/") && !window.location.pathname.includes("/dashboard") &&(<div className="flex ml-3 md:ml-5 font-poppins cursor-pointer hover:text-rose-600 transition-all ease-in-out duration-200" onClick={handleHome}>
        Giga Growth Ventures 
      </div>)}
      <Sidebar />
    </div>
  );
};

export default Navigation;
