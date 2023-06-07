import React from "react";
import barchart from "../Images/barchart.png";
import { UserAuth } from "../../context/AuthContext";

const SignIn = () => {
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="grid h-[90vh] items-center justify-center text-center font-poppins">
      <div className="border-[1px] w-[250px] h-[300px] md:w-[400px] md:h-[400px] rounded-lg shadow-md flex flex-col justify-center gap-7 md:gap-10 items-center">
        <div className="text-lg md:text-2xl">
          <p>Welcome to</p>
          <p className="text-rose-500">Giga Growth Ventures</p>
        </div>
        <img src={barchart} alt="" className="w-14 h-14 md:w-28 md:h-28" />
        <div className="flex flex-col items-center">
          <div>
            <button
              className="border-[1px] p-3 rounded-md text-white transition-all ease-in-out duration-200 bg-rose-500 hover:bg-white hover:text-red-500 md:text-lg"
              onClick={handleGoogleSignIn}
            >
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
