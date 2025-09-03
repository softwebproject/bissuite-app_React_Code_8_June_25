"use client";
import React, { useState, useEffect, useRef } from "react";

import Card from "./Card";
import icon1 from "../../../public/bm-icons/Icon1.png";
import icon2 from "../../../public/bm-icons/Icon01.png";
import icon3 from "../../../public/bm-icons/Icon2.png";
import icon4 from "../../../public/bm-icons/Icon3.png";
import icon5 from "../../../public/bm-icons/Icon4.png";
import icon6 from "../../../public/bm-icons/Icon5.png";
import icon7 from "../../../public/bm-icons/Icon6.png";
import icon8 from "../../../public/bm-icons/Icon7.png";
import icon9 from "../../../public/bm-icons/Icon8.png";
import { AiFillPrinter, AiFillSave, AiOutlinePlusSquare, AiFillDelete  } from "react-icons/ai";
import { 
  BMC, 
  saveBMCCanvas, 
  GetData, 
  checkUserLogin, 
  alertUserUnAuthentication, 
  GetAllBMC, 
  getQueryVariable,
  CanvasList,
  DeleteCanvas,
  alertConnectionError
} from "@/app/services/useraccount.service";

const CardsSection = () => {
  const resultBoxRef = useRef<HTMLDivElement>(null);
  const handlePrint = () => {
    console.log(resultBoxRef.current);
    if (resultBoxRef.current) {
      const printContents = resultBoxRef.current.innerHTML;
      const printWindow = window.open("", "_blank", "width=800,height=600");
      if (printWindow) {
        printWindow.document.open();
        printWindow.document.write(`
          <html>
            <head>
              <title>Bissuite.com | Business Model Canvas</title>
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
              ${printContents}
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

  const cardsData = [
    {
      id:1,
      title: "Key Partners",
      img: icon1,
      dummyText:
        "Who are our key partners? Who are our key suppliers? Which key resources are we acquiring from partners?",
      itemList: []
      },
    {
      id:2,
      title: "Key Activities",
      img: icon2,
      dummyText:
        "What key activities do our value propositions require? Our distribution channels? Customer relationships? Revenue streams?",
      itemList: []
    },
    {
      id:3,
      title: "Key Resources",
      img: icon3,
      dummyText:
        "What key resources do our value propositions require? Our distribution channels? Customer relationships? Revenue streams?",
      itemList: []
     },
    {
      id:4,
      title: "Value Propositions",
      img: icon4,
      dummyText:
        "What value do we deliver to the customer? Which one of our customer's problems are we helping to solve? What bundles of products and services are we offering to each segment? Which customer needs are we satisfying?",
      itemList: []
    },
    {
      id:5,
      title: "Customer Relationships",
      img: icon5,
      dummyText:
        "What type of relationship does each of our customer segments expect us to establish and maintain with them? Which relationships have we established? How are they integrated with the rest of our business model? How costly are they?",
      itemList: []
    },
    {
      id:6,
      title: "Channels",
      img: icon6,
      dummyText:
        "Through which channels do our customer segments want to be reached? How are we reaching them now? How are our channels integrated? Which ones are the most cost-efficient? How are we integrating them with customer routines?",
      itemList: []
    },
    {
      id:7,
      title: "Customer Segment",
      img: icon7,
      dummyText:
        "For whom are we creating value? Who are our most important customers?",
      itemList: []
    },
    {
      id:8,
      title: "Cost Structure",
      img: icon8,
      dummyText:
        "What are the most important costs inherent in our business model? Which key resources are most expensive? Which key activities are most expensive?",
      itemList: []
    },
    {
      id:9,
      title: "Revenue Streams",
      img: icon9,
      dummyText:
        "For what value are our customers really willing to pay? For what do they currently pay? How are they currently paying? How would they prefer to pay? How much does each revenue stream contribute to overall revenue?",
      itemList: []
    },
  ];

  const [segments, setSegments] = useState<CanvasList[]>([]); 
  const [selectedSegment, setSelectedSegment] = useState<string>(''); 
  const [selectedSegmentText, setSelectedSegmentText] = useState<string>(''); 
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [listVisibility, setListVisibility] = useState<boolean>(false);
  const [isLoaded, setisLoaded] = useState<boolean>(false);
  
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
          let frameworkId ='0';
          let title='';
          if (typeof window !== 'undefined') {
            frameworkId = getQueryVariable('frameworkId');            
          }       
          
          GetAllBMC().then(value => {
              if(value != null && value.length > 0)
              {                
                const list: CanvasList[] = [];
                // const newSegment: CanvasList  = {
                //   id:'0',
                //   title:'Select Saved Canvas'
                // };
                //list.push(newSegment);

                for(let i=0;i<value.length;i++)
                {
                  const newSegment: CanvasList  = {
                    id:value[i].frameworkId,
                    title:value[i].title
                  };
                  list.push(newSegment);
                  if(frameworkId !='0' && frameworkId==value[i].frameworkId)
                  {
                    title=value[i].title;
                  }
                }
                setSegments(list);   
              }
              setisLoaded(true);             
                if(frameworkId !='0')
                {
                  //console.log(1777);
                  //console.log(frameworkId);
                  setSelectedSegment(frameworkId);
                  setSelectedSegmentText(title);
                }              
          }).catch(err => {
            console.log(err);
          });
      }
  }
  });

  async function createNewCanvas(){  
    window.location.href='/businessmodel';
  }
  
 async function deleteCanvas()
  {
    let frameworkId ='0';         
          if (typeof window !== 'undefined') {
            frameworkId = getQueryVariable('frameworkId');            
          }  
    if(confirm('Warning: Deleting this data will permanently remove it. This action cannot be undone. Are you sure you want to continue?'))
    {
          DeleteCanvas(frameworkId).then(value => {
              if(value)
              {
                window.location.href='/businessmodel';
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

  async function saveBusniessmodel(){   

    if(!checkUserLogin())
    {
      alertUserUnAuthentication();
      return false;
    }

   const bmcData ={} as BMC;   

   const selectedSeg=selectedSegment !='' ? selectedSegment : '0';
   if(selectedSeg != '0')
   {
    bmcData.frameworkId= selectedSeg;    
   }   
   
   bmcData.title='';
   bmcData.keyPartners=GetData('card-1');
   bmcData.keyActivities=GetData('card-2');
   bmcData.keyResources=GetData('card-3');
   bmcData.keyPropositions=GetData('card-4');
   bmcData.keyRelationships=GetData('card-5');
   bmcData.keyChannels=GetData('card-6');
   bmcData.keySegment=GetData('card-7');
   bmcData.keyStructure=GetData('card-8');
   bmcData.keyStreams=GetData('card-9');
   saveBMCCanvas(bmcData);
  };

  async function loadSelectedSegment(id:string){ 
    if(id!='0')
    {
     window.location.href='/businessmodel?frameworkId='+id;
    }
    else{
      window.location.href='/businessmodel';
    }
  };

  return (
    <>      
      <section className="mobileHide w-[90%] sm:w-[90%] md:w-[95%] lg:w-[95%] xl:w-[85%] 2xl:w-[75%] mx-auto pb-5 flex justify-end px-2 lg:px-8 pt-6">
       {selectedSegmentText !='' && (
                       <div  onClick={createNewCanvas} className="flex text-base font-semibold gap-3 cursor-pointer">
                           <h1> Add </h1>
                           <AiOutlinePlusSquare className="text-2xl font-semibold" />
                       </div>
                        )}
                        {selectedSegmentText !='' && (
                       <div className="flex text-base font-semibold gap-3 cursor-pointer">
                           <h1> | </h1>           
                       </div>
                        )}
        <div onClick={saveBusniessmodel} className="flex text-base font-semibold gap-3 cursor-pointer">
            <h1> Save and Generate Analysis </h1>
            <AiFillSave  className="text-2xl font-semibold" />
        </div>
        {selectedSegmentText !='' && (
        <div className="flex text-base font-semibold gap-3 cursor-pointer">
            <h1> | </h1>           
        </div>
         )}
         {selectedSegmentText !='' && (
        <div onClick={deleteCanvas} className="flex text-base font-semibold gap-3 cursor-pointer">
            <h1> Delete </h1>
            <AiFillDelete  className="text-2xl font-semibold" />
        </div>
         )}
        <div className="flex text-base font-semibold gap-3 cursor-pointer">
            <h1> | </h1>           
        </div>
        <div onClick={handlePrint} className="flex text-base font-semibold gap-3 cursor-pointer">
          <h1>Print</h1>
          <AiFillPrinter className="text-2xl font-semibold" />
        </div>       
      </section>
      <section className="mobileShow w-[90%] sm:w-[90%] md:w-[95%] lg:w-[95%] xl:w-[85%] 2xl:w-[75%] mx-auto pb-5 flex justify-end px-2 lg:px-8">
       {selectedSegmentText !='' && (
                       <div  onClick={createNewCanvas} className="mobileSmallFont flex text-base font-semibold gap-3 cursor-pointer">
                           <h1> Add </h1>
                           <AiOutlinePlusSquare className="text-2xl font-semibold" />
                       </div>
                        )}
                        {selectedSegmentText !='' && (
                       <div className="flex text-base font-semibold gap-3 cursor-pointer">
                           <h1> | </h1>           
                       </div>
                        )}
        <div onClick={saveBusniessmodel} className="mobileSmallFont flex text-base font-semibold gap-3 cursor-pointer">
            <h1> Save and Generate Analysis </h1>
            <AiFillSave  className="text-2xl font-semibold" />
        </div>            
      </section>
      <section className="mobileShow w-[90%] sm:w-[90%] md:w-[95%] lg:w-[95%] xl:w-[85%] 2xl:w-[75%] mx-auto pb-5 flex justify-end px-2 lg:px-8">
       {selectedSegmentText !='' && (
        <div onClick={deleteCanvas} className="mobileSmallFont flex text-base font-semibold gap-3 cursor-pointer">
            <h1> Delete </h1>
            <AiFillDelete  className="text-2xl font-semibold" />
        </div>
         )}
        <div className="flex text-base font-semibold gap-3 cursor-pointer">
            <h1> | </h1>           
        </div>
        <div onClick={handlePrint} className="mobileSmallFont flex text-base font-semibold gap-3 cursor-pointer">
          <h1>Print</h1>
          <AiFillPrinter className="text-2xl font-semibold" />
        </div>       
      </section>
      {listVisibility && (
      <section className="w-full sm:w-[90%] md:w-[95%] lg:w-[95%] xl:w-[85%] 2xl:w-[75%] mx-auto pb-5 flex justify px-2 lg:px-8 pt-6">
      <div className="mobileSmallFont w-full flex relative text-base font-semibold gap-3 cursor-pointer">
            {/* Dropdown button */}
            <button
              className={`w-full flex border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white shadow-sm ${
                segments.length > 0
                  ? "hover:bg-gray-100 cursor-pointer"
                  : "cursor-not-allowed"
              } transition-all`}
              onClick={() => {
                if (segments.length > 0) setDropdownOpen(!dropdownOpen);
              }}
              disabled={segments.length === 0}
            >
              {selectedSegmentText || "Select Canvas"}
              &nbsp;&nbsp;<svg
                className={`w-4 h-4 transform transition-transform rightStyleIcon-30 ${
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
              <ul className="w-full absolute z-10 bg-white border border-gray-300 rounded-md shadow-lg mt-10 py-1">
                {segments.map((segment) => (
                  <li
                    key={segment.id}
                    onClick={() => {
                      loadSelectedSegment(segment.id)
                    }}
                    className="px-4 py-2 text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer transition-all"
                  >
                    {segment.title} 
                  </li>
                ))}
              </ul>
            )}
        </div>              
      </section>      
      )}
      <div className="w-full sm:w-[99%] mx-auto flex items-center justify-center min-h-screen" ref={resultBoxRef}>  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 sm:gap-x-10 lg:gap-x-20 gap-y-5 mb-10">
          {cardsData.map((card, index) => (
            <Card 
              id={card.id}
              key={index}
              title={card.title}
              img={card.img}
              dummyText={card.dummyText}              
              cType="BMC"
            />
          ))}
          <div className="mb-10"></div>  
          <div className="mb-10">
          <button onClick={saveBusniessmodel} className="w-full p-3 bg-textThemeClr text-white font-bold rounded-md hover:bg-green-600 transition" >
             Save and Generate Analysis
          </button>
        </div>  
        <div className="mb-10"></div> 
        </div>         
      </div>       
    </>
  );
};

export default CardsSection;
