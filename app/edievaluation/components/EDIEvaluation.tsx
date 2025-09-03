import PageHeader from "@/app/Components/PageHeader";
import React from "react";
import EvaluationSubHeader from "./EvaluationSubHeader";
import EvalutionFormSection from "./EvalutionFormSection";

const EDIEvaluation = () => {
  return (
    <>
      <div>
        <PageHeader title="Qualitative EDI Evaluation Form" />
        <EvaluationSubHeader />
        {/* <EvaluationForm /> */}
        <EvalutionFormSection />
      </div>
    </>
  );
};

export default EDIEvaluation;
