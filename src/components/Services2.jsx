import React from "react";
import icon1 from "../assets/muti.png";
import icon2 from "../assets/security.png";
import icon3 from "../assets/privacy.png";
import icon4 from "../assets/analysis.png";

const Services2 = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className=" mb-8">
          <h2 className="text-lg font-semibold poppins-light text-customgreen mb-2">
            Our Services
          </h2>
          <h2 className="text-black text-4xl poppins-regular font-bold mb-6">
            We provide professional
            <br />
            Solution for you
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={icon1} alt="Multi platform Support" className="mb-4" />
            <h4 className="text-customblack poppins-regular text-xl font-semibold mb-2">
              Multi platform Support
            </h4>
            <p className="text-customgray poppins-light-200">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={icon2} alt="Analytics Security" className=" mb-4" />
            <h4 className="text-customblack poppins-regular text-xl font-semibold mb-2">
              Analytics Security
            </h4>
            <p className="text-customgray poppins-light-200">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={icon3} alt="Data Privacy" className="mb-4" />
            <h4 className="text-customblack text-xl font-semibold poppins-regular mb-2">
              Data Privacy
            </h4>
            <p className="text-customgray poppins-light-200">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={icon4} alt="Reporting & Analysis" className=" mb-4" />
            <h4 className="text-customblack text-xl font-semibold poppins-regular mb-2">
              Reporting & Analysis
            </h4>
            <p className="text-customgray poppins-light-200">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
