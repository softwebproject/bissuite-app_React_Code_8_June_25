import React from "react";
import Image from "next/image";
import member from "../../../public/icons/member.png";
import club from "../../../public/icons/club.png";
import eventBooking from "../../../public/icons/eventBooking.png";
import payments from "../../../public/icons/payments.png";

const stats = [
  { icon: member, value: "1000", label: "Members" },
  { icon: club, value: "1567", label: "Strategies Developed" },
  { icon: payments, value: "8078", label: "Validated Ideas" },
  { icon: eventBooking, value: "8867 ", label: "Consultation Bookings" },
];

const HelpingSection = () => {
  return (
    <div className="bg-bgthemeClr pt-10 mt-10">
      <div className="mx-auto px-5 sm:px-10 xl:px-40">
        <section className="flex flex-col md:flex-row p-5 md:p-10">
          {/* Left Side */}
          <div className="w-full md:w-1/2 mt-5 md:mb-0">
            <h1 className="text-center md:text-left text-themeblackClr text-2xl md:text-4xl font-semibold px-5">
              Revitalizing Local <br />
              <span className="text-textThemeClr">
                Businesses with Innovative Solutions
              </span>
            </h1>           
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <section key={index} className="flex">
                  <div className="w-[48px] flex mr-3">
                    <Image
                      src={stat.icon}
                      alt={stat.label.toLowerCase()}
                      className="w-min-[48px] h-min-[48px] w-full h-full object-contain"
                    />
                  </div>

                  <div className="w-3/4">
                    <h2 className="text-2xl lg:text-3xl font-bold text-themeblackClr">
                      {stat.value}
                    </h2>
                    <h4 className="text-sm md:text-base text-themegrayClr">
                      {stat.label}
                    </h4>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpingSection;
