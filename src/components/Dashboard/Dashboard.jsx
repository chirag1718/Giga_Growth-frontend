import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-10 ">
        <div className="border-[1px] border-black w-[250px] h-[400px] md:w-[800px] md:h-[400px] lg:w-[800px] lg:h-[500px] xl:w-[1024px] shadow-md">
          Hello I'm Dashboard Component
        </div>
      </div>
      <div>
        <button className="text-xs md:text-base border-2 p-3 rounded-lg border-rose-500 active:scale-95">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
