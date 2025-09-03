"use client";
import React, { useState } from "react";
import "./diversityindex.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const ServicesSpecializations: React.FC = () => {
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
          {expanded
            ? "Services and Specializations"
            : "Services and Specializations"}
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
          expanded ? "max-h-screen" : "max-h-0 overflow-hidden hidden"
        }`}
      >
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Services Offered:
          </label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="e.g., Management Consulting, IT Consulting"
            maxLength={100}
            rows={2}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Specializations:
          </label>
          <input
            type="text"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="Specializations (e.g., HR, Finance)"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSpecializations;
