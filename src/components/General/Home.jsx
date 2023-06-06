import React from "react";
import growth1 from "../Images/growth1.jpg";
import growth2 from "../Images/growth2.jpg";

const Home = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-5">
      <div className="mx-2 flex flex-col justify-center mt-5 gap-2">
        <span className="text-2xl">Helping entreprenuers</span>
        <span className="text-2xl">
          <b className="text-green-600">GROW 🚀 </b> their business
        </span>
      </div>
      <div className="object-cover w-80 h-80 rounded-xl overflow-hidden shadow-md">
        <img
          src={growth1}
          alt=""
          className="hover:scale-105 transition-all ease-in-out duration-200"
        />
      </div>
      <div className="m-5 text-xl">
        One stop solution for <b className="text-red-500">Accelerating</b> your businness growth!
      </div>
      <div className="object-cover w-80 h-80 rounded-xl overflow-hidden shadow-md mb-5">
        <img
          src={growth2}
          alt=""
          className="hover:scale-105 transition-all ease-in-out duration-200"
        />
      </div>
    </div>
  );
};

export default Home;
