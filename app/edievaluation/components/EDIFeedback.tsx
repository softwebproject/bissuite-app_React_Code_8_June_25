"use client";

import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import { jsPDF } from "jspdf";
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

const EDIFeedback: React.FC<Feedback> = ({ evaluationData, showResult }) => {
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

  const downloadReport = () => {
    const doc = new jsPDF();

    // Add Title
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0); // Black color for the title
    doc.setFillColor(255, 0, 0); // Red background color
    // doc.rect(x, y, width, height, "F"); // Draw the rectangle (F stands for filled)
    doc.setFont("helvetica", "bold");
    doc.text("EDI Feedback Report", 105, 20, { align: "center" });

    // Add sections of the report with custom styling and formatting
    const sections = [
      {
        title: "Vision & Strategy",
        labels: ["Is there a clear EDI strategy document??"],
        contents: [feedbackMessage.strategyAccessible],
        titleStyle: { size: 16, color: [0, 0, 0], bold: true }, // Black title
        contentStyle: { size: 12, color: [0, 0, 0], bold: false }, // Black content
        labelStyle: { size: 12, color: [0, 102, 0], bold: true }, // Green label
      },
      {
        title: "Goals & Targets",
        labels: [
          "Are there defined EDI goals/targets?",
          "Is there evidence of review and reporting processes?",
        ],
        contents: [feedbackMessage.definedGoals, feedbackMessage.reviewProcess],
        titleStyle: { size: 16, color: [0, 0, 0], bold: true }, // Black title
        contentStyle: { size: 12, color: [0, 0, 0], bold: false }, // Black content
        labelStyle: { size: 12, color: [0, 102, 0], bold: true }, // Green label
      },
      {
        title: "Leadership & Accountability",
        labels: [
          "Are there relevant leadership policies (e.g., Chief Diversity Officer)?",
        ],
        contents: [feedbackMessage.leadershipPolicies],
        titleStyle: { size: 16, color: [0, 0, 0], bold: true }, // Black title
        contentStyle: { size: 12, color: [0, 0, 0], bold: false }, // Black content
        labelStyle: { size: 12, color: [0, 102, 0], bold: true }, // Green label
      },
      {
        title: "Employee Engagement & Inclusion",
        labels: [
          "Is there a regular employee feedback mechanism (e.g., surveys) regarding diversity and inclusion?",
          "How well do employees from diverse backgrounds feel they belong in the organization (scale 1-5)?",
        ],
        contents: [
          feedbackMessage.employeeFeedback,
          feedbackMessage.belongingIndex,
        ],
        titleStyle: { size: 16, color: [0, 0, 0], bold: true }, // Black title
        contentStyle: { size: 12, color: [0, 0, 0], bold: false }, // Black content
        labelStyle: { size: 12, color: [0, 102, 0], bold: true }, // Green label
      },
      {
        title: "Retention & Career Progression",
        labels: [
          "Does the organization monitor retention rates for diverse groups?",
          "Are there equal opportunities for promotion and leadership roles for diverse employees?",
        ],
        contents: [
          feedbackMessage.retentionRates,
          feedbackMessage.careerProgression,
        ],
        titleStyle: { size: 16, color: [0, 0, 0], bold: true }, // Black title
        contentStyle: { size: 12, color: [0, 0, 0], bold: false }, // Black content
        labelStyle: { size: 12, color: [0, 102, 0], bold: true }, // Green label
      },
      {
        title: "External Recognition & Benchmarking",
        labels: [
          "Has the organization received any awards or recognition for EDI efforts?",
        ],
        contents: [feedbackMessage.ediAwards],
        titleStyle: { size: 16, color: [0, 0, 0], bold: true }, // Black title
        contentStyle: { size: 12, color: [0, 0, 0], bold: false }, // Black content
        labelStyle: { size: 12, color: [0, 102, 0], bold: true }, // Green label
      },
    ];

    let yOffset = 30; // Starting position for the first section

    sections.forEach((section) => {
      // Print title with black color
      doc.setFontSize(section.titleStyle.size);
      doc.setTextColor(
        section.titleStyle.color[0],
        section.titleStyle.color[1],
        section.titleStyle.color[2]
      );
      doc.setFont(
        section.titleStyle.bold ? "helvetica" : "helvetica",
        section.titleStyle.bold ? "bold" : "normal"
      );
      doc.text(section.title, 10, yOffset);
      yOffset += 7; // Add space between title and labels

      // Print multiple labels and content
      section.labels.forEach((label, index) => {
        // Print label with green color
        doc.setFontSize(section.labelStyle.size);
        doc.setTextColor(
          section.labelStyle.color[0],
          section.labelStyle.color[1],
          section.labelStyle.color[2]
        );
        doc.setFont(
          section.labelStyle.bold ? "helvetica" : "helvetica",
          section.labelStyle.bold ? "bold" : "normal"
        );
        doc.text(label, 10, yOffset);
        yOffset += 5; // Add space after label

        // Print corresponding content with black color
        doc.setFontSize(section.contentStyle.size);
        doc.setTextColor(
          section.contentStyle.color[0],
          section.contentStyle.color[1],
          section.contentStyle.color[2]
        );
        doc.setFont(
          section.contentStyle.bold ? "helvetica" : "helvetica",
          section.contentStyle.bold ? "bold" : "normal"
        );

        // Add content and handle multiline text
        const content = section.contents[index] || "No data available";
        const lines = doc.splitTextToSize(content, 180); // Wrap text after 180mm
        doc.text(lines, 10, yOffset);

        // Adjust the yOffset after each label and content
        yOffset += lines.length * 6; // Adjust for line height and some margin
      });

      // Add space between sections
      yOffset += 5;
    });

    // Save the PDF
    doc.save("EDI_Feedback_Report.pdf");
  };

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
                  onClick={downloadReport}
                  className="text-sm md:text-base flex items-center border-2 border-green-600 p-2 rounded-lg text-textThemeClr hover:bg-green-700 hover:text-white transition duration-300"
                >
                  <FaDownload className="mr-2" />
                  Download Report
                </button>
              </h2>
            </section>
            <section className="p-4 max-w-4xl mx-auto my-1">
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

export default EDIFeedback;
