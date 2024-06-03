import React from "react";
import basic from "../assets/basic.png";
import standard from "../assets/standard.png";
import premium from "../assets/premium.png";

const Pricing = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto bg-white p-8 max-">
      <div className=" mb-8">
        <h2 className="text-lg font-semibold poppins-light text-customgreen mb-2">
          Pricing
        </h2>
        <h1 className="text-black text-4xl poppins-regular font-bold mb-6">
          We have best & affordable <br /> Pricing Plans
        </h1>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between gap-8">
        <div className="bg-white p-4 flex flex-col w-full">
          <h3 className="text-lg font-sm font-semibold text-customgray poppins-light">
            Basic
          </h3>
          <div className="flex justify-between w-full border-b border-customviolet">
            <p className="text-4xl font-bold text-customviolet mt-4">
              $30<span className="text-lg font-medium">/Month</span>
            </p>
            <img src={basic} alt="Basic Plan" className="w-16 h-16" />
          </div>

          <ul className="text-customgray mt-12 mb-14 space-y-2">
            <li>Acess to ready to use data</li>
            <li>Everyday excellent support</li>
            <li>Per year update</li>
          </ul>
          <button className="mt-16 bg-buttoncream text-customblack py-2 px-4 self-center rounded-full">
            Start Now
          </button>
        </div>
        <div className="bg-white p-4 flex flex-col w-full">
          <h3 className="text-lg font-sm font-semibold text-customgray poppins-light">
            Standard
          </h3>

          <div className="flex justify-between w-full border-b border-customviolet">
            <p className="text-4xl font-bold text-customviolet mt-4">
              $60<span className="text-lg font-medium">/Month</span>
            </p>
            <img src={standard} alt="Standard Plan" className="w-16 h-16" />
          </div>

          <ul className="text-customgray mt-10 space-y-2">
            <li>Acess to ready to use data</li>
            <li>Google number one ranking</li>
            <li>Free Open API</li>
            <li>Everyday excellent support</li>
            <li>Work flow intergration</li>
          </ul>
          <button className="mt-16 bg-customviolet text-white py-2 px-4 self-center rounded-full">
            Start Now
          </button>
        </div>
        <div className="bg-white p-4 flex flex-col w-full">
          <h3 className="text-lg font-sm font-semibold text-customgray poppins-light">
            Premium
          </h3>
          <div className="flex justify-between w-full border-b border-customviolet">
            <p className="text-4xl font-bold poppins-regular text-customviolet mt-4">
              $100
              <span className="text-lg font-small poppins-regular font-semibold">
                /Month
              </span>
            </p>
            <img src={premium} alt="Premium Plan" className="w-16 h-16" />
          </div>

          <ul className="text-customgray mt-10 space-y-2">
            <li>Acess to ready to use data</li>
            <li>Google number one ranking</li>
            <li>Free Open API</li>
            <li>Everyday excellent support</li>
            <li>Work flow intergration</li>
          </ul>
          <button className="mt-16 bg-buttoncream text-customblack py-2 px-4 self-center rounded-full">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
