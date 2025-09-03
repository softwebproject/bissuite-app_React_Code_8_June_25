"use client";
import React, { useState, useEffect } from "react";
import { 
  checkUserLogin, 
  GetAllEnvAnalysis,
  getQueryVariable,
  CanvasList,
  alertUserUnAuthentication
} from "@/app/services/useraccount.service";

const TowsHeader = () => {

  const [segments, setSegments] = useState<CanvasList[]>([]); 
      //const [selectedSegment, setSelectedSegment] = useState<string>(''); 
      const [selectedSegmentText, setSelectedSegmentText] = useState<string>(''); 
      const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
      const [listVisibility, setListVisibility] = useState<boolean>(false);
      const [isLoaded, setisLoaded] = useState<boolean>(false);
      const [selectedSegmentId, setselectedSegmentId] = useState<string>(''); 

      useEffect(() => {  
          
          if(!checkUserLogin())
            {        
              setListVisibility(false);
            }
            else
            {
  
              setListVisibility(true);
              if(!isLoaded)
              {
                setisLoaded(true);  
                let analysisId ='0';
                let title='';
                if (typeof window !== 'undefined') {
                  analysisId = getQueryVariable('analysisId');            
                }          
                GetAllEnvAnalysis().then(value => {
                    if(value != null && value.length > 0)
                    {                
                      const list: CanvasList[] = [];
                      // const newSegment: CanvasList  = {
                      //   id:'0',
                      //   title:'Select Saved Environmental Analysis'
                      // };
                      // list.push(newSegment);
      
                      for(let i=0;i<value.length;i++)
                      {
                        const newSegment: CanvasList  = {
                          id:value[i].frameworkId,
                          title:value[i].title
                        };
                        list.push(newSegment);
                        if(analysisId !='0' && analysisId==value[i].frameworkId)
                        {
                          title=value[i].title;
                        }
                      }
                      setSegments(list);   
                    }
                               
                    if(analysisId !='0')
                    {
                      setSelectedSegmentText(title);
                      setselectedSegmentId(analysisId);
                    }              
                }).catch(err => {
                  console.log(err);
                });
              }
          }
      });
  
      async function setSelectedSegment(id:string, title:string){ 
        setselectedSegmentId(id);
        setSelectedSegmentText(title);
        setDropdownOpen(false);
      };

async function loadSelectedSegment(option: number){ 
  if(!checkUserLogin())
    {  
      alertUserUnAuthentication();      
      return false;
    }
      if(selectedSegmentId !='' && selectedSegmentId !='0')
      {
        if(option==1 && !confirm('Re-generation will overwrite your saved data if any. Are you sure you want to re-generate?'))
        {
         return false;
        }
       window.location.href='/towsgenerate?analysisId='+selectedSegmentId+'&rg='+option;
      }      
      else{

      }
    };

  return (
    <>
      <div className="bg-[rgba(200,230,201,0.53)]">
        <div className="px-5 md:px-10 lg:px:20 xl:px-40 py-10">
          <h1 className="text-xl sm:texl-3xl md:text-4xl lg:text-5xl font-bold text-center ">
          SWOT Matrix
          </h1>
        </div>
      </div>
      <div className="bg-white w-full sm:w-[90%]  md:w-[80%] mx-auto rounded-lg my-3">
            Generate a SWOT with our trained model.
            <br />
            <span className="text-red-500">Note:</span> Environmental analysis must be completed
            as a prerequisite.
      </div>
      {listVisibility && (
      
      <div className="mobileSmallFont bg-white w-full sm:w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
            {/* Dropdown button */}
            <button
              className={`w-full flex justify-between items-center border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white shadow-sm ${
                segments.length > 0
                  ? "hover:bg-gray-100 cursor-pointer"
                  : "cursor-not-allowed"
              } transition-all`}
              onClick={() => {
                if (segments.length > 0) setDropdownOpen(!dropdownOpen);
              }}
              disabled={segments.length === 0}
            >
              {selectedSegmentText || "Select Saved Environmental Analysis"}
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && segments.length > 0 && (
              <ul className="absolute z-50 bg-white border border-gray-300 rounded-md shadow-lg py-1">
                {segments.map((segment) => (
                  <li
                    key={segment.id}
                    onClick={() => {
                      setSelectedSegment(segment.id, segment.title)
                    }}
                    className="px-4 py-2 text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer transition-all"
                  >
                    {segment.title}
                  </li>
                ))}
              </ul>
            )}
        </div>  
      )}
      {listVisibility && (
      <div className="bg-white w-full sm:w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
      <button onClick={() => {
                      loadSelectedSegment(1)
                    }}
                  type="submit"
                  className="mobileButtonStyle w-half p-3 bg-textThemeClr text-white font-bold rounded-md hover:bg-green-600 transition"
                >
                  Re-Generate
                </button>
      <button onClick={() => {
                      loadSelectedSegment(0)
                    }}
                  type="submit"
                  className="mobileButtonStyle w-half p-3 bg-textThemeClr text-white font-bold rounded-md hover:bg-green-600 transition"
                >
                  Load Selected
                </button>
      </div>  
      )}   
    </>
  );
};

export default TowsHeader;
