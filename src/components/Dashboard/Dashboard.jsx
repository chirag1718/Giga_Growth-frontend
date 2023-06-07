import React, { useEffect, useState } from "react";
import GigaApi from "../../apis/GigaApi";
import Email from "../General/Email";
const Dashboard = () => {
  const [selectedData, setSelectedData] = useState(null);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await GigaApi.get("/dashboard");
        setSelectedData(response.data);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-10 ">
        <div className="text-center text-lg mb-2">
          <span>Stock: Relaince Industries 🚀</span>
        </div>
        <div className="border-[1px] border-gray-300 rounded-lg w-[250px] h-[300px] sm:w-[300px]  shadow-sm">
          {selectedData && (
            <div className="flex flex-col justify-center items-start">
              {Object.entries(selectedData).map(([key, value]) => (
                <div key={key} className="px-3 py-2 text-sm ">
                  <span className="uppercase">{key} :</span>{" "}
                  <span className="text-rose-500">₹ {value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <Email />
      </div>
    </div>
  );
};

export default Dashboard;
