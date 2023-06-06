import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const navigate = useNavigate()
  const handleSignIn = (e)=>{
    e.preventDefault()
    navigate("/login")
    setShowSidebar(false)
  }
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-2xl text-white items-center cursor-pointer fixed right-6 top-3 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-5 top-5"
          fill="#E11D00"
          viewBox="0 0 100 80"
          width="20"
          height="20"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={` flex items-start justify-center  top-0 right-0 w-[200px] md:w-[25vw] bg-rose-600 p-8  text-white fixed h-full z-40  ease-in-out duration-300  shadow-md  ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className="mt-10 flex flex-col items-center justify-center gap-5 text-2xl">
          {!window.location.pathname.includes("/dashboard") && (
            <div className="flex items-center gap-5 cursor-pointer active:scale-95">
              <span onClick={handleSignIn}>Sign In</span>
              <LoginIcon />
            </div>
          )}
          {window.location.pathname.includes("/dashboard") && (
            <div className="flex items-center gap-5 cursor-pointer active:scale-95">
              <span>Logout</span>
              <LogoutIcon />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
