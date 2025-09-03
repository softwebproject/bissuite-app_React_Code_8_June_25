import CustomButton from "@/app/Components/Button/CustomButton";
import Image from "next/image";
import React from "react";
import ediSubHeaderImg from "../../../public/images/EDIAnylsis/ediAnylsisSubHeader.png";

const WhyEDI = () => {
  return (
    <>
      <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto bg-[#f3f3f3] rounded-[45px]">
        <div className="px-3 sm:px-5 md:px-8 lg:px-10 xl:px-14">
          <div className="flex flex-col md:flex-row">
            {/* Left Box */}
            <div className="w-full md:w-1/2">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-black font-medium mt-10 my-2">
                Why EDI Matters
              </h1>
              <p className="text-base sm:text-lg lg:text-xl font-light my-5">
                Organizations today recognize that diversity goes beyond
                representation; it’s about fostering a culture of inclusion.
                Research shows that gender and ethnic diversity drive
                innovation, agility, and financial success, but true inclusion
                is key to unlocking the full potential of diversity.
              </p>
              <div className="mt-4 flex justify-center md:justify-normal mb-4">
                <CustomButton
                  text="Quantitative EDI Evaluation Form"
                  textSize="text-lg"
                  fontWeight="font-medium"
                  link="https://www.edianalytica.com/Qualitative-EDI-Evaluation-Form"
                />
              </div>
            </div>
            {/* Rigth Box */}
            <div className="w-full mt-5 md:mt-0 md:w-1/2">
              <Image
                className="w-[360px] h-[360px] mx-auto"
                src={ediSubHeaderImg}
                alt="Sub Header Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyEDI;
