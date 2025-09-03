import Image from "next/image";
import React from "react";
import { BiLogoTelegram } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import reviewUser1 from "../../../../public/images/gigs/reviewUser1.png";
import onlineIcon from "../../../../public/images/gigs/onlineIcon.png";
import flagImg2 from "../../../../public/images/gigs/flagImg2.png";
const Categories = [
  "Consultant",
  "Branding Expert",
  "Business Model Canvas",
  "Skill title name four",
  "Business Project Manager",
];
const PVProfileSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-20">
      <div className="w-full md:w-[60%]">
        <div className="flex items-center gap-5">
          <div className="relative w-24 h-24 lg:w-40 lg:h-40">
            <Image
              src={reviewUser1}
              alt="User"
              className="rounded-full w-24 h:24 lg:w-40 lg:h-40"
            />
            <Image
              src={onlineIcon}
              alt="online"
              className="absolute bottom-5 right-1 w-3 h-3 lg:w-6 lg:h-6"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <span className="text-lg md:textr-xl lg:text-2xl font-bold text-gray-900">
                Isa stash
              </span>
              <span className="text-sm md:text-base font-medium text-[#74767E] my-1.5">
                @Isastash
              </span>
            </div>
            <div className="text-sm md:text-base  text-[#6F6F6F] my-1.5">
              Business Consultant
            </div>
            <div className="flex gap-2 text-xs lg:text-sm text-[#6F6F6F]">
              <Image
                src={flagImg2}
                alt="flag"
                className="w-[14px] h-[11px] mt-1.5"
              />
              <span>India</span>
              <span>|</span>

              <span>1,800 orders completed</span>
            </div>
            <div className="flex items-center text-yellow-500 text-sm lg:text-base">
              <FaStar className="mr-1" />
              5.0 <span className="text-gray-600 ml-1">(28)</span>
            </div>
          </div>
        </div>

        {/* Second About Section */}
        <section className="py-3">
          <h1 className="text-xl md:text-2xl font-bold text-black2 my-5">
            About Me
          </h1>
          <p className="text-base md:text-lg lg:text-xl my-5 text-[#6F6F6F]">
            Hi, My name is Isa Stash! I am founder and CEO of a well known
            company in my country. I have more than 7 years experience in the
            field of graphic designing and website development. I will bring
            your ideas to life. Please feel free to contact me .
          </p>
        </section>

        {/* Category Section */}

        <section className="py-3">
          <h1 className="text-xl md:text-2xl font-bold text-black2 my-5">
            Categories
          </h1>
          <div className="flex flex-wrap gap-2">
            {Categories.map((category, index) => (
              <div
                key={index}
                className="border border-[#F5F5F5] text-xs md:text-sm lg:text-base px-3 py-1.5 rounded-full"
              >
                {category}
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Right Side Section */}
      <div className="w-full md:w-[35%] mx-auto py-2">
        <section className="border border-[#E5E5E5] p-6 bg-white">
          <div className="flex items-center gap-5 mt-8">
            <div className="relative w-20 h-20">
              <Image
                src={reviewUser1}
                alt="User"
                className="rounded-full w-20 h-20"
              />
              <Image
                src={onlineIcon}
                alt="online"
                className="absolute bottom-3 -right-1 w-3 h-3 "
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2">
                <span className="text-lg md:textr-xl lg:text-2xl font-bold text-gray-900">
                  Isa stash
                </span>
              </div>

              <div className="flex gap-2 text-xs lg:text-sm text-[#6F6F6F]">
                <Image
                  src={flagImg2}
                  alt="flag"
                  className="w-[14px] h-[11px] mt-1.5"
                />
                <span>Online</span>
                <span>.</span>

                <span>6:44 AM Local time</span>
              </div>
            </div>
          </div>

          <div>
            <button className="bg-[#112838] text-white px-4 py-2 rounded-md mt-4 flex gap-4 w-full items-center justify-center">
              <BiLogoTelegram className="text-white text-lg" />
              <span className="text-sm md:text-base">Contact me</span>
            </button>

            <div className="flex flex-col sm:flex-row md:flex-col  xl:flex-row items-center justify-center gap-2 mt-3 text-sm text-[#6F6F6F]">
              Average response time: 1 hour
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PVProfileSection;
