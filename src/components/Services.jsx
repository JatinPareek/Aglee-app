import React from "react";
import logo1 from "../assets/partnerslogo/Angrycreative.png"; // Replace with actual paths to your logos
import logo2 from "../assets/partnerslogo/apper.png"; // Replace with actual paths to your logos
import logo3 from "../assets/partnerslogo/beyond.png"; // Replace with actual paths to your logos
import logo4 from "../assets/partnerslogo/epanal.png"; // Replace with actual paths to your logos
import logo5 from "../assets/partnerslogo/Fedxlogo.png"; // Replace with actual paths to your logos
import logo6 from "../assets/partnerslogo/last.png"; // Replace with actual paths to your logos
import logo7 from "../assets/partnerslogo/squirrel.png";

const Services = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-12">
          <h2 className="poppins-regular text-customblack font-semibold">
            Trusted by thousands
            <br />
            of diverse partners
          </h2>
        </div>
        <div className="flex space-x-28">
          <img src={logo1} alt="Logo 1" className="h-6 opacity-60" />
          <img src={logo2} alt="Logo 2" className="h-6 opacity-60" />
          <img src={logo3} alt="Logo 3" className="h-6 opacity-60" />
          <img src={logo4} alt="Logo 4" className="h-6 opacity-60" />
          <img src={logo5} alt="Logo 5" className="h-6 opacity-60" />
          <img src={logo6} alt="Logo 6" className="h-6 opacity-60" />
          <img src={logo7} alt="Logo 7" className="h-6 opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default Services;
