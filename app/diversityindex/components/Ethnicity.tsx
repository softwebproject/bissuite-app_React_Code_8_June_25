"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const Ethnicity: React.FC = () => {
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
          {expanded ? "Ethnicity" : "Ethnicity"}
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
            Count for Asian: (e.g., South Asian, East Asian, Southeast Asian)
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Black: (e.g., Black African, Black Caribbean)
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Arab/Other: (e.g., Arab, Persian)
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Mixed: (e.g., Mixed White and Black, Mixed Asian and
            White)
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for White British: (e.g., White British, White European, White
            North American)
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for White Other: (e.g., Latin American, Hispanic)
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="0"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Count for Undisclosed: (e.g., Native American, Aboriginal)
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

export default Ethnicity;
