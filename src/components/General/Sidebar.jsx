import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { user, logOut } = UserAuth();
  const { googleSignIn } = UserAuth();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
    setShowSidebar(!showSidebar);
  };
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-3xl text-white items-center cursor-pointer fixed right-8 top-3 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="z-30 flex items-center cursor-pointer right-10 top-4"
          fill="#e11d48"
          viewBox="0 0 100 80"
          width="25"
          height="25"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}
      <div className="">
        <div
          className={`top-0 right-0 w-[200px] md:w-[20vw] bg-rose-600  p-10 flex justify-center  text-white fixed h-full z-40 transition-all duration-200 ease-in-out ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          {user?.displayName ? (
            <>
              <button
                className="text-base md:text-xl flex font-poppins mt-10 "
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <button
                className="text-base md:text-xl flex font-poppins mt-10"
                onClick={handleGoogleSignIn}
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
