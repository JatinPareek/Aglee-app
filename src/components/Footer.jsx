import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Social Media */}
        <div className="flex flex-col mx-auto items-start space-y-4">
          <div className="flex items-center space-x-2 ml-4">
            <img src={logo} alt="Logo" className="w-18 h-12" />
            {/* <span className="font-bold text-2xl">Aglee</span> */}
          </div>
          <div className="flex space-x-4 mt-4 mb-8 ml-4">
            <a href="#" className="text-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600">
              <FaYoutube />
            </a>
            <a href="#" className="text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600">
              <FaInstagram />
            </a>
          </div>
          <div className="mt-4 ml-4">
            <p className="text-customgray text-sm poppins-light">
              © Copyright 2020. Made by moontheme
            </p>
          </div>
        </div>

        {/* Email and Address */}
        <div className="flex flex-col mx-auto space-y-4 ml-56">
          <div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-2 bg-customviolet rounded-full mr-2"></div>
              <h4 className="text-sm text-customgray poppins-light">
                Email Us
              </h4>
            </div>

            <p className="text-lg text-black poppins-light ml-14">
              info@moontheme.net
            </p>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-2 bg-customviolet rounded-full mr-2"></div>
              <h4 className="text-sm text-customgray poppins-light">
                Head Office
              </h4>
            </div>
            <p className="text-lg text-black poppins-light ml-16">
              004 Riley Street, Surry Hills 2050 Sydney, Australia
            </p>
          </div>
        </div>

        {/* Contact Number */}
        <div className="flex flex-col items-start space-y-1 ml-12">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-2 bg-customviolet rounded-full"></div>
            <h4 className="text-sm text-customgray poppins-light">Call Us</h4>
          </div>
          <p className="text-lg text-black poppins-light ml-12">
            + 452 86 4332 4453
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
