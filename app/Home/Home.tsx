"use client";
import React from "react";
import HomeHeader from "./components/HomeHeader";
import CardsModel from "./components/CardsModel";
import HelpingSection from "./components/HelpingSection";
import ContactusSection from "./components/ContactusSection";
import BusinessSteps from "./components/BusinessSteps";

const Home = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById("cardModel");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HomeHeader onScroll={scrollToSection} />
      <CardsModel />
      <BusinessSteps />
      <HelpingSection />
      <ContactusSection />
    </>
  );
};

export default Home;
