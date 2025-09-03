"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { 
  getElementData,
  getQueryVariable,
  setElementData
} from "@/app/services/useraccount.service";

const KeyTrends: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  
  const [regulatoryTrends, setregulatoryTrends] = useState<string>('');
  const [societalAndCulturalTrends, setsocietalAndCulturalTrends] = useState<string>('');
  const [socioEconomicTrends, setsocioEconomicTrends] = useState<string>('');
  const [technologyTrends, settechnologyTrend] = useState<string>('');

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
    if (typeof window !== 'undefined' && window.localStorage && getQueryVariable('frameworkId') != '0') { 
      const regulatoryTrends=getElementData('env_analysis_','regulatoryTrends');      
      const societalAndCulturalTrends=getElementData('env_analysis_','societalAndCulturalTrends'); 
      const socioEconomicTrends=getElementData('env_analysis_','socioEconomicTrends'); 
      const technologyTrends=getElementData('env_analysis_','technologyTrends');   
      
      setregulatoryTrends(regulatoryTrends); 
      setsocietalAndCulturalTrends(societalAndCulturalTrends); 
      setsocioEconomicTrends(socioEconomicTrends); 
      settechnologyTrend(technologyTrends); 
    } 
  };

  function handleregulatoryTrends(e: string)
  {
    setregulatoryTrends(e); 
    setElementData('env_analysis_','regulatoryTrends', e);     
  }
  function handlesetsocietalAndCulturalTrends(e: string)
  {
    setsocietalAndCulturalTrends(e); 
    setElementData('env_analysis_','societalAndCulturalTrends', e);   
  }
  function handlesetsocioEconomicTrends(e: string)
  {
    setsocioEconomicTrends(e); 
    setElementData('env_analysis_','socioEconomicTrends', e);   
  }
  function handlesettechnologyTrend(e: string)
  {
    settechnologyTrend(e); 
    setElementData('env_analysis_','technologyTrends', e);   
  }
 

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
          {expanded ? "Key Trends" : "Key Trends"}
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
            Regulatory Trends:
          </label>
          <textarea id="regulatoryTrends"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Changes in Law and Regulations"            
            rows={3}            
            value={regulatoryTrends}
            onChange={(e)=> handleregulatoryTrends(e.target.value)} 
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Societal and Cultural Trends:
          </label>
          <textarea id="societalAndCulturalTrends"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Changes in customer behavior and preferences"           
            rows={3}
            value={societalAndCulturalTrends}
            onChange={(e)=> handlesetsocietalAndCulturalTrends(e.target.value)} 
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-sm md:text-base">
            Technology Trends:
          </label>
          <textarea id="technologyTrends"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Innovations in technology that impact the industry"            
            rows={3}
            value={technologyTrends}
            onChange={(e)=> handlesettechnologyTrend(e.target.value)} 
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-base">
            Socio-Economic Trends:
          </label>
          <textarea id="socioEconomicTrends"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Changes in economic and social conditions"            
            rows={3}
            value={socioEconomicTrends}
            onChange={(e)=> handlesetsocioEconomicTrends(e.target.value)} 
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default KeyTrends;
