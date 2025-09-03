import PageHeader from "@/app/Components/PageHeader";
import React from "react";
import BusniessmodelTitle from "./BusniessmodelTitle";
import CardsSection from "./CardsSection";

const Busniessmodel = () => {
  return (
    <>
      <div>
        <PageHeader title="Business Model Canvas" />

        <BusniessmodelTitle />
        <CardsSection />
      </div>
    </>
  );
};

export default Busniessmodel;
