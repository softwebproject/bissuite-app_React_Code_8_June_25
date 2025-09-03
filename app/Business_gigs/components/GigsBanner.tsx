import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const GigsBanner = () => {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(360deg, rgba(76, 175, 79, 0.98) -37.51%, rgba(98, 224, 102, 0.85) 109.11%), url('/images/gigs/bannerImg.png')`,
        }}
      >
        <div className="flex flex-col items-center justify-center py-16">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white text-center">
            What business service are you looking for today?
          </h1>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Search & Hire Us
          </h2>
        </div>

        <div className="max-w-xl mx-auto flex pb-10 px-1">
          {" "}
          {/* Changed from max-w-md to max-w-xl */}
          <div className="relative w-full">
            {" "}
            {/* Added w-full to ensure the input takes full width */}
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <BiSearchAlt2 className=" text-textThemeClr text-2xl" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-s-md bg-gray-50"
              placeholder="Search 2D Logo, Minimal Logo, Isometric etc."
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-textThemeClr font-medium rounded-e-md text-sm px-4 py-2"
          >
            <BiSearchAlt2 className=" text-white text-4xl" />
          </button>
        </div>

        <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 pb-10">
          <h1 className="text-white ">Popular searches:</h1>
          <div className="flex gap-4">
            <span className="text-white">LLC</span>
            <span className="text-white">SWOT</span>
            <span className="text-white">BMC</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default GigsBanner;
