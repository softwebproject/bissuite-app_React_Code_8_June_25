import React from "react";
import { FaPen } from "react-icons/fa";

interface Props {
  headerTitle?: string;
  isEditable?: boolean;
  onEdit?: () => void;
}

const HeaderBar = ({ headerTitle, isEditable, onEdit }: Props) => {
  return (
    <div className="flex justify-between bg-white border-b border-[#ECECEC] px-4 py-2">
      <h1 className="text-xl md:text-[22px] font-semibold py-2">
        {headerTitle}
      </h1>
      <button
        type="button"
        onClick={onEdit}
        className={`rounded-md border border-[#ECECEC] p-2 
          ${isEditable ? "bg-textThemeClr" : "bg-white"}`}
      >
        <FaPen
          className={`text-xl md:text-2xl ${
            isEditable ? "text-white" : "text-[#6F6F6F]"
          }`}
        />
      </button>
    </div>
  );
};

export default HeaderBar;
