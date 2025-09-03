"use client";
import React, { useState, useRef, useEffect } from "react";
import { AiFillPrinter, AiFillSave, AiOutlinePlusSquare, AiFillDelete } from "react-icons/ai";
import { 
  checkUserLogin,
  getQueryVariable,
  GetAIResultForSOWT,
  showSpinner,
  hideSpinner,
  alertConnectionError,
  SWOTResponse,
  SaveSWOT,
  alertUserUnAuthentication,
  DeleteSWOT
} from "@/app/services/useraccount.service";

const TowsFormSection = () => {
  const resultBoxRef = useRef<HTMLDivElement>(null);
   const [selectedSegmentText, setSelectedSegmentText] = useState<string>(''); 
  const [strengths, setstrengths] = useState<string>('');
    const [weaknesses, setweaknesses] = useState<string>('');
    const [opportunities, setopportunities] = useState<string>('');
    const [threats, setthreats] = useState<string>('');
    function handlestrengths(e: string)
      {
        setstrengths(e);         
      }
      function handleweaknesses(e: string)
      {
        setweaknesses(e);      
      }
      function handleopportunities(e: string)
      {
        setopportunities(e);      
      }
      function handlethreats(e: string)
      {
        setthreats(e);       
      }

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
              <title>Bissuite.com | SWOT Matrix</title>
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
            <body>
              <div class="print-container">
              <table class="print-container">
              <tr><td class="card-title-center"><h2>SWOT Matrix</h2></td></tr>
              <tr><td><b>Strengths:</b></td></tr>
              <tr><td><p>${strengths}</p><br /></td></tr>
              <tr><td><b>Weaknesses:</b></td></tr>
              <tr><td><p>${weaknesses}</p><br /></td></tr>
              <tr><td><b>Opportunities:</b></td></tr>
              <tr><td><p>${opportunities}</p><br /></td></tr>
              <tr><td><b>Threats:</b></td></tr>
              <tr><td><p>${threats}</p><br /></td></tr>
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

const [isLoaded, setisLoaded] = useState<boolean>(false);
async function createNewCanvas(){  
      window.location.href='/towsgenerate';
    }

  async function DeleteSWOTItem()
  {
        let analysisId ='0';         
              if (typeof window !== 'undefined') {
                analysisId = getQueryVariable('analysisId');            
              }  
        if(confirm('Warning: Deleting this data will permanently remove it. This action cannot be undone. Are you sure you want to continue?'))
        {
          DeleteSWOT(analysisId).then(value => {
                  if(value)
                  {
                    window.location.href='/towsgenerate';
                  }
                  else
                  {
                    alertConnectionError();
                  }                           
              }).catch(err => {
                console.log(err);
                alertConnectionError();
              });
        } 
        else
        {
          return false;
        } 
  }
  const handleGenerateSwot = () => {
    if(!checkUserLogin())
                    {        
                      alertUserUnAuthentication();
                    }
                    else
                    {  
                        let analysisId ='0';               
                        if (typeof window !== 'undefined') {
                          analysisId = getQueryVariable('analysisId');            
                        }    
                        if(analysisId!='0')
                          {      
                            showSpinner();
                            
                            const dataSWOTResponse ={} as SWOTResponse;
                            dataSWOTResponse.strengths=[];
                            dataSWOTResponse.opportunities=[];                        
                            dataSWOTResponse.weaknesses=[];
                            dataSWOTResponse.threats=[];
    
                            const strengths= window.document.getElementById('strengths')?.innerHTML || '';
                            dataSWOTResponse.strengths.push(strengths);
    
                            const opportunities= window.document.getElementById('opportunities')?.innerHTML || '';
                            dataSWOTResponse.opportunities.push(opportunities);
    
                            const  threats= window.document.getElementById('threats')?.innerHTML || '';
                            dataSWOTResponse.threats.push(threats);
    
                            const weaknesses= window.document.getElementById('weaknesses')?.innerHTML || '';
                            dataSWOTResponse.weaknesses.push(weaknesses);
    
                            SaveSWOT(dataSWOTResponse, analysisId).then(value => {  
                                hideSpinner();                                  
                                if(value != 0)
                                { 
                                  window.location.href='/towsmatrix?swotId='+value                         
                                }                                                                                   
                            }).catch(err => {                       
                              console.log(err);
                              hideSpinner();      
                            });
                          }
                          else
                          {
                            hideSpinner();
                            window.location.href='/towsmatrix'
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
                  let analysisId ='0';               
                  if (typeof window !== 'undefined') {
                    analysisId = getQueryVariable('analysisId');            
                  }

                  let rg ='0';                                 
                  if (typeof window !== 'undefined') {
                       rg = getQueryVariable('rg');            
                  }

                  if(analysisId!='0')
                    {      
                      showSpinner();
                      setSelectedSegmentText(analysisId);
                      GetAIResultForSOWT(analysisId, rg).then(value => {
                        let noData=false;    
                          if(value != null)
                          {         
                               
                             let strengths= window.document.getElementById('strengths');
                             if(strengths!=undefined && value.strengths.length>0)
                             {
                              noData=true;
                              strengths.innerHTML = value.strengths.join('\n');
                              setstrengths(value.strengths.join('\n'));
                             }
                              strengths= window.document.getElementById('opportunities');
                             if(strengths!=undefined && value.opportunities.length>0)
                             {
                              noData=true;
                              strengths.innerHTML = value.opportunities.join('\n');
                              setopportunities(value.opportunities.join('\n'));
                             }
                              strengths= window.document.getElementById('threats');
                             if(strengths!=undefined && value.threats.length>0)
                             {
                              noData=true;
                              strengths.innerHTML = value.threats.join('\n');
                              setthreats(value.threats.join('\n'));
                             }
                              strengths= window.document.getElementById('weaknesses');
                             if(strengths!=undefined && value.weaknesses.length>0)
                             {
                              noData=true;
                              strengths.innerHTML = value.weaknesses.join('\n');
                              setweaknesses(value.weaknesses.join('\n'));
                             }                              
                          }
                          hideSpinner();  
                          if(!noData)
                          {
                            alert('No valid response from AI. Please click on refresh.');
                          }                        
                      }).catch(err => {                       
                        console.log(err);
                        hideSpinner();      
                        alertConnectionError();
                      });
                    }
                    else
                    {
                      hideSpinner();
                    }
                  }
              }
        });


  return (
    <>
      <div className="bg-bgthemeClr">
        <div className="px-1 md:px-20 lg:px:30 xl:px-52 py-20">
          <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
            {/* Form Section */}
            <section className="mobileHide flex justify-end px-8 pt-6"> 
              {selectedSegmentText !='' && (
                              <div onClick={createNewCanvas} className="flex text-base font-semibold gap-3 cursor-pointer">
                                  <h1> Add </h1>
                                  <AiOutlinePlusSquare className="text-2xl font-semibold" />
                              </div>
                               )}
                               {selectedSegmentText !='' && (
                              <div className="flex text-base font-semibold gap-3 cursor-pointer">
                                  <h1> | </h1>           
                              </div>
                               )}
                      <div onClick={handleGenerateSwot} className="flex text-base font-semibold gap-3 cursor-pointer">
                        <h1> Save & Generate TOWS Matrix</h1>
                        <AiFillSave className="text-2xl font-semibold" />
                      </div>        
                      {selectedSegmentText !='' && (
                               <div className="flex text-base font-semibold gap-3 cursor-pointer">
                                  <h1>  | </h1>           
                              </div>
                               )}
                               {selectedSegmentText !='' && (
                              <div onClick={DeleteSWOTItem}  className="flex text-base font-semibold gap-3 cursor-pointer">
                                  <h1> Delete </h1>
                                  <AiFillDelete className="text-2xl font-semibold" />
                              </div>
                               )}
                      <div className="flex text-base font-semibold gap-3 cursor-pointer">
                      <h1> | </h1>
                      </div>
              <div
                onClick={handlePrint}
                className="flex text-base font-semibold gap-3 cursor-pointer"
              >
                <h1> Print</h1>
                <AiFillPrinter className="text-2xl font-semibold" />
              </div>
            </section>
            <section className="mobileShow flex justify-end px-8 pt-6"> 
              {selectedSegmentText !='' && (
                              <div onClick={createNewCanvas} className="flex text-base font-semibold gap-3 cursor-pointer">
                                  <h1> Add </h1>
                                  <AiOutlinePlusSquare className="text-2xl font-semibold" />
                              </div>
                               )}
                               {selectedSegmentText !='' && (
                              <div className="flex text-base font-semibold gap-3 cursor-pointer">
                                  <h1> | </h1>           
                              </div>
                               )}
                      <div onClick={handleGenerateSwot} className="flex text-base font-semibold gap-3 cursor-pointer">
                        <h1> Save & Generate TOWS</h1>
                        <AiFillSave className="text-2xl font-semibold" />
                      </div> 
            </section>
            <section className="mobileShow flex justify-end px-8 pt-6">               
                               {selectedSegmentText !='' && (
                              <div onClick={DeleteSWOTItem}  className="flex text-base font-semibold gap-3 cursor-pointer">
                                  <h1> Delete </h1>
                                  <AiFillDelete className="text-2xl font-semibold" />
                              </div>
                               )}
                      <div className="flex text-base font-semibold gap-3 cursor-pointer">
                      <h1> | </h1>
                      </div>
              <div
                onClick={handlePrint}
                className="flex text-base font-semibold gap-3 cursor-pointer"
              >
                <h1> Print</h1>
                <AiFillPrinter className="text-2xl font-semibold" />
              </div>
            </section>
            <section className="p-6" ref={resultBoxRef}>              
              <div key='strengths' className="mb-4">
                    <label className="font-semibold text-sm md:text-base capitalize">
                    strengths:
                    </label>
                    <textarea
                      name='strengths'
                      id='strengths'
                      value={strengths}
                      onChange={(e)=> handlestrengths(e.target.value)} 
                      className="w-full mt-2 p-2 border rounded-md"                      
                      rows={3}
                    ></textarea>
                  </div>
                  <div key='weaknesses' className="mb-4">
                    <label className="font-semibold text-sm md:text-base capitalize">
                    weaknesses:
                    </label>
                    <textarea
                      name='weaknesses'
                      id='weaknesses'
                      value={weaknesses}
                      onChange={(e)=> handleweaknesses(e.target.value)} 
                      className="w-full mt-2 p-2 border rounded-md"                      
                      rows={3}
                    ></textarea>
                  </div>
                  <div key='opportunities' className="mb-4">
                    <label className="font-semibold text-sm md:text-base capitalize">
                    opportunities:
                    </label>
                    <textarea
                      name='opportunities'
                      id='opportunities'
                      value={opportunities}
                      onChange={(e)=> handleopportunities(e.target.value)} 
                      className="w-full mt-2 p-2 border rounded-md"                      
                      rows={3}
                    ></textarea>
                  </div>
                  <div key='threats' className="mb-4">
                    <label className="font-semibold text-sm md:text-base capitalize">
                    threats:
                    </label>
                    <textarea
                      name='threats'
                      id='threats'
                      value={threats}
                      onChange={(e)=> handlethreats(e.target.value)} 
                      className="w-full mt-2 p-2 border rounded-md"                      
                      rows={3}
                    ></textarea>
                  </div> 
            </section>
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={handleGenerateSwot}
              className="bg-textThemeClr hover:bg-btnHover text-white h-[54px] w-[266px] rounded-lg text-base font-medium"
            >
             Save & Generate TOWS Matrix
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TowsFormSection;
