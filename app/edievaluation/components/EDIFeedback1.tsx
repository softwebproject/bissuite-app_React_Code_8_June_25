"use client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

interface Feedback {
  evaluationData: {
    strategyAccessible?: string;
    definedGoals?: string;
    reviewProcess?: string;
    leadershipActions?: string;
    leadershipPolicies?: string;
    trainingOpportunities?: string;
    externalSupport?: string;
    collaboration?: string;
    toolsUsed?: string;
    recruitmentEfforts?: string;
    employmentConditions?: string;
    infrastructureExamples?: string;
    employeeFeedback?: string;
    belongingIndex?: string;
    retentionRates?: string;
    careerProgression?: string;
    ediAwards?: string;
  };
  showResult: boolean;
}

const EDIFeedback1: React.FC<Feedback> = ({ evaluationData, showResult }) => {
  // const reportRef = useRef(); // Reference to the section
  const reportRef = useRef<HTMLElement | null>(null);
  const downloadPDF = async () => {
    if (!reportRef.current) {
      console.error(
        "Error: reportRef is undefined or not attached to an element."
      );
      return;
    }

    const element = reportRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Feedback_Report.pdf");
  };

  const [feedbackMessage, setFeedbackMessage] = useState({
    strategyAccessible: "",
    definedGoals: "",
    reviewProcess: "",
    leadershipActions: "",
    leadershipPolicies: "",
    trainingOpportunities: "",
    externalSupport: "",
    collaboration: "",
    toolsUsed: "",
    recruitmentEfforts: "",
    employmentConditions: "",
    infrastructureExamples: "",
    employeeFeedback: "",
    belongingIndex: "",
    retentionRates: "",
    careerProgression: "",
    ediAwards: "",
  });
  useEffect(() => {
    // Only set the feedback if evaluationData exists and has valid values
    if (!evaluationData) return;

    const updatedFeedback = { ...feedbackMessage };

    if (evaluationData.strategyAccessible === "Yes") {
      updatedFeedback.strategyAccessible = `${evaluationData.strategyAccessible}: "Great! Your organization has a publicly accessible strategy document. This helps ensure transparency in your EDI efforts."`;
    } else if (evaluationData.strategyAccessible === "No") {
      updatedFeedback.strategyAccessible = `${evaluationData.strategyAccessible}: "Consider making your strategy document publicly accessible to promote transparency and engagement with EDI."`;
    }

    if (evaluationData.definedGoals === "Yes") {
      updatedFeedback.definedGoals = `${evaluationData.definedGoals}: "It's positive to see that defined goals/targets are in place. Clear goals allow for better tracking of progress."`;
    } else if (evaluationData.definedGoals === "No") {
      updatedFeedback.definedGoals = `${evaluationData.definedGoals}: "Defined goals are crucial for measuring success. Consider setting clear targets to track your EDI progress."`;
    }

    if (evaluationData.reviewProcess === "Yes") {
      updatedFeedback.reviewProcess = `${evaluationData.reviewProcess}: "The presence of review and reporting processes is essential to maintain accountability in your EDI strategy."`;
    } else if (evaluationData.reviewProcess === "No") {
      updatedFeedback.reviewProcess = `${evaluationData.reviewProcess}: "Implementing regular reviews and reporting processes can help ensure that your EDI goals are being met."`;
    }

    if (evaluationData.leadershipPolicies === "Yes") {
      updatedFeedback.leadershipPolicies = `${evaluationData.leadershipPolicies}: "Having relevant leadership policies, such as a Chief Diversity Officer, reflects a strong commitment to EDI from leadership."`;
    } else if (evaluationData.leadershipPolicies === "No") {
      updatedFeedback.leadershipPolicies = `${evaluationData.leadershipPolicies}: "Consider appointing a Chief Diversity Officer or implementing leadership policies to strengthen EDI efforts."`;
    }

    if (evaluationData.employeeFeedback === "Yes") {
      updatedFeedback.employeeFeedback = `${evaluationData.employeeFeedback}: "It's great that regular employee feedback mechanisms are in place. This helps gauge employee sentiment on diversity and inclusion."`;
    } else if (evaluationData.employeeFeedback === "No") {
      updatedFeedback.employeeFeedback = `${evaluationData.employeeFeedback}: "Establishing a regular feedback mechanism like surveys can help improve your EDI strategy by identifying employee concerns."`;
    }

    if (Number(evaluationData.belongingIndex) >= 4) {
      updatedFeedback.belongingIndex = `${evaluationData.belongingIndex}: "Employees from diverse backgrounds seem to feel a strong sense of belonging in your organization, which is a positive indicator of inclusion."`;
    } else if (Number(evaluationData.belongingIndex) <= 3) {
      updatedFeedback.belongingIndex = `${evaluationData.belongingIndex}: "There may be room for improvement in making employees from diverse backgrounds feel more included and engaged."`;
    }

    if (evaluationData.retentionRates === "Yes") {
      updatedFeedback.retentionRates = `${evaluationData.retentionRates}: "Monitoring retention rates for diverse groups helps ensure that your organization is retaining diverse talent."`;
    } else if (evaluationData.retentionRates === "No") {
      updatedFeedback.retentionRates = `${evaluationData.retentionRates}: "Tracking retention rates for diverse groups is important to ensure that your organization is addressing potential retention issues."`;
    }

    if (evaluationData.careerProgression === "Yes") {
      updatedFeedback.careerProgression = `${evaluationData.careerProgression}: "Providing equal opportunities for promotion and leadership roles for diverse employees reflects a strong commitment to EDI."`;
    } else if (evaluationData.careerProgression === "No") {
      updatedFeedback.careerProgression = `${evaluationData.careerProgression}: "Consider implementing policies that ensure equal opportunities for promotion and leadership roles for all employees."`;
    }

    if (evaluationData.ediAwards === "Yes") {
      updatedFeedback.ediAwards = `${evaluationData.ediAwards}: "Congratulations on receiving external recognition for your EDI efforts! This reflects a strong, visible commitment to diversity and inclusion."`;
    } else if (evaluationData.ediAwards === "No") {
      updatedFeedback.ediAwards = `${evaluationData.ediAwards}: "While external recognition is not necessary, striving for awards and certifications can enhance your organization's reputation in EDI."`;
    }

    // Update the feedback state
    setFeedbackMessage(updatedFeedback);
  }, [evaluationData]);
  if (!evaluationData) {
    return null; // Avoid rendering if no data is available
  }

  console.log("Show Result", showResult);
  return (
    <div className="px-1 md:px-10 lg:px-20 xl:px-52 pb-5 pt-0">
      <div className="bg-white w-full sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto rounded-xl my-3">
        <h1 className="text-2xl bg-green-500 text-white p-1 text-center rounded-t-xl">
          Feedback
        </h1>
        {showResult && (
          <div>
            <section className="p-4 max-w-4xl mx-auto my-1">
              <h2 className="text-end text-textThemeClr flex justify-end">
                <button
                  onClick={downloadPDF}
                  className="text-sm md:text-base flex items-center border-2 border-green-600 p-2 rounded-lg text-textThemeClr hover:bg-green-700 hover:text-white transition duration-300"
                >
                  <FaDownload className="mr-2" />
                  Download Report
                </button>
              </h2>
            </section>
            <section ref={reportRef} className="p-4 max-w-4xl mx-auto my-1">
              <h1 className="flex gap-2 text-sm md:text-xl font-bold my-2">
                <GoDotFill className="mt-1 text-xl" /> Vision & Strategy
              </h1>
              <label className="font-bold text-sm md:text-base text-textThemeClr">
                Is there a clear EDI strategy document??
              </label>
              <p className="font-medium text-sm md:text-base pb-3">
                {feedbackMessage.strategyAccessible}
              </p>

              <h1 className="flex gap-2 text-sm md:text-xl font-bold my-2">
                <GoDotFill className="mt-1 text-xl" /> Goals & Targets:
              </h1>
              <label className="font-bold text-sm md:text-base text-textThemeClr">
                Are there defined EDI goals/targets?
              </label>
              <p className="font-medium text-sm md:text-base pb-2">
                {feedbackMessage.definedGoals}
              </p>
              <label className="font-bold text-sm md:text-base text-textThemeClr">
                Is there evidence of review and reporting processes?
              </label>
              <p className="font-medium text-sm md:text-base pb-3">
                {feedbackMessage.reviewProcess}
              </p>
              {/* Third heading */}
              <h1 className="flex gap-2 text-sm md:text-xl font-bold my-2">
                <GoDotFill className="mt-1 text-xl" /> Leadership &
                Accountability:
              </h1>
              <label className="font-bold text-sm md:text-base text-textThemeClr">
                Are there relevant leadership policies (e.g., Chief Diversity
                Officer)?
              </label>
              <p className="font-medium text-sm md:text-base pb-3">
                {feedbackMessage.leadershipPolicies}
              </p>
              {/* Four Heading */}
              <h1 className="flex gap-2 text-sm md:text-xl font-bold my-2">
                <GoDotFill className="mt-1 text-xl" /> Employee Engagement &
                Inclusion:
              </h1>
              <label className="font-bold text-sm md:text-base text-textThemeClr">
                Is there a regular employee feedback mechanism (e.g., surveys)
                regarding diversity and inclusion?{" "}
              </label>
              <p className="font-medium text-sm md:text-base pb-2">
                {feedbackMessage.employeeFeedback}
              </p>
              <label className="font-bold text-sm md:text-base text-textThemeClr">
                How well do employees from diverse backgrounds feel they belong
                in the organization (scale 1-5)?{" "}
              </label>
              <p className="font-medium text-sm md:text-base pb-3">
                {feedbackMessage.belongingIndex}
              </p>
              {/* Fifth Heading */}
              <h1 className="flex gap-2 text-sm md:text-xl font-bold my-2">
                <GoDotFill className="mt-1 text-xl" />
                Retention & Career Progression:
              </h1>
              <label className="font-bold text-sm md:text-base text-textThemeClr">
                Does the organization monitor retention rates for diverse
                groups?{" "}
              </label>
              <p className="font-medium text-sm md:text-base pb-2">
                {feedbackMessage.retentionRates}
              </p>
              <label className="font-bold text-sm md:text-base text-textThemeClr">
                Are there equal opportunities for promotion and leadership roles
                for diverse employees?
              </label>
              <p className="font-medium text-sm md:text-base pb-3">
                {feedbackMessage.careerProgression}
              </p>

              <h1 className="flex gap-2 text-sm md:text-xl font-bold my-2">
                <GoDotFill className="mt-1 text-xl" /> External Recognition &
                Benchmarking:
              </h1>
              <label className="font-bold text-sm md:text-base text-textThemeClr">
                Has the organization received any awards or recognition for EDI
                efforts?
              </label>
              <p className="font-medium text-sm md:text-base pb-3">
                {feedbackMessage.ediAwards}
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default EDIFeedback1;
