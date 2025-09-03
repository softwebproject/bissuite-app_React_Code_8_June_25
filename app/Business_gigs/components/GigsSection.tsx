import GigCard from "@/app/Components/GigCard";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const GigsSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-end gap-4">
          <div className="relative w-40">
            <select className="w-full appearance-none border border-gray-300 rounded-md px-4 py-3 text-sm pr-8">
              <option>Budget</option>
            </select>
            <FaChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
          </div>
          <div className="relative w-40">
            <select className="w-full appearance-none border border-gray-300 rounded-md px-4 py-3 text-sm pr-8">
              <option>Delivery Time</option>
            </select>
            <FaChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
          </div>
        </div>

        <section>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8">
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
            <GigCard
              image="/images/gigs/gigImg4.png"
              price={200}
              userImage="/images/gigs/gigUser4.png"
              userName="Darrell Steward"
              userRole="Web Designer"
              description="I will do grant research, apply for grants, write grant proposal, business plan"
              rating={5.0}
              reviewsCount={16}
              liked={true}
            />
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
            <GigCard
              image="/images/gigs/gigImg4.png"
              price={200}
              userImage="/images/gigs/gigUser4.png"
              userName="Darrell Steward"
              userRole="Web Designer"
              description="I will do grant research, apply for grants, write grant proposal, business plan"
              rating={5.0}
              reviewsCount={16}
              liked={true}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default GigsSection;
