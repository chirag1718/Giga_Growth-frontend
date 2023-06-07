import React from "react";
import Sidebar from "./Sidebar";
const Navigation = () => {
  return (
    <div className="h-16 flex items-center justify-between border-[2px] px-5">
      <div className="text-sm sm:text-base md:text-xl font-poppins hover:text-rose-600 transition-all ease-in-out duration-200">
        Giga Growth Ventures
      </div>
      <div className="flex justify-center items-center gap-5 ">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navigation;
