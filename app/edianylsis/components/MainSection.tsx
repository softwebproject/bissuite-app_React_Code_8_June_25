import React from "react";
import WhyEDI from "./WhyEDI";
import ToolOffers from "./ToolOffers";
import BusniessCase from "./BusniessCase";
import CardSection from "./CardSection";

const MainSection = () => {
  return (
    <>
      <div className="bg-white pb-10">
        <div className="pt-10">
          <WhyEDI />
        </div>
        <div className="pt-10">
          <ToolOffers />
        </div>
        <div className="pt-10">
          <BusniessCase />
        </div>

        <div className="pt-10">
          <CardSection />
        </div>
      </div>
    </>
  );
};

export default MainSection;
