"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { 
  getElementData,
  getQueryVariable,
  setElementData
} from "@/app/services/useraccount.service";

const Macroeconomics: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const [capitalMarketsCommoditiesAndResources, setcapitalMarketsCommoditiesAndResources] = useState<string>('');
  const [globalMarketConditions, setglobalMarketConditions] = useState<string>('');
  const [economicInfrastructureTrends, seteconomicInfrastructureTrends] = useState<string>('');

  function handlecapitalMarketsCommoditiesAndResources(e: string)
  {
    setcapitalMarketsCommoditiesAndResources(e);
    setElementData('env_analysis_','capitalMarketsCommoditiesAndResources', e);   
  }
  function handleglobalMarketConditions(e: string)
  {
    setglobalMarketConditions(e); 
    setElementData('env_analysis_','globalMarketConditions', e);  
  }
  function handleeconomicInfrastructureTrends(e: string)
  {
    seteconomicInfrastructureTrends(e); 
    setElementData('env_analysis_','economicInfrastructureTrends', e);  
  }
  
  const toggleExpand = () => {
    setExpanded((prev) => !prev);
    if (typeof window !== 'undefined' && window.localStorage && getQueryVariable('frameworkId')!='0') { 
      const capitalMarketsCommoditiesAndResources=  getElementData('env_analysis_','capitalMarketsCommoditiesAndResources'); 
      const globalMarketConditions=   getElementData('env_analysis_','globalMarketConditions'); 
      const economicInfrastructureTrends=  getElementData('env_analysis_','economicInfrastructureTrends');     
      
    setcapitalMarketsCommoditiesAndResources(capitalMarketsCommoditiesAndResources); 
    setglobalMarketConditions(globalMarketConditions); 
    seteconomicInfrastructureTrends(economicInfrastructureTrends); 
    }
  };

  return (
    <div className="bg-white p-2 sm:p-3 md:p-5 rounded-lg shadow-md">
      <div
        className={`flex items-center ${
          expanded ? "justify-center" : "justify-between"
        }`}
      >
        <h2
          className={`font-bold text-xl ${
            expanded ? "text-center w-full" : ""
          }`}
        >
          {expanded ? "Macroeconomics" : "Macroeconomics"}
        </h2>
        <button type="button" onClick={toggleExpand} className="text-xl ml-auto toggleClk">
          {expanded ? (
            <IoIosArrowDown className="text-textThemeClr" />
          ) : (
            <IoIosArrowForward className="text-themeblackClr" />
          )}
        </button>
      </div>

      <div
        className={`mt-4 transition-all duration-500 ${
          expanded ? "max-h-screen" : "max-h-0 overflow-hidden hidden"
        }`}
      >
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Global Market Conditions:
          </label>
          <textarea id="globalMarketConditions"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Political, economic, and social conditions in global markets"            
            rows={3}
            value={globalMarketConditions}
            onChange={(e)=> handleglobalMarketConditions(e.target.value)} 
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Capital Markets, Commodities, and Resources:
          </label>
          <textarea id="capitalMarketsCommoditiesAndResources"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Availability and cost of capital, natural resources, and commodities"            
            rows={3}
            value={capitalMarketsCommoditiesAndResources}
            onChange={(e)=> handlecapitalMarketsCommoditiesAndResources(e.target.value)} 
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-sm md:text-base">
            Economic Infrastructure Trends:
          </label>
          <textarea id="economicInfrastructureTrends"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Changes in transportation, communication, and other infrastructure systems"            
            rows={3}
            value={economicInfrastructureTrends}
            onChange={(e)=> handleeconomicInfrastructureTrends(e.target.value)} 
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Macroeconomics;
