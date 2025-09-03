import React from "react";
import ProfileCard from "../../components/ProfileCard";
import GigDetails from "./GigDetails";
import LanguageCard from "./LanguageCard";

const GigsRevise = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-10 py-10 gap-10">
        <div className="w-full md:w-1/4">
          <ProfileCard />
          <LanguageCard />
        </div>
        <div className="w-full md:w-3/4 ">
          <GigDetails />
        </div>
      </div>
    </>
  );
};

export default GigsRevise;
