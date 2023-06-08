import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import GigaApi from "../../apis/GigaApi";
const Email = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [fullName, setFulltName] = useState("");
  const [emailTo, setEmailTo] = useState("");
  const [emailFrom, setEmailFrom] = useState("");
  const [message, setMessage] = useState("");
  const handleSidebar = () => {
    setShowSidebar(true);
  };
  const handleEmail = async (e) => {
    e.preventDefault();
    // send email 👇🏻
    try {
      const templateParams = {
        from_name: fullName,
        to_email: emailTo,
        from_email: emailFrom,
        message: message,
      };
      emailjs.send(
        "service_9x41hvm",
        "template_69zbwea",
        templateParams,
        "-UP8avTCSYZlCo9lu"
      );
    } catch (err) {
      console.log(err);
    }

    // save email message to db 👇🏻
    try {
      const response = await GigaApi.post("/dashboard/message", {
        fullName: fullName,
        emailTo: emailTo,
        emailFrom: emailFrom,
        message: message,
      });
    } catch (err) {
      console.log(err, "email message err");
    }

    // set state to an empty string
    setEmailTo("");
    setEmailFrom("");
    setFulltName("");
    setMessage("");
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
        <div
          className="flex font-poppins text-sm md:text-base cursor-pointer border-2 rounded-md p-2 border-rose-600 bg-rose-500 text-white hover:text-black hover:bg-white active:scale-95 transition-all duration-200 ease-in-out"
          onClick={handleSidebar}
        >
          Send Email
        </div>
      )}
      <div className="">
        <div
          // w-[200px] md:w-[25vw]
          className={`top-0 right-0 bg-rose-600 w-full md:w-[40vw] h-full px-5 pt-10 text-white fixed z-40 transition-all duration-200 ease-in-out  ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center items-center overflow-hidden">
            <form
              // ref={form}
              className="flex flex-col justify-center items-center mt-10 gap-10"
            >
              <input
                value={fullName}
                onChange={(e) => setFulltName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="placeholder:text-black outline-none border-b-[2px] border-black rounded-lg p-3 text-black md:w-[250px] font-montserrat"
              />
              <input
                value={emailTo}
                onChange={(e) => setEmailTo(e.target.value)}
                type="text"
                placeholder="To"
                className="placeholder:text-black outline-none border-b-[2px] border-black rounded-lg p-3 text-black md:w-[250px] font-montserrat "
              />

              <input
                id="From"
                value={emailFrom}
                onChange={(e) => setEmailFrom(e.target.value)}
                type="text"
                placeholder="From"
                className="placeholder:text-black outline-none border-b-[2px] border-black rounded-lg p-3 text-black md:w-[250px] font-montserrat "
              />
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="Message"
                className="placeholder:text-black outline-none border-b-[2px] border-black rounded-lg p-3 text-black md:w-[250px] font-montserrat "
              />
            </form>
            <button
              className="active:scale-95 p-3 rounded-md font-montserrats mt-5 text-lg"
              onClick={handleEmail}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
