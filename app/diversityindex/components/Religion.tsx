"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const Religion: React.FC = () => {
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
          {expanded ? "Religion" : "Religion"}
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
            ? "max-h-[1000px] overflow-visible"
            : "max-h-0 overflow-hidden hidden"
        }`}
      >
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Christian:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Islam:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Hinduism:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Buddhism:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Judaism:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Sikhism:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Other Faiths:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for No Religion:
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Undisclosed:
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

export default Religion;
