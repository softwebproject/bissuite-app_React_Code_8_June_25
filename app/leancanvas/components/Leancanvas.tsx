import BusniessmodelTitle from "@/app/businessmodel/components/BusniessmodelTitle";
import PageHeader from "@/app/Components/PageHeader";
import React from "react";
import LeanCardSection from "./LeanCardSection";

const Leancanvas = () => {
  return (
    <>
      <div>
        <PageHeader title="Lean Canvas" />
        <BusniessmodelTitle />
        <LeanCardSection />
      </div>
    </>
  );
};

export default Leancanvas;
