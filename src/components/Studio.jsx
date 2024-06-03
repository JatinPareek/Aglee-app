import React from "react";
import studioimage from "../assets/Clip2.png";

const Studio = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-buttoncream p-4">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold poppins-regular opacity-1 mt-28">
          Studio Design encompasses{" "}
          <span className="text-3xl font-bold">
            <br />
            many{" "}
            <span className="text-customgreen font-bold poppins-regular">
              different skills
            </span>
          </span>{" "}
          and
          <br /> disciplines in the production
          <br /> and maintenance of your Work
        </h1>
      </div>
      <div className="flex mt-12">
        <div className="relative p-2">
          <img src={studioimage} alt="Discussion" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Studio;
