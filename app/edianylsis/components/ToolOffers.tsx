// import CustomButton from "@/app/Components/Button/CustomButton";
// import Image from "next/image";
import React from "react";
// import ediSubHeaderImg from "../../../public/images/EDIAnylsis/ediAnylsisSubHeader.png";
import { MdOutlineArrowOutward } from "react-icons/md";
const ToolOffers = () => {
  return (
    <>
      <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto bg-bgthemefooter text-white rounded-[45px]">
        <div className="px-3 sm:px-5 md:px-8 lg:px-10 xl:px-14">
          <h1 className="text-xl sm:text-2xl md:text-3xl  font-medium pt-10 my-2 text-center">
            What the EDI Tool Offers
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-medium my-2 text-center">
            Comprehensive Analysis
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light my-2 text-center">
            Our tool combines data insights and employee feedback to provide a
            complete view of your organization’s inclusiveness.
          </p>
          <div className="flex flex-col md:flex-row pb-8 mt-4">
            {/* Left Box */}
            <div className="w-full md:w-1/2 border-t-2 md:border-t-0 md:border-r-[1px] px-2">
              <p className="text-base sm:text-lg lg:text-xl font-light my-5">
                Track representation across gender, race, disability, and other
                key dimensions.
              </p>
              <div className="mt-4 flex justify-center md:justify-normal mb-4">
                <h2 className="text-xl font-normal text-[#B9FF66] flex">
                  Diversity Metrics{" "}
                  <MdOutlineArrowOutward className="ml-2 text-3xl font-semibold" />
                </h2>
              </div>
            </div>
            {/* Rigth Box */}
            <div className="w-full mt-5 md:mt-0 md:w-1/2 px-5 border-t-2 md:border-l-[1px] md:border-t-0">
              <p className="text-base sm:text-lg lg:text-xl font-light my-5">
                Comprehensive assessment tool designed to review and enhance
                your organization’s commitment to Equality, Diversity, and
                Inclusion (EDI) to identify the gaps in fairness and
                accountability.
              </p>
              <div className="mt-4 flex justify-center md:justify-normal mb-4">
                <h2 className="text-xl font-normal text-[#B9FF66] flex">
                  Diversity & Inclusion Insights{" "}
                  <MdOutlineArrowOutward className="ml-2 text-3xl" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolOffers;
