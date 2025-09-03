"use client";
import React, { useState } from "react";
import FixedCostSection from "./FixedCostSection";
import ProductSection from "./ProductSection";
type CostItem = {
  id: number;
  label: string;
  placeholder: string;
  value: string;
};
const BreakevenFormSection = () => {
  const [totalFixedCosts, setTotalFixedCosts] = useState(0);

  const [sectionsData, setSectionsData] = useState<{
    rentLease: CostItem[];
    salariesWages: CostItem[];
    utilitiesServices: CostItem[];
    depreciation: CostItem[];
    insurance: CostItem[];
    interestExpense: CostItem[];
    propertyTaxes: CostItem[];
    amortization: CostItem[];
    licensespermits: CostItem[];
    marketingadvertising: CostItem[];
    maintenancecontracts: CostItem[];
    security: CostItem[];
    submemberships: CostItem[];
    othercosts: CostItem[];
  }>({
    rentLease: [
      {
        id: 1,
        label: "Office Space Rent",
        placeholder: "Enter Office space rent",
        value: "",
      },
      {
        id: 2,
        label: "Equipment Lease",
        placeholder: "Enter Equipment Lease",
        value: "",
      },
    ],
    salariesWages: [
      {
        id: 1,
        label: "Administrative Salaries",
        placeholder: "Enter Administrative Salaries",
        value: "",
      },
      {
        id: 2,
        label: "Permanent Employee Salaries",
        placeholder: "Enter Permanent Employee Salaries",
        value: "",
      },
    ],
    utilitiesServices: [
      {
        id: 1,
        label: "Utilities (Partially Fixed)",
        placeholder: "Enter Utilities Cost",
        value: "",
      },
      {
        id: 2,
        label: "Internet and Phone Services",
        placeholder: "Enter Internet and Phone Services",
        value: "",
      },
    ],
    depreciation: [
      {
        id: 1,
        label: "Depreciation on Assets",
        placeholder: "Enter depreciation cost",
        value: "",
      },
    ],
    insurance: [
      {
        id: 1,
        label: "Business Insurance",
        placeholder: "Enter business insurance",
        value: "",
      },
      {
        id: 2,
        label: "Health Insurance",
        placeholder: "Enter health insurance",
        value: "",
      },
    ],
    interestExpense: [
      {
        id: 1,
        label: "Loan Repayments",
        placeholder: "Enter loan repayment cost",
        value: "",
      },
    ],
    propertyTaxes: [
      {
        id: 1,
        label: "Real Estate Taxes",
        placeholder: "Enter real estate taxes",
        value: "",
      },
    ],
    amortization: [
      {
        id: 1,
        label: "Intangible Assets Amortization",
        placeholder: "Enter amortization Cost",
        value: "",
      },
    ],
    licensespermits: [
      {
        id: 1,
        label: "Business Licenses",
        placeholder: "Enter Business Licenses Cost",
        value: "",
      },
      {
        id: 2,
        label: "Software Licenses",
        placeholder: "Enter Software Licenses Cost",
        value: "",
      },
    ],
    marketingadvertising: [
      {
        id: 1,
        label: "Long-Term Contracts",
        placeholder: "Enter Long-Term Contracts Cost",
        value: "",
      },
    ],
    maintenancecontracts: [
      {
        id: 1,
        label: "Equipment Maintenance",
        placeholder: "Enter Business Licenses Cost",
        value: "",
      },
      {
        id: 2,
        label: "Building Maintenance",
        placeholder: "Enter Building Maintenance Cost",
        value: "",
      },
    ],
    security: [
      {
        id: 1,
        label: "Security Services",
        placeholder: "Enter Security Services Cost",
        value: "",
      },
    ],
    submemberships: [
      {
        id: 1,
        label: "Professional Memberships",
        placeholder: "Enter Professional Memberships Cost",
        value: "",
      },
      {
        id: 2,
        label: "Subscriptions",
        placeholder: "Enter Subscriptions Cost",
        value: "",
      },
    ],
    othercosts: [
      {
        id: 1,
        label: "Other Miscellaneous Costs",
        placeholder: "Enter Other Cost",
        value: "",
      },
    ],
  });

  // const handleSectionChange = (
  //   sectionKey: keyof typeof sectionsData,
  //   updatedCosts: CostItem[]
  // ) => {
  //   setSectionsData((prev) => ({
  //     ...prev,
  //     [sectionKey]: updatedCosts,
  //   }));
  // };

  const handleSectionChange = (
    sectionKey: keyof typeof sectionsData,
    updatedCosts: CostItem[]
  ) => {
    // Update the state with the new costs
    setSectionsData((prev) => {
      const updatedSectionsData = {
        ...prev,
        [sectionKey]: updatedCosts,
      };

      // Calculate the total fixed costs using the updated state
      const total = Object.values(updatedSectionsData).reduce(
        (acc, section) => {
          return (
            acc +
            section.reduce(
              (secAcc, cost) => secAcc + (Number(cost.value) || 0),
              0
            )
          );
        },
        0
      );

      // Set the total fixed costs after updating the state
      setTotalFixedCosts(total);

      return updatedSectionsData;
    });
  };

  return (
    <>
      <div className="bg-bgthemeClr">
        <div className="px-1 md:px-10 lg:px-20 xl:px-52 pt-20 pb-2">
          <div className="bg-white w-full sm:w-[95%]  md:w-[90%] lg:w-[85%] mx-auto rounded-lg my-3">
            <section>
              <FixedCostSection
                title="1. Rent and Lease Payments"
                costs={sectionsData.rentLease}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("rentLease", updatedCosts)
                }
              />

              {/* Salaries and Wages */}
              <FixedCostSection
                title="2. Salaries and Wages"
                costs={sectionsData.salariesWages}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("salariesWages", updatedCosts)
                }
              />

              {/* Utilities and Services */}
              <FixedCostSection
                title="3. Utilities and Services"
                costs={sectionsData.utilitiesServices}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("utilitiesServices", updatedCosts)
                }
              />
              <FixedCostSection
                title="4. Depreciation"
                costs={sectionsData.depreciation}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("depreciation", updatedCosts)
                }
              />

              {/* Insurance */}
              <FixedCostSection
                title="5. Insurance"
                costs={sectionsData.insurance}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("insurance", updatedCosts)
                }
              />

              {/* Interest Expense */}
              <FixedCostSection
                title="6. Interest Expense"
                costs={sectionsData.interestExpense}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("interestExpense", updatedCosts)
                }
              />

              {/* Property Taxes */}
              <FixedCostSection
                title="7. Property Taxes"
                costs={sectionsData.propertyTaxes}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("propertyTaxes", updatedCosts)
                }
              />

              {/* 8. Amortization */}
              <FixedCostSection
                title="8. Amortization"
                costs={sectionsData.amortization}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("amortization", updatedCosts)
                }
              />

              {/* 9. Licenses and Permits */}
              <FixedCostSection
                title="9. Licenses and Permits"
                costs={sectionsData.licensespermits}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("licensespermits", updatedCosts)
                }
              />

              {/* 10. Marketing and Advertising */}
              <FixedCostSection
                title="10. Marketing and Advertising"
                costs={sectionsData.marketingadvertising}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("marketingadvertising", updatedCosts)
                }
              />

              {/* 11. Maintenance Contracts*/}
              <FixedCostSection
                title="11. Maintenance Contracts"
                costs={sectionsData.maintenancecontracts}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("maintenancecontracts", updatedCosts)
                }
              />

              {/* 12. Security */}
              <FixedCostSection
                title="12. Security"
                costs={sectionsData.security}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("security", updatedCosts)
                }
              />

              {/* 13. Subscriptions and Memberships */}
              <FixedCostSection
                title="13. Subscriptions and Memberships"
                costs={sectionsData.submemberships}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("submemberships", updatedCosts)
                }
              />

              {/* 14. Other Costs */}
              <FixedCostSection
                title="14. Other Costs"
                costs={sectionsData.othercosts}
                onCostsChange={(updatedCosts) =>
                  handleSectionChange("othercosts", updatedCosts)
                }
              />
            </section>
          </div>
        </div>
        <div className="px-1 md:px-10 lg:px-20 xl:px-52 pb-10">
          <div className="bg-white w-full sm:w-[95%]  md:w-[90%] lg:w-[85%] mx-auto rounded-lg my-3">
            <section className="px-5 xl:px-20 py-2">
              <div className="mb-4 w-full sm:w-[95%] md:w-[90%] lg:w-[95%] mx-auto rounded-lg my-3">
                <label className="font-semibold text-base md:text-xl my-2 block text-center">
                  Total Fixed Costs ($):
                </label>
                <input
                  type="number"
                  placeholder="Calculated Total Fixed Cost"
                  disabled
                  value={totalFixedCosts}
                  className="w-full text-sm md:text-base flex-1 p-2 border rounded-md"
                />
              </div>
            </section>
          </div>
        </div>

        <div className="px-1 md:px-10 lg:px-20 xl:px-52 pb-10">
          <div className="bg-white w-full sm:w-[95%]  md:w-[90%] lg:w-[85%] mx-auto rounded-lg my-3">
            <ProductSection totalFixedCost={totalFixedCosts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BreakevenFormSection;
