"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const AgeGroup: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="bg-white p-2 sm:p-3 md:p-5 rounded-lg shadow-md">
      <div
        className={`flex items-center ${
          expanded ? "justify-center" : "justify-between"
        }`}
      >
        <h2
          className={`font-bold text-xl ${
            expanded ? "text-center w-full" : ""
          }`}
        >
          {expanded ? "Age Groups" : "Age Groups"}
        </h2>
        <button onClick={toggleExpand} className="text-xl ml-auto">
          {expanded ? (
            <IoIosArrowDown className="text-textThemeClr" />
          ) : (
            <IoIosArrowForward className="text-themeblackClr" />
          )}
        </button>
      </div>

      <div
        className={`mt-4 transition-all duration-500 ${
          expanded
            ? "max-h-[1100px] overflow-visible"
            : "max-h-0 overflow-hidden hidden"
        }`}
      >
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Age Group 16-19:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Age Group 20-24:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Age Group 25-34:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Age Group 35-49:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Age Group 50-64:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Age Group 65+:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default AgeGroup;
