"use client";
import React, { useState, useRef } from "react";
import CustomDropdown from "./CustomDropdown";
import EDIFeedback from "./EDIFeedback";
import CustomInput from "./CustomInput";
interface CustomDropdownRef {
  validate: () => boolean;
}
const EvalutionFormSection = () => {
  const [formData, setFormData] = useState({
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
  const [evaluationResult, setEvaluationResult] = useState({});
  const [showResult, setShowresult] = useState(false);

  const strategyDropdownRef = useRef<CustomDropdownRef>(null);
  const definedGoalsRef = useRef<CustomDropdownRef>(null);
  const reviewProcessRef = useRef<CustomDropdownRef>(null);
  const leadershipPoliciesRef = useRef<CustomDropdownRef>(null);
  const employeeFeedbackRef = useRef<CustomDropdownRef>(null);
  const retentionRatesRef = useRef<CustomDropdownRef>(null);
  const careerProgressionRef = useRef<CustomDropdownRef>(null);
  const ediAwardsRef = useRef<CustomDropdownRef>(null);
  const belongingIndexRef = useRef<CustomDropdownRef>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all dropdowns
    const isStrategyValid = strategyDropdownRef.current?.validate();
    const isdefinedGoalsRef = definedGoalsRef.current?.validate();
    const isreviewProcessRef = reviewProcessRef.current?.validate();
    const isleadershipPoliciesRef = leadershipPoliciesRef.current?.validate();
    const isemployeeFeedbackRef = employeeFeedbackRef.current?.validate();
    const isretentionRatesRef = retentionRatesRef.current?.validate();
    const iscareerProgressionRef = careerProgressionRef.current?.validate();
    const isediAwardsRef = ediAwardsRef.current?.validate();
    const isbelongingIndexRef = belongingIndexRef.current?.validate();

    if (
      isStrategyValid &&
      isdefinedGoalsRef &&
      isreviewProcessRef &&
      isleadershipPoliciesRef &&
      isemployeeFeedbackRef &&
      isretentionRatesRef &&
      iscareerProgressionRef &&
      isediAwardsRef &&
      isbelongingIndexRef
    ) {
      // alert("Hello");
      setShowresult(true);
      setEvaluationResult({ ...formData });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleDropdownChange = (field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="bg-bgthemeClr">
        <div className="px-1 md:px-10 lg:px-20 xl:px-52 pt-20 pb-0">
          <div className="bg-white w-full sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto rounded-lg my-3">
            <form onSubmit={handleSubmit}>
              <section className="p-4 max-w-4xl mx-auto">
                {/* Vision & Strategy */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Vision & Strategy
                </h1>

                <CustomDropdown
                  ref={strategyDropdownRef}
                  label="Is there a clear EDI strategy document?"
                  options={["Yes", "No"]}
                  selectedValue={formData.strategyAccessible}
                  onChange={(value) =>
                    handleDropdownChange("strategyAccessible", value)
                  }
                  required={true}
                />

                {/* Goals & Targets */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Goals & Targets
                </h1>
                <CustomDropdown
                  ref={definedGoalsRef}
                  label="Are there defined goals/targets?"
                  options={["Yes", "No"]}
                  selectedValue={formData.definedGoals}
                  onChange={(value) =>
                    handleDropdownChange("definedGoals", value)
                  }
                  required={true}
                />
                <CustomDropdown
                  ref={reviewProcessRef}
                  label="Is there evidence of review and reporting processes?"
                  options={["Yes", "No"]}
                  selectedValue={formData.reviewProcess}
                  onChange={(value) =>
                    handleDropdownChange("reviewProcess", value)
                  }
                  required={true}
                />

                {/* Leadership & Accountability */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Leadership & Accountability
                </h1>
                <div className="mb-4">
                  <label className="font-medium text-sm md:text-base">
                    Examples of senior leadership actions supporting diversity
                    and inclusion (please describe):
                  </label>
                  <textarea
                    className="w-full mt-2 p-2 border rounded-md"
                    maxLength={100}
                    rows={4}
                    value={formData.leadershipActions}
                    onChange={(e) =>
                      handleDropdownChange("leadershipActions", e.target.value)
                    }
                  ></textarea>
                </div>
                <CustomDropdown
                  ref={leadershipPoliciesRef}
                  label="Are there relevant leadership policies (e.g., Chief Diversity Officer)?"
                  options={["Yes", "No"]}
                  selectedValue={formData.leadershipPolicies}
                  onChange={(value) =>
                    handleDropdownChange("leadershipPolicies", value)
                  }
                  required={true}
                />

                {/* Learning & Celebrating */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Learning & Celebrating
                </h1>
                <div className="mb-4">
                  <label className="font-medium text-sm md:text-base">
                    Examples of ongoing training opportunities to celebrate
                    diversity (please describe):
                  </label>
                  <textarea
                    className="w-full mt-2 p-2 border rounded-md"
                    rows={4}
                    value={formData.trainingOpportunities}
                    onChange={(e) =>
                      handleDropdownChange(
                        "trainingOpportunities",
                        e.target.value
                      )
                    }
                  ></textarea>
                </div>

                {/* Making a Bigger Difference */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Making a Bigger Difference
                </h1>
                <div className="mb-4">
                  <label className="font-medium text-sm md:text-base">
                    Evidence of networks and organizations supported (please
                    describe):
                  </label>
                  <textarea
                    className="w-full mt-2 p-2 border rounded-md"
                    rows={4}
                    value={formData.externalSupport}
                    onChange={(e) =>
                      handleDropdownChange("externalSupport", e.target.value)
                    }
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label className="font-medium text-sm md:text-base">
                    Examples of collaboration activities:
                  </label>
                  <textarea
                    className="w-full mt-2 p-2 border rounded-md"
                    rows={4}
                    value={formData.collaboration}
                    onChange={(e) =>
                      handleDropdownChange("collaboration", e.target.value)
                    }
                  ></textarea>
                </div>

                {/* Assessment, Measurement & Research */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Assessment, Measurement & Research
                </h1>
                <div className="mb-4">
                  <label className="font-medium text-sm md:text-base">
                    Evidence of appropriate use of tools for EDI measurement
                    (please describe):
                  </label>
                  <textarea
                    className="w-full mt-2 p-2 border rounded-md"
                    rows={4}
                    value={formData.toolsUsed}
                    onChange={(e) =>
                      handleDropdownChange("toolsUsed", e.target.value)
                    }
                  ></textarea>
                </div>

                {/* Recruitment, Development & Advancement */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Recruitment, Development & Advancement
                </h1>
                <div className="mb-4">
                  <label className="font-medium text-sm md:text-base">
                    Examples of recruitment efforts and development
                    opportunities for diverse groups (please describe):
                  </label>
                  <textarea
                    className="w-full mt-2 p-2 border rounded-md"
                    rows={4}
                    value={formData.recruitmentEfforts}
                    onChange={(e) =>
                      handleDropdownChange("recruitmentEfforts", e.target.value)
                    }
                  ></textarea>
                </div>

                {/* Employment Conditions */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Employment Conditions
                </h1>
                <div className="mb-4">
                  <label className="font-medium text-sm md:text-base">
                    Examples of well-utilized flexible employment conditions
                    (e.g., part-time, job-sharing, paid leave) (please
                    describe):
                  </label>
                  <textarea
                    className="w-full mt-2 p-2 border rounded-md"
                    rows={4}
                    value={formData.employmentConditions}
                    onChange={(e) =>
                      handleDropdownChange(
                        "employmentConditions",
                        e.target.value
                      )
                    }
                  ></textarea>
                </div>

                {/* Infrastructure & Implementation */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Infrastructure & Implementation
                </h1>
                <div className="mb-4">
                  <label className="font-medium text-sm md:text-base">
                    Examples of infrastructure that supports diversity (e.g.,
                    toilets for LGBT, faith rooms, signs in different languages)
                    (please describe):
                  </label>
                  <textarea
                    className="w-full mt-2 p-2 border rounded-md"
                    rows={4}
                    value={formData.infrastructureExamples}
                    onChange={(e) =>
                      handleDropdownChange(
                        "infrastructureExamples",
                        e.target.value
                      )
                    }
                  ></textarea>
                </div>

                {/* Employee Engagement & Inclusion */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Employee Engagement & Inclusion
                </h1>
                <CustomDropdown
                  ref={employeeFeedbackRef}
                  label="Is there a regular employee feedback mechanism (e.g., surveys) regarding diversity and inclusion?"
                  options={["Yes", "No"]}
                  selectedValue={formData.employeeFeedback}
                  onChange={(value) =>
                    handleDropdownChange("employeeFeedback", value)
                  }
                  required={true}
                />
                <div className="mb-4">
                  <label className="font-medium text-sm md:text-base">
                    How well do employees from diverse backgrounds feel they
                    belong in the organization (scale 1-5)?
                    <span className="text-red-500 ml-1 font-medium">*</span>
                  </label>
                  <CustomInput
                    ref={belongingIndexRef}
                    label="Belonging Index (1 to 5)"
                    type="number"
                    value={formData.belongingIndex}
                    min={1}
                    max={5}
                    onChange={(value) =>
                      handleDropdownChange("belongingIndex", value)
                    }
                    required
                  />
                </div>

                {/* Retention & Career Progression */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  Retention & Career Progression
                </h1>
                <CustomDropdown
                  ref={retentionRatesRef}
                  label="Does the organization monitor retention rates for diverse groups?"
                  options={["Yes", "No"]}
                  selectedValue={formData.retentionRates}
                  onChange={(value) =>
                    handleDropdownChange("retentionRates", value)
                  }
                  required={true}
                />
                <CustomDropdown
                  ref={careerProgressionRef}
                  label="Are there equal opportunities for promotion and leadership roles for diverse employees?"
                  options={["Yes", "No"]}
                  selectedValue={formData.careerProgression}
                  onChange={(value) =>
                    handleDropdownChange("careerProgression", value)
                  }
                  required={true}
                />

                {/* External Recognition & Benchmarking */}
                <h1 className="text-sm md:text-xl font-bold mb-4">
                  External Recognition & Benchmarking
                </h1>
                <CustomDropdown
                  ref={ediAwardsRef}
                  label="Has the organization received any awards or recognition for EDI efforts?"
                  options={["Yes", "No"]}
                  selectedValue={formData.ediAwards}
                  onChange={(value) => handleDropdownChange("ediAwards", value)}
                  required={true}
                />
              </section>
              <div className="flex justify-center py-5">
                <button className="bg-textThemeClr hover:bg-btnHover text-white h-[54px] w-[240px] rounded-lg text-base font-medium">
                  Submit EDI Evaluation
                </button>
              </div>
            </form>
          </div>
        </div>
        {evaluationResult && (
          <EDIFeedback
            evaluationData={evaluationResult}
            showResult={showResult}
          />
        )}
      </div>
    </>
  );
};

export default EvalutionFormSection;
