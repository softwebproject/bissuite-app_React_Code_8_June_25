"use client";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { CgAdd } from "react-icons/cg";

const RentLeasePayment = () => {
  const [costs, setCosts] = useState([
    {
      id: 1,
      label: "Office Space Rent",
      placeholder: "Enter Office space rent",
    },
    { id: 2, label: "Equipment Lease", placeholder: "Enter Equipment Lease" },
  ]);

  const addCost = () => {
    const newId = costs.length + 1;
    setCosts([
      ...costs,
      {
        id: newId,
        label: `Enter Fixed Cost Label`,
        placeholder: "Enter Fixed Cost",
      },
    ]);
  };

  const removeCost = (id: number) => {
    setCosts(costs.filter((cost) => cost.id !== id));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="text-sm md:text-lg font-bold mb-4">
          1. Rent and Lease Payments
        </h1>
        <button
          onClick={addCost}
          className="flex items-center space-x-2 text-textThemeClr"
        >
          <span className="font-bold hidden sm:block">Add New Fixed Cost</span>
          <CgAdd className="text-xl" />
        </button>
      </div>

      {/* Dynamic Cost List */}
      <div className="space-y-4">
        {costs.map((cost) => (
          <div
            key={cost.id}
            className="flex flex-wrap sm:flex-nowrap items-center gap-2"
          >
            {/* Label Input */}
            <input
              type="text"
              value={cost.label}
              readOnly
              className="w-full sm:w-auto text-sm md:text-base flex-1 p-2 border rounded-md text-gray-700"
            />

            {/* Cost Input */}
            <input
              type="text"
              placeholder={cost.placeholder}
              className="w-full sm:w-auto text-sm md:text-base flex-1 p-2 border rounded-md"
            />

            {/* Remove Button */}
            <button
              onClick={() => removeCost(cost.id)}
              className="w-[25%] sm:w-auto text-xs sm:text-sm md:text-base p-2 bg-red-500 text-white rounded-md flex items-center justify-center"
            >
              Remove <FiX className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentLeasePayment;
