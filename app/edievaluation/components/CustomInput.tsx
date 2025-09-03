import React, { forwardRef, useImperativeHandle, useState } from "react";

interface InputProps {
  label: string;
  type: string;
  value: string | number;
  min?: number;
  max?: number;
  onChange: (value: string | number) => void;
  required?: boolean;
}

const CustomInput = forwardRef(
  (
    { label, type, value, min, max, onChange, required = false }: InputProps,
    ref
  ) => {
    const [isError, setIsError] = useState(false);

    // Expose validate method via ref
    useImperativeHandle(ref, () => ({
      validate: () => {
        if (required && !value) {
          setIsError(true);
          return false;
        }

        // For number type inputs, validate min/max constraints
        if (type === "number") {
          const numericValue = Number(value);
          if (
            (min !== undefined && numericValue < min) ||
            (max !== undefined && numericValue > max)
          ) {
            setIsError(true);
            return false;
          }
        }

        setIsError(false);
        return true;
      },
    }));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue =
        type === "number" ? Number(e.target.value) : e.target.value;
      onChange(inputValue);
      setIsError(false); // Reset error on change
    };

    return (
      <div className="relative mb-4">
        <label className="font-medium text-sm md:text-base">
          {label}
          {required && <span className="text-red-500 ml-1 font-medium">*</span>}
        </label>
        <input
          type={type}
          value={value}
          min={min}
          max={max}
          onChange={handleChange}
          className={`w-full mt-2 p-2 border rounded-md ${
            isError ? "border-red-500" : "border-gray-300"
          }`}
        />
        {isError && (
          <p className="text-red-500 text-xs mt-1">
            {required && !value
              ? "This field is required."
              : `Value must be between ${min} and ${max}.`}
          </p>
        )}
      </div>
    );
  }
);
CustomInput.displayName = "CustomInput";
export default CustomInput;
