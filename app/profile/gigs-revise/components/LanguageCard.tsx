import React from "react";

const LanguageCard = () => {
  return (
    <>
      <section className="flex flex-col bg-white shadow-md rounded-lg p-6 my-4">
        <h1 className="font-semibold text-sm md:text-base text-black">
          Languages
        </h1>
        <h1>
          <span className="text-base md:text-lg font-medium">English: </span>
          <span className="text-sm font-normal">Conversational</span>
        </h1>
        <h1>
          <span className="text-base md:text-lg font-medium">German: </span>
          <span className="text-sm font-normal">Native</span>
        </h1>
      </section>
    </>
  );
};

export default LanguageCard;
