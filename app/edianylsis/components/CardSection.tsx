import Link from "next/link";
import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const CardSection = () => {
  return (
    <>
      <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto  text-black rounded-[45px]">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 rounded-[45px] p-12 bg-[#F3F3F3] border-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl  font-bold my-3">
              Diversity Index Calculator
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light my-3 ">
              Evaluate your organization&apos;s diversity across age, ethnicity,
              gender, and more with our cutting-edge diversity index tool.
            </p>
            <div className="mt-6 flex justify-center md:justify-normal mb-4">
              <Link href="https://www.edianalytica.com/Diversity-Index-Calculator">
                <h2 className="text-xl font-normal flex">
                  <BsArrowUpRightCircleFill className="mr-3 mb-3 text-4xl font-semibold text-black bg-[#B9FF66] rounded-full" />
                  <span className="mt-1">Try Calculator</span>
                </h2>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 rounded-[45px] p-12 bg-[rgba(200,230,201,0.53)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl  font-bold my-3 ">
              Qualitative EDI Evaluation Form
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-light my-3">
              Get a qualitative evaluation of your organization’s EDI
              performance, covering leadership, recruitment, and engagement.
            </p>
            <div className="mt-6 flex justify-center md:justify-normal mb-4">
              <Link href="https://www.edianalytica.com/Qualitative-EDI-Evaluation-Form">
                <h2 className="text-xl font-normal flex">
                  <BsArrowUpRightCircleFill className="mr-3 mb-3 text-4xl font-semibold text-black bg-[#B9FF66] rounded-full" />
                  <span className="mt-1">Start the Evaluation</span>
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
