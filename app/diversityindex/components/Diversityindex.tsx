import PageHeader from "@/app/Components/PageHeader";
import React from "react";
import DIFormSection from "./DIFormSection";
import DISubHeader from "./DISubHeader";

const Diversityindex = () => {
  return (
    <>
      <div>
        <PageHeader title="Diversity Index Calculator" />
        <DISubHeader />
        <DIFormSection />
      </div>
    </>
  );
};

export default Diversityindex;
