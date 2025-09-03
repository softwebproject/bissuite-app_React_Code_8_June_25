"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
const BusinessModel: React.FC = () => {
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
          {expanded ? "Business Model Canvas" : "Business Model Canvas"}
        </h2>
        <button onClick={toggleExpand} className="text-xl ml-auto">
          {expanded ? (
            <IoIosArrowDown className="text-purple-600" />
          ) : (
            <IoIosArrowForward className="text-themeblackClr" />
          )}
        </button>
      </div>

      <div
        className={`mt-4 transition-all duration-500 ${
          expanded
            ? "max-h-[1200px] overflow-visible"
            : "max-h-0 overflow-hidden hidden"
        }`}
      >
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Key Partners:
          </label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Key business partners"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Key Activities:
          </label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Main activities that drive the business"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-sm md:text-base">
            Key Resources:
          </label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Critical resources required for business operations"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-base">Value Propositions:</label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Unique value provided to customers"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-base">
            Customer Relationships:
          </label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Nature of relationship with customers"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Channels:
          </label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Channels used to reach customers"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-sm md:text-base">
            Customer Segments:
          </label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Different customer segments served"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-base">Cost Structure:</label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Cost drivers for the business"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-base">Revenue Streams:</label>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Sources of revenue"
            maxLength={100}
            rows={3}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default BusinessModel;
