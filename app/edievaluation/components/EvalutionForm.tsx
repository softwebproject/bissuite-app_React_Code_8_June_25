"use client";
import React from "react";

const EvaluationForm: React.FC = () => {
  // const [feedback, setFeedback] = useState<string | null>(null);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);

  //   const strategyAccessible = formData.get("strategyAccessible");
  //   const definedGoals = formData.get("definedGoals");
  //   // const reviewProcess = formData.get("reviewProcess");
  //   // const leadershipPolicies = formData.get("leadershipPolicies");
  //   // const employeeFeedback = formData.get("employeeFeedback");
  //   const belongingIndex = formData.get("belongingIndex") as string;
  //   // const retentionRates = formData.get("retentionRates");
  //   // const careerProgression = formData.get("careerProgression");
  //   // const ediAwards = formData.get("ediAwards");

  //   let feedbackMessage = "";

  //   // Generate feedback
  //   if (strategyAccessible === "Yes") {
  //     feedbackMessage +=
  //       "Great! Your organization has a publicly accessible strategy document.\n";
  //   } else {
  //     feedbackMessage +=
  //       "Consider making your strategy document publicly accessible.\n";
  //   }

  //   if (definedGoals === "Yes") {
  //     feedbackMessage +=
  //       "Having defined goals helps track progress effectively.\n";
  //   } else {
  //     feedbackMessage += "Setting clear goals is crucial for success.\n";
  //   }

  //   if (Number(belongingIndex) >= 4) {
  //     feedbackMessage += "Employees feel a strong sense of belonging.\n";
  //   } else {
  //     feedbackMessage +=
  //       "Improve inclusivity to increase employee belonging.\n";
  //   }

  //   setFeedback(feedbackMessage);
  // };

  return (
    // <div className="max-w-4xl mx-auto px-4 py-8">
    //   <h1 className="text-3xl font-bold text-gray-800 mb-6">
    //     Qualitative EDI Evaluation Form
    //   </h1>
    //   <form onSubmit={handleSubmit} className="space-y-8">
    //     {/* Section: Vision & Strategy */}
    //     <div>
    //       <h2 className="text-xl font-semibold text-gray-700 mb-4">
    //         Vision & Strategy
    //       </h2>
    //       <label htmlFor="strategyAccessible" className="block text-gray-600">
    //         Is there a clear strategy document that is publicly accessible?
    //       </label>
    //       <select
    //         id="strategyAccessible"
    //         name="strategyAccessible"
    //         required
    //         className="w-full p-2 border border-gray-300 rounded-md"
    //       >
    //         <option value="">Select</option>
    //         <option value="Yes">Yes</option>
    //         <option value="No">No</option>
    //       </select>
    //     </div>

    //     {/* Section: Goals & Targets */}
    //     <div>
    //       <h2 className="text-xl font-semibold text-gray-700 mb-4">
    //         Goals & Targets
    //       </h2>
    //       <label htmlFor="definedGoals" className="block text-gray-600">
    //         Are there defined goals/targets?
    //       </label>
    //       <select
    //         id="definedGoals"
    //         name="definedGoals"
    //         required
    //         className="w-full p-2 border border-gray-300 rounded-md"
    //       >
    //         <option value="">Select</option>
    //         <option value="Yes">Yes</option>
    //         <option value="No">No</option>
    //       </select>
    //     </div>

    //     {/* Section: Employee Engagement & Inclusion */}
    //     <div>
    //       <h2 className="text-xl font-semibold text-gray-700 mb-4">
    //         Employee Engagement & Inclusion
    //       </h2>
    //       <label htmlFor="employeeFeedback" className="block text-gray-600">
    //         Is there a regular employee feedback mechanism?
    //       </label>
    //       <select
    //         id="employeeFeedback"
    //         name="employeeFeedback"
    //         required
    //         className="w-full p-2 border border-gray-300 rounded-md"
    //       >
    //         <option value="">Select</option>
    //         <option value="Yes">Yes</option>
    //         <option value="No">No</option>
    //       </select>

    //       <label htmlFor="belongingIndex" className="block text-gray-600 mt-4">
    //         How well do employees from diverse backgrounds feel they belong in
    //         the organization (scale 1-5)?
    //       </label>
    //       <input
    //         type="number"
    //         id="belongingIndex"
    //         name="belongingIndex"
    //         min="1"
    //         max="5"
    //         required
    //         className="w-full p-2 border border-gray-300 rounded-md"
    //       />
    //     </div>

    //     {/* Submit Button */}
    //     <button
    //       type="submit"
    //       className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
    //     >
    //       Submit Evaluation
    //     </button>
    //   </form>

    //   {feedback && (
    //     <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
    //       <h3 className="font-semibold">Feedback:</h3>
    //       <p className="whitespace-pre-line">{feedback}</p>
    //     </div>
    //   )}
    // </div>
    <></>
  );
};

export default EvaluationForm;
