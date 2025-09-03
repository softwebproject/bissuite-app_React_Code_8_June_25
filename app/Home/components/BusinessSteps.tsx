"use client";

import React from "react";

const BusinessSteps = () => {
  return (
    <section className="bg-gray-100 p-6 md:p-12 rounded-b-lg mt-10">
      <div className="md:mx-10 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-themeblackClr">
        How the AI Strategizer Works for Your Business
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-12 relative">
        {/** Steps Container */}
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center w-2/3 md:w-1/4 relative mt-10">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full text-2xl font-bold">
              1
            </div>
            <p className="mt-2 text-gray-700 font-medium">
            <h4 className="text-2xl title-style-1 font-bold text-themeblackClr">Choose Your Framework</h4>Select the Business Model Canvas for established businesses or the Lean Canvas for startups. Our AI guides you based on your goals.
            <br /><br /> </p>
          </div>

          {/* Connecting Line */}
          <div className="hidden md:block w-10 h-0.5 bg-gray-300"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center w-2/3 md:w-1/4 relative mt-10">
           <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full text-2xl font-bold">
              2
            </div>
            <p className="mt-2 text-gray-700 font-medium">
            <h4 className="text-2xl title-style-1 font-bold text-themeblackClr">Analyze Your Environment</h4>Explore external factors—political, economic, social, technological, legal, and environmental—that affect your business. Our AI spots opportunities and threats.
            </p>
          </div>

          {/* Connecting Line */}
          <div className="hidden md:block w-10 h-0.5 bg-gray-300"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center w-2/3 md:w-1/4 relative mt-10">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full text-2xl font-bold">
              3
            </div>
            <p className="mt-2 text-gray-700 font-medium">
            <h4 className="text-2xl title-style-1 font-bold text-themeblackClr">Build Your SWOT</h4> Combine insights from your canvas and analysis to identify strengths, weaknesses, opportunities, and threats. BisSuite’s AI organizes it for clarity.
            </p>
          </div>

          {/* Connecting Line */}
          <div className="hidden md:block w-10 h-0.5 bg-gray-300"></div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center w-2/3 md:w-1/4 relative mt-10">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-300 rounded-full text-2xl font-bold">
              4
            </div>
            <p className="mt-2 text-gray-700 font-medium">
            <h4 className="text-2xl title-style-1 font-bold text-themeblackClr">Strategize with TOWS</h4> Turn your SWOT into action using the TOWS Matrix. Our AI tailors strategies to fit your business, like leveraging strengths or minimizing risks.
            <br /><br /></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSteps;
