"use client";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { 
  getElementData,
  getQueryVariable,
  setElementData
} from "@/app/services/useraccount.service";

const IndustryForces: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [competitorsIncumbents, setcompetitorsIncumbents] = useState<string>('');
  const [newEntrantsInsurgents, setnewEntrantsInsurgents] = useState<string>('');
  const [stakeholders, setstakeholders] = useState<string>('');
  const [substituteProductsAndServices, setsubstituteProductsAndServices] = useState<string>('');
  const [suppliersAndValueChainActors, setsuppliersAndValueChainActors] = useState<string>('');
  function handlesetcompetitorsIncumbents(e: string)
  {
    setcompetitorsIncumbents(e); 
    setElementData('env_analysis_','competitorsIncumbents', e);   
  }
  function handlesetnewEntrantsInsurgents(e: string)
  {
    setnewEntrantsInsurgents(e); 
    setElementData('env_analysis_','newEntrantsInsurgents', e);   
  }
  function handlesetstakeholders(e: string)
  {
    setstakeholders(e); 
    setElementData('env_analysis_','stakeholders', e);   
  }
  function handlesetsubstituteProductsAndServices(e: string)
  {
    setsubstituteProductsAndServices(e); 
    setElementData('env_analysis_','substituteProductsAndServices', e);   
  }
  function handlesetsuppliersAndValueChainActors(e: string)
  {
    setsuppliersAndValueChainActors(e); 
    setElementData('env_analysis_','suppliersAndValueChainActors', e);   
  }

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
    if (typeof window !== 'undefined' && window.localStorage && getQueryVariable('frameworkId')!='0') { 
     const competitorsIncumbents= getElementData('env_analysis_','competitorsIncumbents'); 
     const newEntrantsInsurgents= getElementData('env_analysis_','newEntrantsInsurgents'); 
     const stakeholders= getElementData('env_analysis_','stakeholders'); 
     const substituteProductsAndServices= getElementData('env_analysis_','substituteProductsAndServices');  
     const suppliersAndValueChainActors= getElementData('env_analysis_','suppliersAndValueChainActors');  
      
      setcompetitorsIncumbents(competitorsIncumbents); 
      setnewEntrantsInsurgents(newEntrantsInsurgents); 
      setstakeholders(stakeholders); 
      setsubstituteProductsAndServices(substituteProductsAndServices); 
      setsuppliersAndValueChainActors(suppliersAndValueChainActors); 
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
          {expanded ? "Industry Forces" : "Industry Forces"}
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
            ? "max-h-[1000px] overflow-visible"
            : "max-h-0 overflow-hidden hidden"
        }`}
      >
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Suppliers and Value Chain Actors:
          </label>
          <textarea id="suppliersAndValueChainActors"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Dependence on suppliers and distribution channels"           
            rows={3}
            value={suppliersAndValueChainActors}
            onChange={(e)=> handlesetsuppliersAndValueChainActors(e.target.value)} 
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="font-semibold text-sm md:text-base">
            Stakeholders:
          </label>
          <textarea id="stakeholders"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Investors, employees, customers, and other groups"            
            rows={3}
            value={stakeholders}
            onChange={(e)=> handlesetstakeholders(e.target.value)} 
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-sm md:text-base">
            Competitors (Incumbents):
          </label>
          <textarea id="competitorsIncumbents"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Other companies in the same industry"           
            rows={3}
            value={competitorsIncumbents}
            onChange={(e)=> handlesetcompetitorsIncumbents(e.target.value)} 
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-base">
            New Entrants (Insurgents):
          </label>
          <textarea id="newEntrantsInsurgents"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Emerging companies that disrupt the industry"            
            rows={3}
            value={newEntrantsInsurgents}
            onChange={(e)=> handlesetnewEntrantsInsurgents(e.target.value)} 
          ></textarea>
        </div>
        <div>
          <label className="font-semibold text-base">
            Substitute Products and Services:
          </label>
          <textarea id="substituteProductsAndServices"
            className="w-full mt-2 p-2 border rounded-md"
            placeholder="Alternatives that compete with the company's offerings"           
            rows={3}
            value={substituteProductsAndServices}
            onChange={(e)=> handlesetsubstituteProductsAndServices(e.target.value)} 
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default IndustryForces;
