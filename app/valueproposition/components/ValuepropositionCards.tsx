"use client";
import React, { useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
// import { GrWaypoint } from "react-icons/gr";

import { MdOutlineAddTask } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
interface Segment {
  name: string;
  needs: string[];
  pains: string[];
  gains: string[];
}

interface Proposition {
  name: string;
  products: string[];
  painRelievers: string[];
  gainCreators: string[];
}

const ValuepropositionCards = () => {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [propositions, setPropositions] = useState<Proposition[]>([]);

  const [selectedSegment, setSelectedSegment] = useState<string>("");
  const [selectedProposition, setSelectedProposition] = useState<string>("");

  const [segmentValue, setSegmentValue] = useState<string>("");
  const [propositionValue, setPropositionValue] = useState<string>("");

  const [inputValue, setInputValue] = useState<string>("");
  const [inputValue1, setInputValue1] = useState<string>("");

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [dropdownOpen1, setDropdownOpen1] = useState<boolean>(false);
  // Add a new customer segment
  const addSegment = () => {
    if (segmentValue.trim() === "") return;
    const newSegment: Segment = {
      name: segmentValue,
      needs: [],
      pains: [],
      gains: [],
    };
    setSegments([...segments, newSegment]);
    setSegmentValue("");
  };
  const addProposition = () => {
    if (propositionValue.trim() === "") return;
    const newProposition: Proposition = {
      name: propositionValue,
      products: [],
      painRelievers: [],
      gainCreators: [],
    };
    setPropositions([...propositions, newProposition]);
    setPropositionValue("");
  };
  // Add details (Needs, Pains, Gains)
  const addDetail = (type: "needs" | "pains" | "gains", detail: string) => {
    if (selectedSegment === "" || detail.trim() === "") return;

    const updatedSegments = segments.map((segment) => {
      if (segment.name === selectedSegment) {
        return {
          ...segment,
          [type]: [...segment[type], detail],
        };
      }
      return segment;
    });

    setSegments(updatedSegments);
    setInputValue("");
  };

  const addDetail1 = (
    type: "products" | "painRelievers" | "gainCreators",
    detail: string
  ) => {
    if (selectedProposition === "" || detail.trim() === "") return;

    const updatedProposition = propositions.map((proposition) => {
      if (proposition.name === selectedProposition) {
        return {
          ...proposition,
          [type]: [...proposition[type], detail],
        };
      }
      return proposition;
    });

    setPropositions(updatedProposition);
    setInputValue1("");
  };

  return (
    <div className=" bg-bgthemeClr">
      <div className="px-1 sm:px-4  w-[90%] sm:w-[75%] md:w-full lg:w-[98%] xl:w-[80%] mx-auto flex flex-col md:flex-row gap-8 md:gap-2 lg:gap-6 xl:gap-8 py-6">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 bg-white py-6 px-2 sm:px-6 rounded-lg shadow-lg">
          <h2 className="text-base md:text-xl xl:text-2xl font-bold text-black mb-6 flex items-center justify-center">
            <FaRegListAlt className="mr-2 text-black-500" /> Customer Segments
          </h2>

          <div className="mb-6 flex">
            <input
              type="text"
              placeholder="Enter a new Customer Segment"
              value={segmentValue}
              onChange={(e) => setSegmentValue(e.target.value)}
              className="border border-gray-300  rounded-lg px-4 py-2 w-full text-gray-800"
            />
            <button onClick={addSegment}>
              <MdAddCircleOutline className="ml-2 mr-1 lg:ml-4 text-2xl lg:text-3xl text-themeblackClr" />
            </button>
          </div>

          <h3 className="text-sm xs:text-base lg:text-lg font-semibold text-gray-800 mb-3">
            Add Needs, Pains, Gains to Customer Segment
          </h3>
          <div className="relative">
            {/* Dropdown button */}
            <button
              className={`w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white shadow-sm ${
                segments.length > 0
                  ? "hover:bg-gray-100 cursor-pointer"
                  : "cursor-not-allowed"
              } transition-all`}
              onClick={() => {
                if (segments.length > 0) setDropdownOpen(!dropdownOpen);
              }}
              disabled={segments.length === 0}
            >
              {selectedSegment || "Select a Segment"}
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && segments.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 py-1">
                {segments.map((segment) => (
                  <li
                    key={segment.name}
                    onClick={() => {
                      setSelectedSegment(segment.name);
                      setDropdownOpen(false);
                    }}
                    className="px-4 py-2 text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer transition-all"
                  >
                    {segment.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input
            type="text"
            placeholder="Enter Detail"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 mt-3 rounded-lg px-4 py-2 w-full mb-4 text-gray-800"
          />

          <div className="flex gap-1 sm:gap-3 md:gap-1 lg:gap-3">
            <button
              onClick={() => addDetail("needs", inputValue)}
              className="flex text-sm sm:text-base md:text-sm lg:text-base items-center bg-green-500 hover:bg-green-600 text-white px-0 sm:px-2 md:px-0 lg:px-4 py-2 rounded-lg shadow-sm transition w-full justify-center whitespace-nowrap"
            >
              <MdOutlineAddTask className="mr-2 hidden sm:block" /> Add Need
            </button>
            <button
              onClick={() => addDetail("pains", inputValue)}
              className="flex text-sm sm:text-base md:text-sm lg:text-base items-center bg-red-500 hover:bg-red-600 text-white sm:px-2 md:px-0 lg:px-4 py-2 rounded-lg shadow-sm transition w-full justify-center whitespace-nowrap"
            >
              <MdOutlineAddTask className="mr-2 hidden sm:block" /> Add Pain
            </button>
            <button
              onClick={() => addDetail("gains", inputValue)}
              className="flex text-sm sm:text-base md:text-sm lg:text-base items-center bg-teal-500 hover:bg-teal-600  text-white sm:px-2 md:px-0 lg:px-4 py-2 rounded-lg shadow-sm transition w-full justify-center whitespace-nowrap"
            >
              <MdOutlineAddTask className="mr-2 hidden sm:block" /> Add Gain
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white py-6 px-2 sm:px-6 rounded-lg shadow-lg">
          <h2 className="text-base md:text-xl xl:text-2xl font-bold text-black mb-6 flex items-center justify-center">
            <FaRegListAlt className="mr-2 text-black-500" /> Value Propositions
          </h2>

          <div className="mb-6 flex">
            <input
              type="text"
              placeholder="Enter a new Customer Segment"
              value={propositionValue}
              onChange={(e) => setPropositionValue(e.target.value)}
              className="border border-gray-300  rounded-lg px-4 py-2 w-full text-gray-800"
            />
            <button onClick={addProposition}>
              <MdAddCircleOutline className="ml-2 mr-1 lg:ml-4 text-2xl lg:text-3xl text-themeblackClr" />
            </button>
          </div>

          <h3 className="text-sm xs:text-base lg:text-base xl:text-base font-semibold text-gray-800 mb-3">
            Add Products, Pain Relievers, Gain Creators to Value Proposition
          </h3>
          <div className="relative">
            {/* Dropdown button */}
            <button
              className={`w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white shadow-sm ${
                propositions.length > 0
                  ? "hover:bg-gray-100 cursor-pointer"
                  : "cursor-not-allowed"
              } transition-all`}
              onClick={() => {
                if (propositions.length > 0) setDropdownOpen1(!dropdownOpen);
              }}
              disabled={propositions.length === 0}
            >
              {selectedProposition || "Select a Segment"}
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpen1 ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {dropdownOpen1 && propositions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 py-1">
                {propositions.map((proposition) => (
                  <li
                    key={proposition.name}
                    onClick={() => {
                      setSelectedProposition(proposition.name);
                      setDropdownOpen1(false);
                    }}
                    className="px-4 py-2 text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer transition-all"
                  >
                    {proposition.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input
            type="text"
            placeholder="Enter Detail"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
            className="border border-gray-300 mt-3 rounded-lg px-4 py-2 w-full mb-4 text-gray-800"
          />

          <div className="flex gap-1 sm:gap-3 md:gap-1 lg:gap-3">
            <button
              onClick={() => addDetail1("products", inputValue1)}
              className="flex text-sm sm:text-base md:text-sm lg:text-base items-center bg-green-500 hover:bg-green-600 text-white px-0 sm:px-2 md:px-0 lg:px-4 py-2 rounded-lg shadow-sm transition w-full justify-center whitespace-nowrap"
            >
              <MdOutlineAddTask className="mr-2 hidden sm:block" /> Product
            </button>
            <button
              onClick={() => addDetail1("painRelievers", inputValue1)}
              className="flex text-sm sm:text-base md:text-sm lg:text-base items-center bg-red-500 hover:bg-red-600 text-white sm:px-2 md:px-0 lg:px-4 py-2 rounded-lg shadow-sm transition w-full justify-center whitespace-nowrap"
            >
              <MdOutlineAddTask className="mr-2 hidden sm:block" /> Pain Reliver
            </button>
            <button
              onClick={() => addDetail1("gainCreators", inputValue1)}
              className="flex text-sm sm:text-base md:text-sm lg:text-base items-center bg-teal-500 hover:bg-teal-600  text-white sm:px-2 md:px-0 lg:px-4 py-2 rounded-lg shadow-sm transition w-full justify-center whitespace-nowrap"
            >
              <MdOutlineAddTask className="mr-2 hidden sm:block" />
              Gain Creator
            </button>
          </div>
        </div>

        {/* Right Panel */}
      </div>

      <section className="px-1 sm:px-4  w-[90%] sm:w-[75%] md:w-full lg:w-[98%] xl:w-[80%] mx-auto flex flex-col md:flex-row gap-8 md:gap-2 lg:gap-6 xl:gap-8 py-6">
        <div className="w-full bg-white rounded-md p-4 shadow-textThemeClr shadow-inner">
          <h2 className="text-xl text-textThemeClr font-bold mb-4">
            Canvas Overview
          </h2>
          {segments.map((segment) => (
            <div key={segment.name} className="mb-4">
              <h3 className="text-md  font-semibold">
                {" "}
                {" => "} {segment.name}
              </h3>
              <ul className="ps-10 text-themegrayClr list-disc text-sm md:text-base ">
                <li>
                  <strong>Needs:</strong> {segment.needs.join(", ")}
                </li>
                <li>
                  <strong>Pains:</strong> {segment.pains.join(", ")}
                </li>
                <li>
                  <strong>Gains:</strong> {segment.gains.join(", ")}
                </li>
              </ul>
            </div>
          ))}

          <h2 className="text-xl font-bold mb-4 text-textThemeClr">
            Propostion OVerview
          </h2>
          {propositions.map((proposition) => (
            <div key={proposition.name} className="mb-4">
              <h3 className="text-md font-semibold">
                {" => "}
                {proposition.name}
              </h3>
              <ul className="ps-10 text-themegrayClr list-disc text-sm md:text-base">
                <li>
                  <strong>Products:</strong> {proposition.products.join(", ")}
                </li>
                <li>
                  <strong>Pain Relivers:</strong>{" "}
                  {proposition.painRelievers.join(", ")}
                </li>
                <li>
                  <strong>Gain Creator:</strong>{" "}
                  {proposition.gainCreators.join(", ")}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ValuepropositionCards;
