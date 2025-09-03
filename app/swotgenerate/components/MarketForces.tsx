"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { 
  getElementData,
  getQueryVariable,
  setElementData
} from "@/app/services/useraccount.service";

const MarketForces: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
 const [marketIssues, setmarketIssues] = useState<string>('');
  const [marketSegments, setmarketSegments] = useState<string>('');
  const [needsAndDemands, setneedsAndDemands] = useState<string>('');
  const [revenueAttractiveness, setrevenueAttractiveness] = useState<string>('');
  const [switchingCosts, setswitchingCosts] = useState<string>('');
  function handlesetmarketIssues(e: string)
  {
    setmarketIssues(e);
    setElementData('env_analysis_','marketIssues', e); 
  }
  function handlesetmarketSegments(e: string)
  {
    setmarketSegments(e);
    setElementData('env_analysis_','marketSegments', e); 
  }
  function handlesetneedsAndDemands(e: string)
  {
    setneedsAndDemands(e); 
    setElementData('env_analysis_','needsAndDemands', e); 
  }
  function handlesetrevenueAttractiveness(e: string)
  {
    setrevenueAttractiveness(e); 
    setElementData('env_analysis_','revenueAttractiveness', e); 
  }
  function handlesetswitchingCosts(e: string)
  {
    setswitchingCosts(e); 
    setElementData('env_analysis_','switchingCosts', e); 
  }

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
    if (typeof window !== 'undefined' && window.localStorage && getQueryVariable('frameworkId')!='0') { 
      const marketIssues= getElementData('env_analysis_','marketIssues'); 
      const marketSegments= getElementData('env_analysis_','marketSegments'); 
      const needsAndDemands=  getElementData('env_analysis_','needsAndDemands'); 
      const revenueAttractiveness=  getElementData('env_analysis_','revenueAttractiveness');  
      const switchingCosts=  getElementData('env_analysis_','switchingCosts');   

      setmarketIssues(marketIssues); 
      setmarketSegments(marketSegments); 
      setneedsAndDemands(needsAndDemands); 
      setrevenueAttractiveness(revenueAttractiveness); 
      setswitchingCosts(switchingCosts);             
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
          {expanded ? "Market Forces" : "Market Forces"}
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
          expanded
            ? "max-h-[1200px] overflow-visible"
            : "max-h-0 overflow-hidden hidden"
        }`}
      >
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Market Segments:
          </label>
          <textarea id="marketSegments"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Different groups of customers with distinct needs"           
            rows={3}
            value={marketSegments}
            onChange={(e)=> handlesetmarketSegments(e.target.value)} 
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Needs and Demands:
          </label>
          <textarea id="needsAndDemands"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Specific requirements and desires of customers"           
            rows={3}
            value={needsAndDemands}
            onChange={(e)=> handlesetneedsAndDemands(e.target.value)} 
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-sm md:text-base">
            Market Issues:
          </label>
          <textarea id="marketIssues"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Challenges and opportunities in the industry"            
            rows={3}
            value={marketIssues}
            onChange={(e)=> handlesetmarketIssues(e.target.value)} 
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-base">Switching Costs:</label>
          <textarea id="switchingCosts"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Costs associated with switching products"           
            rows={3}
            value={switchingCosts}
            onChange={(e)=> handlesetswitchingCosts(e.target.value)} 
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-base">
            Revenue Attractiveness:
          </label>
          <textarea id="revenueAttractiveness"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Potential profit from the market"           
            rows={3}
            value={revenueAttractiveness}
            onChange={(e)=> handlesetrevenueAttractiveness(e.target.value)} 
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MarketForces;
