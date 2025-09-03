import React from "react";
import PVProfileSection from "./PVProfileSection";
import PVGigsSection from "./PVGigsSection";
import DGVReviewSection from "../../detail-gig-view/components.tsx/DGVReviewSection";

const ProfileView = () => {
  return (
    <>
      <div className="flex flex-col  px-4 sm:px-6 md:px-8 lg:px-20 xl:px-32 py-5 gap-4">
        <PVProfileSection />
        <PVGigsSection />
        <DGVReviewSection />
      </div>
    </>
  );
};

export default ProfileView;
