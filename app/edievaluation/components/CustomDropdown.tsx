"use State";
import React, { useState, forwardRef, useImperativeHandle } from "react";

interface DropdownProps {
  label: string;
  options: string[];
  selectedValue: string;
  onChange: (value: string) => void;
  required?: boolean;
}
interface CustomDropdownRef {
  validate: () => boolean;
}
// Use forwardRef to expose validation method
const CustomDropdown = forwardRef<CustomDropdownRef, DropdownProps>(
  (
    {
      label,
      options,
      selectedValue,
      onChange,
      required = false,
    }: DropdownProps,
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isError, setIsError] = useState(false);

    // Expose validate method via ref
    useImperativeHandle(ref, () => ({
      validate: () => {
        if (required && !selectedValue) {
          setIsError(true);
          return false;
        } else {
          setIsError(false);
          return true;
        }
      },
    }));

    const handleDropdownChange = (value: string) => {
      onChange(value);
      setIsOpen(false);
      if (required && !value) {
        setIsError(true);
      } else {
        setIsError(false);
      }
    };

    return (
      <div className="relative mb-4">
        <label className="font-medium text-sm md:text-base">
          {label}
          {required && <span className="text-red-500 ml-1 font-medium">*</span>}
        </label>

        <div
          className={`w-full mt-2 p-3 border rounded-md cursor-pointer bg-white ${
            isError ? "border-red-500" : "border-gray-300"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedValue || "Select an option"}
        </div>

        {isOpen && (
          <ul className="absolute w-full mt-1 border rounded-md bg-white shadow-lg z-10">
            {options.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-green-600 hover:text-white cursor-pointer"
                onClick={() => handleDropdownChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}

        {isError && (
          <p className="text-red-500 text-xs mt-1">This field is required.</p>
        )}
      </div>
    );
  }
);
CustomDropdown.displayName = "CustomDropdown";
export default CustomDropdown;
