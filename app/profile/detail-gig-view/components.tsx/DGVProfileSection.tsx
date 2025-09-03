"use client";
import Image from "next/image";
import React from "react";
import reviewUser1 from "../../../../public/images/gigs/reviewUser1.png";
import flagImg2 from "../../../../public/images/gigs/flagImg2.png";
import { FaStar } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { useRouter } from "next/navigation";
const DGVProfileSection = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6 lg:gap-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-20">
          <div className="w-full md:w-[60%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#112838] leading-9">
              I will write a complete business plan with a financial plan
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-[#6F6F6F] my-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint.{" "}
            </p>

            <div className="flex items-center gap-5 mt-8">
              <Image
                src={reviewUser1}
                alt="User"
                className="rounded-full w-24 h-24"
              />
              <div className="flex flex-col gap-1">
                <div
                  onClick={() => router.push("/profile/profile-view")}
                  className="text-base md:textr-lg lg:text-xl font-bold text-gray-900 cursor-pointer"
                >
                  Isa stash
                </div>
                <div className="flex gap-2 text-xs lg:text-sm text-[#6F6F6F]">
                  <Image
                    src={flagImg2}
                    alt="flag"
                    className="w-[14px] h-[11px] mt-1.5"
                  />
                  <span>India</span>
                  <span>|</span>
                  <span>I speak Urdu, English</span>
                  <span>|</span>
                  <span>1,800 orders completed</span>
                </div>
                <div className="flex items-center text-yellow-500 text-sm lg:text-base">
                  <FaStar className="mr-1" />
                  5.0 <span className="text-gray-600 ml-1">(28)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[35%] mx-auto">
            <section className="w-[90%] mx-auto border border-[#E5E5E5] p-6 bg-white">
              <div className="flex flex-col gap-3">
                <h1>
                  <span className="text-lg md:text-xl lg:text-2xl font-bold text-[#112838]">
                    $50
                  </span>{" "}
                  <span className="text-xs md:text-sm font-medium">
                    Starting from
                  </span>
                </h1>
                <p className="text-xs md:text-sm text-[#6F6F6F]">
                  I will provide you complete business plan with 5 years of
                  financial projections. To beat the boring number and digits, I
                  will provide you Analytics in GRAPHS and CHARTS.
                </p>
              </div>

              <div>
                <button className="bg-[#112838] text-white px-4 py-2 rounded-md mt-4 flex gap-4 w-full items-center justify-center">
                  <BiLogoTelegram className="text-white text-lg" />
                  <span className="text-sm md:text-base">Contact me</span>
                </button>

                <div className="flex flex-col sm:flex-row md:flex-col  xl:flex-row items-center justify-center gap-2 mt-3 text-sm text-textThemeClr">
                  <span>isastash@gmail.com</span>
                  <span className="hidden sm:block md:hidden xl:block">|</span>
                  <span>+91 12345 78900</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DGVProfileSection;
