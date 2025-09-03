import PageHeader from "@/app/Components/PageHeader";
import React from "react";
import ValuepropositionCards from "./ValuepropositionCards";

const Valueproposition = () => {
  return (
    <>
      <div>
        <PageHeader title="Value Proposition Canvas" />
        <ValuepropositionCards />
      </div>
    </>
  );
};

export default Valueproposition;
