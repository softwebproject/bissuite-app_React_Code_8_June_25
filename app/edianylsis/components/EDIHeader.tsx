"use client";
import CustomButton from "@/app/Components/Button/CustomButton";
import React from "react";
// import homeHeaderImg from "../../../public/images/Home/homeHeaderImg.png";
import ediHeaderImg from "../../../public/images/EDIAnylsis/ediAnylsisHeader.png";
import Image from "next/image";

const EDIHeader = () => {
  return (
    <>
      <div className="bg-bgthemeClr">
        <div className="py-10 md:py-14  px-5 sm:px-10 xl:px-40">
          <section className="flex flex-col md:flex-row">
            <div className="w-full md:w-[60%] px-5 md:px-10">
              <h1 className="text-[32px] sm:text-[48px] md:text-[52px] lg:text-[64px] text-textThemeClr font-semibold leading-tight">
                Data-driven insights {"  "}
                <span className="text-[#4D4D4D]">
                  for Equality, Diversity, and Inclusion (EDI) in the workplace
                </span>
              </h1>
              <h3 className=" my-3 text-xl sm:text-2xl lg:text-3xl text-[#717171]">
                Empower Your Business with Proven Frameworks
              </h3>
              <div className="mt-4">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mx-auto">
                  <CustomButton
                    text="Diversity Index Calculator"
                    textSize="text-base"
                    fontWeight="font-bold"
                    link="https://www.edianalytica.com/Diversity-Index-Calculator"
                  />

                  <CustomButton
                    text="Quantitative EDI Evaluation"
                    textSize="text-base"
                    fontWeight="font-bold"
                    link="https://www.edianalytica.com/Qualitative-EDI-Evaluation-Form"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[40%] mt-10 md:mt-0">
              <Image
                className="w-full h-full object-contain"
                src={ediHeaderImg}
                alt="Header Image"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EDIHeader;
