import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faImage, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const ExclusiveDesign = () => {
  return (
    <div className="bg-[#FAF9F8] font-['Playfair_Display'] w-full">
      <div className="flex flex-col md:flex-row w-full mx-0 md:mx-auto space-y-6 md:space-y-0 md:space-x-6 bg-white p-6 rounded-lg shadow-lg relative">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://storage.googleapis.com/a1aa/image/8fde0493-e1c7-4b74-a65f-e749f933d2f5.jpg"
            alt="White flowers in glass vases with green leaves and wine glasses on a table"
            className="object-cover object-center rounded-lg w-full max-w-md h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 space-y-6 relative">
          <p className="text-[10px] text-[#2C3E50] uppercase tracking-widest font-semibold mb-3">
            Inspiration
          </p>

          <h1 className="text-3xl md:text-4xl text-[#2C3E50] italic font-semibold mb-4 leading-tight">
            Exclusive Design by Best Florists
          </h1>

          <p className="text-sm text-[#3A3A3A] mb-10 max-w-md leading-relaxed">
            The floristry business has a significant market in the corporate and
            social event world, as flowers play a large part in the decor of
            special events and meetings.
          </p>

          <button className="bg-[#2C3E50] hover:bg-[#22374A] text-white text-[10px] font-semibold tracking-widest uppercase py-3 px-8 rounded-full shadow-md transition-all duration-300 w-max">
            Visit Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveDesign;
