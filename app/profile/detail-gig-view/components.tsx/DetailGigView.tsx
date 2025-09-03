import React from "react";
import DGVProfileSection from "./DGVProfileSection";
import DGVAboutScetion from "./DGVAboutScetion";
import DGVReviewSection from "./DGVReviewSection";

const DetailGigView = () => {
  return (
    <>
      <div className="flex flex-col  px-4 sm:px-6 md:px-8 lg:px-20 xl:px-32 py-10 gap-4">
        <DGVProfileSection />
        <DGVAboutScetion />
        <DGVReviewSection />
      </div>
    </>
  );
};

export default DetailGigView;
