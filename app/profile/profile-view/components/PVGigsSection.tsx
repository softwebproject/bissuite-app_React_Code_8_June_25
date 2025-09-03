import GigCard from "@/app/Components/GigCard";
import React from "react";

const PVGigsSection = () => {
  return (
    <>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-black2 py-5">
          My Gigs
        </h1>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-2 pb-10">
          <GigCard
            image="/images/gigs/gigImg1.png"
            price={192}
            userImage="/images/gigs/gigUser1.png"
            userName="Wade Warren"
            userRole="Consultant"
            description="I will develop investor ready business plan, pitch deck, and financial plan"
            rating={5.0}
            reviewsCount={16}
            liked={true}
          />
          <GigCard
            image="/images/gigs/gigImg2.png"
            price={192}
            userImage="/images/gigs/gigUser2.png"
            userName="Darlene Robertson"
            userRole="President of Sales"
            description="I will craft a business plan with marketing and financial model"
            rating={5.0}
            reviewsCount={16}
            liked={true}
          />
          <GigCard
            image="/images/gigs/gigImg3.png"
            price={192}
            userImage="/images/gigs/gigUser3.png"
            userName="Marvin McKinney"
            userRole="Nursing Assistant"
            description="I will do US tax filing, US tax returns, llc tax, business tax 1120 5472 1040 cpa"
            rating={5.0}
            reviewsCount={16}
            liked={true}
          />
        </div>
      </div>
    </>
  );
};

export default PVGigsSection;
