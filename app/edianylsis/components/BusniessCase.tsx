import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const BusinessCase = () => {
  return (
    <>
      <div className="w-full md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto bg-bgthemefooter text-white rounded-[45px]">
        <div className="px-3 sm:px-5 md:px-8 lg:px-10 xl:px-14">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium pt-10 my-2 text-center">
            The Business Case for EDI
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light my-2 text-center">
            Diverse companies outperform competitors. Research shows that
            organizations in the top quartile for gender diversity are 25% more
            likely to exceed profitability, while those excelling in ethnic
            diversity outperform peers by 36%.
          </p>
          <div className="flex flex-col md:flex-row pb-8 mt-4 items-stretch">
            {/* Left Box */}
            <div className="w-full md:w-2/6 border-t-2 md:border-t-0 md:border-r-[1px] px-2 flex flex-col">
              <p className="text-base sm:text-lg lg:text-xl font-light my-5 flex-grow">
                Diversity drives innovation and profitability.
              </p>
              <div className="mt-4 flex justify-center md:justify-normal mb-4">
                <h2 className="text-xl font-normal text-[#B9FF66] flex">
                  Financial Growth{" "}
                  <MdOutlineArrowOutward className="ml-2 text-3xl font-semibold" />
                </h2>
              </div>
            </div>
            {/* Center Box */}
            <div className="w-full mt-5 md:mt-0 md:w-2/6 px-5 border-t-2 md:border-l-[1px] md:border-t-0 flex flex-col">
              <p className="text-base sm:text-lg lg:text-xl font-light my-5 flex-grow">
                Inclusive environments foster engagement and retention.
              </p>
              <div className="mt-4 flex justify-center md:justify-normal mb-4">
                <h2 className="text-xl font-normal text-[#B9FF66] flex justify-start">
                  Employee Engagement{" "}
                  <MdOutlineArrowOutward className="ml-2 text-3xl" />
                </h2>
              </div>
            </div>
            {/* Right Box */}
            <div className="w-full mt-5 md:mt-0 md:w-2/6 px-5 border-t-2 md:border-l-[1px] md:border-t-0 flex flex-col">
              <p className="text-base sm:text-lg lg:text-xl font-light my-5 flex-grow">
                A diverse workforce brings fresh perspectives, leading to better
                decision making.
              </p>
              <div className="mt-4 flex justify-center md:justify-normal mb-4">
                <h2 className="text-xl font-normal text-[#B9FF66] flex">
                  Innovation <MdOutlineArrowOutward className="ml-2 text-3xl" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCase;
