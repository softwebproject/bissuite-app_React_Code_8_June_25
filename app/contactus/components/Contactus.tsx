import React from "react";
import ContactUsPage from "./ContactusPage";
import PageHeader from "@/app/Components/PageHeader";

const Contactus = () => {
  return (
    <>
      <PageHeader title="Contact Us" />
      <div className="bg-bgthemeClr">
        <div className="py-8 px-3">
          <ContactUsPage />
        </div>
      </div>
    </>
  );
};

export default Contactus;
