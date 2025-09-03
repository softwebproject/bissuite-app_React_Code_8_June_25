"use client";
import React, { useState, useRef, useEffect } from "react";
import { AiFillPrinter, AiFillSave, AiOutlinePlusSquare, AiFillDelete } from "react-icons/ai";
import { 
  checkUserLogin,
  getQueryVariable,
  GetAIResultForTOWS,
  showSpinner,
  hideSpinner,
  alertConnectionError,
  SaveTOWS,
  TWOSResponse,
  alertUserUnAuthentication,
  DeleteTOWS
} from "@/app/services/useraccount.service";


const TowsmatrixFormSection = () => {
  const resultBoxRef = useRef<HTMLDivElement>(null);
  const [sO_Strategies, setsO_Strategies] = useState<string>('');
  const [sT_Strategies, setsT_Strategies] = useState<string>('');
  const [wO_Strategies, setwO_Strategies] = useState<string>('');
  const [wT_Strategies, setwT_Strategies] = useState<string>('');
  const [selectedSegmentText, setSelectedSegmentText] = useState<string>(''); 
  function handlesO_Strategies(e: string)
    {
      setsO_Strategies(e);         
    }
    function handlesT_Strategies(e: string)
    {
      setsT_Strategies(e);      
    }
    function handlewO_Strategies(e: string)
    {
      setwO_Strategies(e);      
    }
    function handlewT_Strategies(e: string)
    {
      setwT_Strategies(e);       
    }
   
  const handlePrint = () => {
    if (resultBoxRef.current) {
      //const printContents = resultBoxRef.current.innerHTML;
      const printWindow = window.open("", "_blank", "width=800,height=600");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
             <title>Bissuite.com | TOWS Matrix</title>
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
              <tr><td class="card-title-center"><h2>TWOS Matrix</h2></td></tr>
              <tr><td><b>SO Strategies:</b></td></tr>
              <tr><td><p>${sO_Strategies}</p><br /></td></tr>
              <tr><td><b>ST Strategies:</b></td></tr>
              <tr><td><p>${sT_Strategies}</p><br /></td></tr>
              <tr><td><b>WO Strategies:</b></td></tr>
              <tr><td><p>${wO_Strategies}</p><br /></td></tr>
              <tr><td><b>WT Strategies:</b></td></tr>
              <tr><td><p>${wT_Strategies}</p><br /></td></tr>
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
        window.location.href='/towsmatrix';
      }
  
    async function DeleteTOWSItem()
    {
          let swotId ='0';         
                if (typeof window !== 'undefined') {
                  swotId = getQueryVariable('swotId');            
                }  
          if(confirm('Warning: Deleting this data will permanently remove it. This action cannot be undone. Are you sure you want to continue?'))
          {
            DeleteTOWS(swotId).then(value => {
                    if(value)
                    {
                      window.location.href='/towsmatrix';
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
  const handleTwosSave = () => {

    if(!checkUserLogin())
                {        
                  alertUserUnAuthentication();
                }
                else
                {  
                    let swotId ='0';               
                    if (typeof window !== 'undefined') {
                      swotId = getQueryVariable('swotId');            
                    }    
                    if(swotId!='0')
                      {      
                        showSpinner();
                        const dataSWOTResponse ={} as TWOSResponse;
                        dataSWOTResponse.sO_Strategies=[];
                        dataSWOTResponse.sT_Strategies=[];                        
                        dataSWOTResponse.wO_Strategies=[];
                        dataSWOTResponse.wT_Strategies=[];

                        const strengths= window.document.getElementById('Strategies_0')?.innerHTML || '';
                        dataSWOTResponse.sO_Strategies.push(strengths);

                        const opportunities= window.document.getElementById('Strategies_2')?.innerHTML || '';
                        dataSWOTResponse.sT_Strategies.push(opportunities);

                        const  threats= window.document.getElementById('Strategies_1')?.innerHTML || '';
                        dataSWOTResponse.wO_Strategies.push(threats);

                        const weaknesses= window.document.getElementById('Strategies_3')?.innerHTML || '';
                        dataSWOTResponse.wT_Strategies.push(weaknesses);

                        SaveTOWS(dataSWOTResponse, swotId).then(value => {  
                          if(value!=null) 
                          {
                            
                          }
                          hideSpinner();         
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
                  let swotId ='0';               
                  if (typeof window !== 'undefined') {
                    swotId = getQueryVariable('swotId');            
                  }    
                  let rg ='0';               
                  if (typeof window !== 'undefined') {
                    rg = getQueryVariable('rg');            
                  } 
                  if(swotId!='0')
                    {      
                      showSpinner();
                      setSelectedSegmentText(swotId);
                      GetAIResultForTOWS(swotId, rg).then(value => {
                        let noData=false;    
                          if(value != null)
                          {         
                                             
                             let strengths= window.document.getElementById('Strategies_0');
                             if(strengths!=undefined && value.sO_Strategies.length>0)
                             {
                              noData=true;
                              strengths.innerHTML = value.sO_Strategies.join('\n');
                              setsO_Strategies(value.sO_Strategies.join('\n')); 
                             }
                              strengths= window.document.getElementById('Strategies_2');
                             if(strengths!=undefined && value.sT_Strategies.length>0)
                             {
                              noData=true;
                              strengths.innerHTML = value.sT_Strategies.join('\n');
                              setsT_Strategies(value.sT_Strategies.join('\n')); 
                             }
                              strengths= window.document.getElementById('Strategies_1');
                             if(strengths!=undefined && value.wO_Strategies.length>0)
                             {
                              noData=true;
                              strengths.innerHTML = value.wO_Strategies.join('\n');
                              setwO_Strategies(value.wO_Strategies.join('\n')); 
                             }
                              strengths= window.document.getElementById('Strategies_3');
                             if(strengths!=undefined && value.wT_Strategies.length>0)
                             {
                              noData=true;
                              strengths.innerHTML = value.wT_Strategies.join('\n');
                              setwT_Strategies(value.wT_Strategies.join('\n')); 
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
                                    <div onClick={handleTwosSave} className="flex text-base font-semibold gap-3 cursor-pointer">
                                      <h1> Save </h1>
                                      <AiFillSave className="text-2xl font-semibold" />
                                    </div>        
                                    {selectedSegmentText !='' && (
                                             <div className="flex text-base font-semibold gap-3 cursor-pointer">
                                                <h1>  | </h1>           
                                            </div>
                                             )}
                                             {selectedSegmentText !='' && (
                                            <div onClick={DeleteTOWSItem}  className="flex text-base font-semibold gap-3 cursor-pointer">
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
                                    <div onClick={handleTwosSave} className="flex text-base font-semibold gap-3 cursor-pointer">
                                      <h1> Save </h1>
                                      <AiFillSave className="text-2xl font-semibold" />
                                    </div> 
                                            
            </section>
            <section className="mobileShow flex justify-end px-8 pt-6">              
                                             {selectedSegmentText !='' && (
                                            <div onClick={DeleteTOWSItem}  className="flex text-base font-semibold gap-3 cursor-pointer">
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
            <div key='SO Strategies' className="mb-4">
                    <label className="font-semibold text-sm md:text-base capitalize">
                    SO Strategies:
                    </label>
                    <textarea
                      name='Strategies_0'
                      id='Strategies_0'
                      value={sO_Strategies}
                      onChange={(e)=> handlesO_Strategies(e.target.value)} 
                      className="w-full mt-2 p-2 border rounded-md"                      
                      rows={3}
                    ></textarea>
                  </div>
                  <div key='WO Strategies' className="mb-4">
                    <label className="font-semibold text-sm md:text-base capitalize">
                    WO Strategies:
                    </label>
                    <textarea
                      name='Strategies_1'
                      id='Strategies_1'
                      value={wO_Strategies}
                      onChange={(e)=> handlewO_Strategies(e.target.value)} 
                      className="w-full mt-2 p-2 border rounded-md"                      
                      rows={3}
                    ></textarea>
                  </div>
                  <div key='ST Strategies' className="mb-4">
                    <label className="font-semibold text-sm md:text-base capitalize">
                    ST Strategies:
                    </label>
                    <textarea
                      name='Strategies_2'
                      id='Strategies_2'
                      value={sT_Strategies}
                      onChange={(e)=> handlesT_Strategies(e.target.value)} 
                      className="w-full mt-2 p-2 border rounded-md"                      
                      rows={3}
                    ></textarea>
                  </div>
                  <div key='WT Strategies' className="mb-4">
                    <label className="font-semibold text-sm md:text-base capitalize">
                    WT Strategies:
                    </label>
                    <textarea
                      name='Strategies_3'
                      id='Strategies_3'
                      value={wT_Strategies}
                      onChange={(e)=> handlewT_Strategies(e.target.value)} 
                      className="w-full mt-2 p-2 border rounded-md"                      
                      rows={3}
                    ></textarea>
                  </div>            
            </section>
          </div>
          <div className="flex justify-center mt-10">
            <button
              onClick={handleTwosSave}
              className="bg-textThemeClr hover:bg-btnHover text-white h-[54px] w-[266px] rounded-lg text-base font-medium"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TowsmatrixFormSection;
