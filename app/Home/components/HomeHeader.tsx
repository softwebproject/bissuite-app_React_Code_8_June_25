"use client";
import CustomButton from "@/app/Components/Button/CustomButton";
import React from "react";
// import homeHeaderImg from "../../../public/images/Home/homeHeaderImg.png";
import homeHeaderIm1 from "../../../public/images/Home/home-banner.png";
import Image from "next/image";

const HomeHeader = ({ onScroll }: { onScroll: () => void }) => {
  return (
    <>
      <div className="bg-bgthemeClr">
        <div className="py-10 md:py-14  px-5 sm:px-10 xl:px-40">
          <section className="flex flex-col md:flex-row">
            <div className="w-full md:w-[60%] px-5 md:px-10">
              <h1 className="text-[32px] sm:text-[48px] md:text-[52px] lg:text-[64px] text-textThemeClr font-semibold leading-tight">
                Visualize, Validate, and Grow {"  "}<br />
                <span className="text-[#4D4D4D]">
                 AI Strategizer
                </span>
              </h1>
              <h3 className=" my-3 text-xl sm:text-2xl lg:text-3xl text-[#717171]">
                Empower Your business with AI powered strategic Frameworks
              </h3>
              <div className="mt-4">
                <span onClick={onScroll}>
                  <CustomButton
                    text="Try now"
                    textSize="text-base"
                    fontWeight="font-bold"
                    link="/"
                  />
                </span>
              </div>
            </div>
            <div className="w-full md:w-[40%] mt-10 md:mt-0">
              <Image
                className="w-full h-full object-contain"
                src={homeHeaderIm1}
                alt="Header Image"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
