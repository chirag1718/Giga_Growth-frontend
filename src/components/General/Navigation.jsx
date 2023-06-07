import React from "react";
import { UserAuth } from "../../context/AuthContext";
const Navigation = () => {
  const { user, logOut } = UserAuth();
  const { googleSignIn } = UserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-14 flex items-center justify-between shadow-md px-5">
      <div className="text-xs md:text-base font-poppins hover:text-rose-600 transition-all ease-in-out duration-200">
        Giga Growth Ventures
      </div>
      <div>
        {user?.displayName ? (
          <>
            <button
              className="text-xs md:text-base flex font-poppins hover:text-rose-600 transition-all ease-in-out duration-200"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              className="text-xs md:text-base flex font-poppins hover:text-rose-600 transition-all ease-in-out duration-200"
              onClick={handleGoogleSignIn}
            >
              Sign In
            </button>
          </>
        )}
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Navigation;
