import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 justify-center items-center my-10 relative">
        <div className="border-2 border-black w-[250px] h-[400px] md:w-[800px] md:h-[400px] lg:w-[800px] lg:h-[500px] xl:w-[1024px] shadow-md"></div>
      </div>
      <div>
        <button className="md:absolute md:bottom-3 md:right-5 border-2 p-3 rounded-lg border-rose-500 active:scale-95">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
