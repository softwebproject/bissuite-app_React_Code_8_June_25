import React from "react";

import { IoIosArrowDown } from "react-icons/io";
import CompanyInformation from "./CompanyInformation";
import ServicesSpecializations from "./ServicesSpecializations";
import AgeGroup from "./AgeGroup";
import Ethnicity from "./Ethnicity";
import Gender from "./Gender";
import Disability from "./Disability";
import Religion from "./Religion";
import SexualOrientation from "./SexualOrientation";

const DIFormSection = () => {
  return (
    <>
      <div className="bg-bgthemeClr">
        <div className="px-1 md:px-20 lg:px-30 xl:px-52 py-20 relative z-10">
          <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
            <CompanyInformation />
          </div>
          <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
            <ServicesSpecializations />
          </div>
          <section>
            <div className="w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
              <h2 className="font-bold text-2xl">Diversity Data Input</h2>
            </div>
            <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
              <AgeGroup />
            </div>
            <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
              <Ethnicity />
            </div>
            <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
              <Gender />
            </div>
            <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
              <Disability />
            </div>
            <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
              <Religion />
            </div>
            <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
              <SexualOrientation />
            </div>
            <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3"></div>
          </section>
          <div className="flex flex-col sm:flex-row justify-center items-center mx-auto sm:justify-around mt-10 gap-y-4 sm:gap-y-0">
            <button className="bg-textThemeClr hover:bg-btnHover text-white h-[54px] w-[240px] rounded-lg text-base font-medium">
              <div className="flex justify-evenly items-center">
                Submit EDI Evaluation
                <span>
                  <IoIosArrowDown className="text-white font-medium text-base" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DIFormSection;
