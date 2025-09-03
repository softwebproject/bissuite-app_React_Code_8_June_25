"use client";
import React, { useState } from "react";
import Link from "next/link";

const tabs = [
  { name: "Personal Info", path: "/profile/" },
 // { name: "Settings", path: "/profile/" },
  { name: "Gigs", path: "/profile/gigs-revise" },
];

interface props {
  activeBar: string;
}

const ProfileBar = ({ activeBar }: props) => {
  const [activeTab, setActiveTab] = useState(activeBar);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="w-full">
        {/* Tabs */}
        <div className="flex flex-wrap items-center bg-white shadow-lg mb-4 rounded-md">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              href={tab.path}
              onClick={() => handleTabClick(tab.name)}
              className={`text-xs sm:text-sm lg:text-base px-1 sm:px-2 lg:px-3 py-5 mr-2 font-semibold focus:outline-none transition-colors duration-200 ${
                activeTab === tab.name
                  ? "text-black border-b-4 border-textThemeClr"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileBar;
