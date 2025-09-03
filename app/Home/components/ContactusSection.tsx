import Image from "next/image";
import React from "react";

import btnArrow from "../../../public/icons/icon-btnarrow.png";
import Link from "next/link";
const ContactusSection = () => {
  return (
    <>
      <div className="bg-white pb-10">
        <div className="py-10 px-5">
          <h1 className="text-[#263238] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-center font-black ">
            Contact Us for a <br /> Business Consultation
          </h1>
        </div>
        <div className="flex justify-center">
          <Link href="/contactus">
            <button className="bg-textThemeClr hover:bg-btnHover text-white h-[54px] w-[180px] rounded-lg text-base">
              <div className="flex justify-evenly items-center">
                Contact us{" "}
                <span>
                  <Image src={btnArrow} alt="btn arrow" />
                </span>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactusSection;
