"use client";
import React, { useState } from "react";
import "./diversityindex.css";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const CompanyInformation: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");

  const options = [
    "LLC",
    "LLP",
    "Sole Proprietorship",
    "Corporation",
    "Partnership",
    "Other",
  ];

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
          {expanded ? "Company Information" : "Company Information"}
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
            Company Name:
            <span className="text-red-500 ml-1 font-medium">*</span>
          </label>
          <input
            type="text"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="Enter Company Name"
            required
          />
        </div>

        <div className="relative mb-4">
          <label className="font-semibold text-sm md:text-base">
            Legal Structure:
          </label>
          {/* Dropdown Button */}
          <div
            className="w-full mt-2 p-3 border rounded-md cursor-pointer bg-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selected}
          </div>

          {/* Dropdown Options */}
          {isOpen && (
            <ul className="absolute w-full mt-1 border rounded-md bg-white shadow-lg z-10">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-green-600 hover:text-white cursor-pointer"
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Legal Structure:
          </label>
          <select className="w-full mt-2 p-2 border rounded-md" defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option value="LLC">LLC</option>
            <option value="LLP">LLP</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
            <option value="Corporation">Corporation</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
        </div> */}

        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Registered Address:
          </label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Enter registered address"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Total Employe:
            <span className="text-red-500 ml-1 font-medium">*</span>
          </label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-md "
            placeholder="Enter Total Employe"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
