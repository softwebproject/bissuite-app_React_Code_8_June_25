"use client";
import { AiFillDelete } from "react-icons/ai";
import { CgAdd } from "react-icons/cg";

type CostItem = {
  id: number;
  label: string;
  placeholder: string;
  value: string;
};

type FixedCostSectionProps = {
  title: string;
  costs: CostItem[];
  onCostsChange: (updatedCosts: CostItem[]) => void;
};

const FixedCostSection: React.FC<FixedCostSectionProps> = ({
  title,
  costs,
  onCostsChange,
}) => {
  const addCost = () => {
    const newId = costs.length + 1;
    const newCost: CostItem = {
      id: newId,
      label: `Enter Fixed Cost Label`, // Default label
      placeholder: "Enter Fixed Cost",
      value: "",
    };
    onCostsChange([...costs, newCost]);
  };

  //   const updateCost = (id: number, key: "label" | "value", newValue: string) => {
  //     const updatedCosts = costs.map((cost) =>
  //       cost.id === id ? { ...cost, [key]: newValue } : cost
  //     );
  //     onCostsChange(updatedCosts);
  //   };
  const updateCost = (id: number, key: "label" | "value", newValue: string) => {
    const updatedCosts = costs.map((cost) =>
      cost.id === id
        ? {
            ...cost,
            [key]: key === "value" ? String(Number(newValue) || 0) : newValue,
          }
        : cost
    );
    onCostsChange(updatedCosts);
  };
  const removeCost = (id: number) => {
    onCostsChange(costs.filter((cost) => cost.id !== id));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between">
        <h1 className="text-sm md:text-lg font-bold mb-4">{title}</h1>
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
            {/* Editable Label Input */}
            <input
              type="text"
              value={cost.label}
              onChange={(e) => updateCost(cost.id, "label", e.target.value)}
              className="w-full sm:w-auto text-sm md:text-base flex-1 p-2 border rounded-md text-gray-700"
            />

            {/* Cost Input */}
            <input
              type="number"
              placeholder={cost.placeholder}
              value={cost.value}
              onChange={(e) => updateCost(cost.id, "value", e.target.value)}
              className="w-full sm:w-auto text-sm md:text-base flex-1 p-2 border rounded-md"
            />

            {/* Remove Button */}
            <button
              onClick={() => removeCost(cost.id)}
              className="w-[25%] sm:w-auto text-xs sm:text-sm md:text-base p-2 bg-red-500 text-white rounded-md flex items-center justify-center"
            >
            <AiFillDelete className="ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixedCostSection;
