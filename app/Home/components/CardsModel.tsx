import React from "react";
import CardModelHeading from "./CardModelHeading";
import CardModal from "./CardModal";
// import cardIcon1 from "../../../public/icons/cardIcon1.png";
//import cardImage1 from "@/public/images/busniessModel.png";
// import cardIcon2 from "../../../public/icons/cardIcon2.png";
// import cardIcon3 from "../../../public/icons/cardIcon3.png";
//import cardImage3 from "@/public/images/valueProposition.png";
//import imageHolder from "@/public/images/imageHolder.png";
// import cardIcon4 from "../../../public/icons/cardIcon4.png";
// import cardIcon5 from "../../../public/icons/cardIcon5.png";
// import cardIcon6 from "../../../public/icons/cardIcon6.png";
// import cardIcon7 from "../../../public/icons/cardIcon7.png";

import imageHome1 from "@/public/images/home-1.png";
import imageHome2 from "@/public/images/home-2.png";
import imageHome3 from "@/public/images/home-3.png";
import imageHome4 from "@/public/images/home-4.png";
import imageHome5 from "@/public/images/home-5.png";
import imageHome6 from "@/public/images/home-6.png";
import imageHome7 from "@/public/images/home-7.png";
import imageHome8 from "@/public/images/home-8.png";
import imageHome9 from "@/public/images/home-9.png";

const cardData = [
  {
    imageUrl: imageHome1,
    title: "Business Model Canvas",
    description:
      "The Business Model Canvas is a strategic management tool that helps you visualize all aspects of your business model on a single page. It includes elements like Key Partners, Key Activities, Customer Segments, and more, making it easier to understand and communicate your business strategy effectively.",
    buttonText: "Open Business Model Canvas",
    link: "/businessmodel",
  },
  {
    imageUrl: imageHome2,
    title: "Lean Canvas",
    description:
      "The Lean Canvas is an adaptation of the Business Model Canvas, tailored for startups. It focuses on problems, solutions, key metrics, and unique value propositions, making it ideal for testing and iterating new business ideas quickly.",
    buttonText: "Open Lean Canvas",
    link: "/leancanvas",
  },
  {
    imageUrl: imageHome3,
    title: "Value Proposition Canvas",
    description:
      "The Value Proposition Canvas helps you ensure that your product or service is positioned to meet the needs and wants of your target customers. By understanding customer jobs, pains, and gains, you can develop a product that truly resonates with them.",
    buttonText: "Open Value Proposition Canvas",
    link: "/valueproposition",
  },
  {
    imageUrl: imageHome4,
    title: "Environmental Analysis",
    description:
      "Environmental Analysis involves assessing the external factors that can affect your business, including political, economic, social, technological, legal, and environmental aspects. It helps businesses identify opportunities and threats in the external environment.",
    buttonText: "Open Environmental Analysis",
    link: "/swotgenerate",
  },
  {
    imageUrl: imageHome8,
    title: "SWOT Analysis",
    description:
      "SWOT Analysis evaluates internal strengths and weaknesses, along with external opportunities and threats, to guide strategic planning. It helps businesses leverage strengths, address weaknesses, seize opportunities, and mitigate threats, providing a comprehensive framework for informed decision-making and competitive advantage.",
    buttonText: "Open SWOT Matrix",
    link: "/towsgenerate",
  },
  {
    imageUrl: imageHome5,
    title: "TOWS Matrix",
    description:
      "The TOWS Matrix is an extension of the SWOT analysis and helps you develop strategies based on your strengths, weaknesses, opportunities, and threats. This matrix is useful for creating actionable plans to capitalize on opportunities while mitigating risks.",
    buttonText: "Open TOWS Matrix",
    link: "/towsmatrix",
  },
  {
    imageUrl: imageHome6,
    title: "Breakeven Analysis",
    description:
      "The Breakeven Analysis tool helps you determine the point at which your business will start making a profit. It takes into account your fixed costs, variable costs per unit, and price per unit, allowing you to make informed decisions about pricing and cost management.",
    buttonText: "Open Breakeven Analysis",
    link: "/breakevenpoint",
  },
  {
    imageUrl: imageHome7,
    title: "EDI Analysis",
    description:
      "The EDI Analysis tool provides data-driven insights for Equality, Diversity, and Inclusion (EDI) in the workplace. It combines diversity metrics, employee feedback, and qualitative evaluations to help organizations foster inclusiveness and improve overall business performance.",
    buttonText: "Open EDI Analysis",
    link: "/edianylsis",
  },
  {
    imageUrl: imageHome9,
    title: "Business Plan Generator",
    description:
      "Generate a professional, investor-ready business plan in minutes with our AI-powered Business Plan Generator. Whether you're pitching to investors, applying for an SBA-approved bank loan, or outlining a strategic growth plan, our AI crafts a tailored, comprehensive business plan. Featuring in-depth market analysis, financial projections, and more, it provides a fast, precise solution customized to your unique goals.",
    buttonText: "Coming soon",
    link: "#",
  }
];

const CardsModel = () => {
  return (
    <>
      <div id="cardModel">
        <CardModelHeading />
        <div className="mx-auto md:px-10 xl:px-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 rounded-3xl">
            {cardData.map((card, index) => (
              <div key={index} className="flex justify-center mb-8 sm:mb-0">
                <CardModal
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  buttonText={card.buttonText}
                  link={card.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default CardsModel;
