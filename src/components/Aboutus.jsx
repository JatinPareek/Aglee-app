import React from "react";
import icon1 from "../assets/icon.svg"; // Replace with actual paths to your icons
import icon2 from "../assets/icon-1.svg"; // Replace with actual paths to your icons
import icon3 from "../assets/icon-2.svg";

const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h3 className="text-lg font-semibold poppins-light text-customgreen mb-2">
            About Us
          </h3>
          <h2 className="text-4xl poppins-regular font-bold text-black mb-6">
            We build incredible products. Up to high level success
          </h2>
          <p className="text-customgray mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <p className="text-customgray">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>
        <div className="lg:w-1/2 mt-15 lg:mt-0 flex flex-col space-y-14 ml-20">
          <div className="flex items-start space-x-4">
            <img src={icon1} alt="Icon 1" className="w-12 h-12 mr-4" />
            <div>
              <h4 className="text-xl font-semibold poppins-regular text-black">
                Professional Support
              </h4>
              <p className="text-customgray">
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img src={icon2} alt="Icon 2" className="w-12 h-12 mr-4" />
            <div>
              <h4 className="text-xl font-semibold poppins-regular text-black">
                Discussion for Idea
              </h4>
              <p className="text-customgray">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img src={icon3} alt="Icon 3" className="w-12 h-12 mr-4" />
            <div>
              <h4 className="text-xl font-semibold poppins-regular text-black">
                Planning & Executing
              </h4>
              <p className="text-customgray">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
