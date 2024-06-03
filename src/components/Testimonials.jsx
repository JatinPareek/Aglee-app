import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-white py-16 ">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-sm font-bold poppins-regular text-customgreen">
              Testimonials
            </h2>
            <h3 className="text-4xl font-extrabold text-customblack poppins-regular mt-2">
              Clients give us
              <br />
              Excellent quotes
            </h3>
            {/* Pagination Indicators */}
            <div className="flex mt-20 mb-20">
              <div className="w-8 h-2 bg-customviolet rounded-full mr-2"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
          <div>
            <h4 className="font-bold poppins-light text-customviolet">
              Tony Nguyen
            </h4>
            <p className="text-sm text-customgray mt-1 poppins-light">
              CEO MOONTHEME
            </p>
            <p className="text-customblack mt-8 poppins-light">
              Hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adiling
              elit. Aliquam tate, tortor nec commodo ultricies vitae viverra
              urna. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor
              posuere Sed id interdum urna. Nam ac elit a ante commodo
              tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac
              nisi Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        {/* Newsletter Section */}
        <div className="mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-customblack poppins-regular">
            Subscribe To Get Newsletter
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 text-center py-2 border-b border-customblack mt-12 mb-8"
          />
          <button className="bg-customviolet text-white px-8 py-4  rounded-2xl">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
