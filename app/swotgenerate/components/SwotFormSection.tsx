"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  checkUserLogin,
  getQueryVariable,
  GetAIResultForSWOT,
  showSpinner,
  hideSpinner,
  saveEnvData,
  RootEnvironmentalAnalysis,
  EnvironmentalAnalysis,
  KeyTrends,
  IndustryForces,
  MarketForces,
  Macroeconomics,
  getElementData,
  alertUserUnAuthentication
} from "@/app/services/useraccount.service";

import KeyTrends1 from "./Keytrends";
import IndustryForces1 from "./IndustryForces";
import MarketForces1 from "./MarketForces";
import Macroeconomics1 from "./Macroeconomics";
// import BusinessModel from "./BusinessModel";

import { IoIosArrowForward } from "react-icons/io";
import { AiFillPrinter } from "react-icons/ai";

const SwotFormSection = () => {
   const resultBoxRef = useRef<HTMLDivElement>(null);
const [isLoaded, setisLoaded] = useState<boolean>(false);
const handlePrint = () => {
  console.log(resultBoxRef.current);
  if (resultBoxRef.current) {
    //const printContents = resultBoxRef.current.innerHTML;
    const printWindow = window.open("", "_blank", "width=800,height=600");
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Bissuite.com | Environmental Analysis</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: 'Inter', sans-serif;
              }
              .card-title-center {                    
                  text-align: center;                    
              }
              /* Print-specific styles */
              @media print {
                /* Container to display the cards in two columns */
                .print-container {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  width: 100%;
                }
                /* Ensure each card takes up approximately half the space */
                .print-card {
                  width: 48%;  /* Two cards per row */
                  margin-bottom: 20px;
                }
                /* Retain colors and styles from Tailwind */
                .print-card {
                  background-color: rgba(76, 175, 79, 0.2); /* Same background as your cards */
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Retaining shadow */
                  border-radius: 8px;
                }
                /* Adjust text and font sizes for better readability */
                .print-card .card-title {
                  font-size: 20px;
                  text-align: center;
                  color: #333; /* Change text color if needed */
                }
                .print-card .card-body {
                  padding: 10px;
                }
                .print-card .card-actions {
                  display: none; /* Hide the button on print */
                }
                .card-title-center {                    
                  text-align: center;                    
                }
              }
            </style>
          </head>
          <body><div class="print-container">
            <table class="print-container">
            <tr><td class="card-title-center"><h2>Environmental Analysis</h2></td></tr>
            <tr><td><b>Key Trends:</b></td></tr>
            <tr><td><b>Regulatory Trends:</b><br /><p>${getElementData('env_analysis_','regulatoryTrends')}</p><br /></td></tr>    
            <tr><td><b>Societal and Cultural Trends:</b><br /><p>${getElementData('env_analysis_','societalAndCulturalTrends')}</p><br /></td></tr>
            <tr><td><b>Technology  Trends:</b><br /><p>${getElementData('env_analysis_','technologyTrends')}</p><br /></td></tr>  
            <tr><td><b>Socio-Economic Trends:</b><br /><p>${getElementData('env_analysis_','socioEconomicTrends')}</p><br /></td></tr>
            <tr><td><b>Industry Forces:</b></td></tr>
            <tr><td><b>Competitors (Incumbents):</b><br /><p>${getElementData('env_analysis_','competitorsIncumbents')}</p><br /></td></tr>
            <tr><td><b>New Entrants (Insurgents):</b><br /><p>${getElementData('env_analysis_','newEntrantsInsurgents')}</p><br /></td></tr> 
            <tr><td><b>Stakeholders:</b><br /><p>${getElementData('env_analysis_','stakeholders')}</p><br /></td></tr>
            <tr><td><b>Substitute Products and Services:</b><br /><p>${getElementData('env_analysis_','substituteProductsAndServices')}</p><br /></td></tr>
            <tr><td><b>Suppliers and Value Chain:</b><br /><p>${getElementData('env_analysis_','suppliersAndValueChainActors')}</p><br /></td></tr> 

            <tr><td><b>Market Forces:</b></td></tr>
            <tr><td><b>Market Issues:</b><br /><p>${getElementData('env_analysis_','marketIssues')}</p><br /></td></tr> 
            <tr><td><b>Market Segments:</b><br /><p>${getElementData('env_analysis_','marketSegments')}</p><br /></td></tr> 
            <tr><td><b>Needs and Demands:</b><br /><p>${getElementData('env_analysis_','needsAndDemands')}</p><br /></td></tr>
            <tr><td><b>Revenue Attractiveness:</b><br /><p>${getElementData('env_analysis_','revenueAttractiveness')}</p><br /></td></tr> 
            <tr><td><b>Switching Costs:</b><br /><p>${getElementData('env_analysis_','switchingCosts')}</p><br /></td></tr>   

            <tr><td><b>Macroeconomics:</b></td></tr>
            <tr><td><b>Capital Markets, Commodities, and Resources:</b><br /><p>${getElementData('env_analysis_','capitalMarketsCommoditiesAndResources')}</p><br /></td></tr> 
            <tr><td><b>Global Market Conditions:</b><br /><p>${getElementData('env_analysis_','globalMarketConditions')}</p><br /></td></tr> 
            <tr><td><b>Economic Infrastructure Trends:</b><br /><p>${getElementData('env_analysis_','economicInfrastructureTrends')}</p><br /></td></tr>

            </table>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
        printWindow.close();
      };
    }
  }
};

  useEffect(() => {  
          
          if(!checkUserLogin())
            {        
              
            }
            else
            {
              if(!isLoaded)
              {
                setisLoaded(true); 
                let frameworkId ='0';               
                if (typeof window !== 'undefined') {
                  frameworkId = getQueryVariable('frameworkId');            
                }    
                if(frameworkId!='0')
                  {      
                    showSpinner();
                     let rg ='0';                                 
                                      if (typeof window !== 'undefined') {
                                           rg = getQueryVariable('rg');            
                                      }

                    GetAIResultForSWOT(frameworkId, rg).then(value => {
                      let noData=false;     
                        if(value != null)
                        { 
                            noData=true;
                            localStorage.setItem('env_analysis_regulatoryTrends', value.EnvironmentalAnalysis.keyTrends.regulatoryTrends); 
                            localStorage.setItem('env_analysis_societalAndCulturalTrends', value.EnvironmentalAnalysis.keyTrends.societalAndCulturalTrends);
                            localStorage.setItem('env_analysis_socioEconomicTrends', value.EnvironmentalAnalysis.keyTrends.socioEconomicTrends);
                            localStorage.setItem('env_analysis_technologyTrends', value.EnvironmentalAnalysis.keyTrends.technologyTrends);
                            localStorage.setItem('env_analysis_competitorsIncumbents', value.EnvironmentalAnalysis.industryForces.competitorsIncumbents);
                            localStorage.setItem('env_analysis_newEntrantsInsurgents', value.EnvironmentalAnalysis.industryForces.newEntrantsInsurgents);                           
                            localStorage.setItem('env_analysis_stakeholders', value.EnvironmentalAnalysis.industryForces.stakeholders);
                            localStorage.setItem('env_analysis_substituteProductsAndServices', value.EnvironmentalAnalysis.industryForces.substituteProductsAndServices);
                            localStorage.setItem('env_analysis_suppliersAndValueChainActors', value.EnvironmentalAnalysis.industryForces.suppliersAndValueChainActors);
                            localStorage.setItem('env_analysis_capitalMarketsCommoditiesAndResources', value.EnvironmentalAnalysis.macroeconomics.capitalMarketsCommoditiesAndResources);
                            localStorage.setItem('env_analysis_economicInfrastructureTrends', value.EnvironmentalAnalysis.macroeconomics.economicInfrastructureTrends);
                            localStorage.setItem('env_analysis_globalMarketConditions', value.EnvironmentalAnalysis.macroeconomics.globalMarketConditions);
                            localStorage.setItem('env_analysis_marketIssues', value.EnvironmentalAnalysis.marketForces.marketIssues);
                            localStorage.setItem('env_analysis_marketSegments', value.EnvironmentalAnalysis.marketForces.marketSegments);
                            localStorage.setItem('env_analysis_needsAndDemands', value.EnvironmentalAnalysis.marketForces.needsAndDemands);
                            localStorage.setItem('env_analysis_revenueAttractiveness', value.EnvironmentalAnalysis.marketForces.revenueAttractiveness);
                            localStorage.setItem('env_analysis_switchingCosts', value.EnvironmentalAnalysis.marketForces.switchingCosts);                            
                        }
                        hideSpinner();   
                        if(!noData)
                          {
                            alert('No valid response from AI. Please click on refresh.');
                          }                       
                    }).catch(err => {                       
                      console.log(err);
                      hideSpinner();      
                    });
                  }
                  else
                  {
                    hideSpinner();
                  }
                }
            }
      });

      const formAction = async () => {
        if(!checkUserLogin())
          {        
            alertUserUnAuthentication();
          }

        let frameworkId ='0';               
      if (typeof window !== 'undefined') {
        frameworkId = getQueryVariable('frameworkId');            
      }    
        if(frameworkId != '0')
        { 

          showSpinner();
          const envData ={} as RootEnvironmentalAnalysis;
          envData.EnvironmentalAnalysis ={} as EnvironmentalAnalysis;
          envData.EnvironmentalAnalysis.keyTrends ={} as KeyTrends;
          envData.EnvironmentalAnalysis.industryForces={} as IndustryForces;
          envData.EnvironmentalAnalysis.marketForces={} as MarketForces;
          envData.EnvironmentalAnalysis.macroeconomics ={} as Macroeconomics;

          const regulatoryTrends=getElementData('env_analysis_','regulatoryTrends');      
          const societalAndCulturalTrends=getElementData('env_analysis_','societalAndCulturalTrends'); 
          const socioEconomicTrends=getElementData('env_analysis_','socioEconomicTrends'); 
          const technologyTrends=getElementData('env_analysis_','technologyTrends');   

          const competitorsIncumbents= getElementData('env_analysis_','competitorsIncumbents'); 
          const newEntrantsInsurgents= getElementData('env_analysis_','newEntrantsInsurgents'); 
          const stakeholders= getElementData('env_analysis_','stakeholders'); 
          const substituteProductsAndServices= getElementData('env_analysis_','substituteProductsAndServices');  
          const suppliersAndValueChainActors= getElementData('env_analysis_','suppliersAndValueChainActors'); 

          const marketIssues= getElementData('env_analysis_','marketIssues'); 
          const marketSegments= getElementData('env_analysis_','marketSegments'); 
          const needsAndDemands=  getElementData('env_analysis_','needsAndDemands'); 
          const revenueAttractiveness=  getElementData('env_analysis_','revenueAttractiveness');  
          const switchingCosts=  getElementData('env_analysis_','switchingCosts');   

          const capitalMarketsCommoditiesAndResources=  getElementData('env_analysis_','capitalMarketsCommoditiesAndResources'); 
          const globalMarketConditions=   getElementData('env_analysis_','globalMarketConditions'); 
          const economicInfrastructureTrends=  getElementData('env_analysis_','economicInfrastructureTrends'); 

          envData.EnvironmentalAnalysis.keyTrends.regulatoryTrends =  regulatoryTrends || '';
          envData.EnvironmentalAnalysis.keyTrends.societalAndCulturalTrends = societalAndCulturalTrends || '';
          envData.EnvironmentalAnalysis.keyTrends.technologyTrends = technologyTrends || '';
          envData.EnvironmentalAnalysis.keyTrends.socioEconomicTrends =  socioEconomicTrends || '';

          envData.EnvironmentalAnalysis.industryForces.suppliersAndValueChainActors = suppliersAndValueChainActors || '';
          envData.EnvironmentalAnalysis.industryForces.stakeholders =  stakeholders || '';
          envData.EnvironmentalAnalysis.industryForces.competitorsIncumbents =  competitorsIncumbents || '';
          envData.EnvironmentalAnalysis.industryForces.newEntrantsInsurgents =  newEntrantsInsurgents || '';
          envData.EnvironmentalAnalysis.industryForces.substituteProductsAndServices =  substituteProductsAndServices || '';

          envData.EnvironmentalAnalysis.marketForces.marketSegments =  marketSegments || '';
          envData.EnvironmentalAnalysis.marketForces.needsAndDemands = needsAndDemands || '';
          envData.EnvironmentalAnalysis.marketForces.marketIssues = marketIssues || '';
          envData.EnvironmentalAnalysis.marketForces.switchingCosts = switchingCosts || '';
          envData.EnvironmentalAnalysis.marketForces.revenueAttractiveness =  revenueAttractiveness || '';

          envData.EnvironmentalAnalysis.macroeconomics.globalMarketConditions =  globalMarketConditions || '';
          envData.EnvironmentalAnalysis.macroeconomics.capitalMarketsCommoditiesAndResources =  capitalMarketsCommoditiesAndResources || '';
          envData.EnvironmentalAnalysis.macroeconomics.economicInfrastructureTrends = economicInfrastructureTrends || '';
          await saveEnvData(envData, frameworkId);         
        }
        else
        {
          alert('Please select a saved canvas first to load the data.');
        }
      }  

  return (
    <>
      <div className="relative bg-center bg-[url('/images/bg-image-enverment.png')]" ref={resultBoxRef}>         
        {/* Background image overlay with reduced opacity */}
        <div className="absolute inset-0 bg-bgthemeClr bg-opacity-60"></div>
      <form action={formAction}>
        <div className="px-1 md:px-20 lg:px-30 xl:px-52 py-20 relative z-10">        
          <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
            <KeyTrends1 />
          </div>
          <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
            <IndustryForces1 />
          </div>
          <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
            <MarketForces1 />
          </div>
          <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
            <Macroeconomics1 />
          </div>
          {/* <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
            <BusinessModel />
          </div> */}

          <div className="flex flex-col sm:flex-row justify-center items-center mx-auto sm:justify-around mt-10 gap-y-4 sm:gap-y-0">
            <button className="bg-textThemeClr hover:bg-btnHover text-white h-[54px] w-[240px] rounded-lg text-base font-medium">
              <div className="flex justify-evenly items-center">
                Generate SWOT
                <span>
                  <IoIosArrowForward className="text-white font-medium text-base" />
                </span>
              </div>
            </button>
            <button onClick={handlePrint} type="button" className="bg-textThemeClr hover:bg-btnHover text-white h-[54px] w-[240px] rounded-lg text-base font-medium">
              <div className="flex justify-evenly items-center">
               PRINT
                <span>
                  <AiFillPrinter className="text-white font-medium text-base" />
                </span>
              </div>
            </button>
          </div>        
        </div>
      </form>
      </div>
    </>
  );
};

export default SwotFormSection;
