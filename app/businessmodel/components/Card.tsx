"use client";

import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { MdSaveAlt } from "react-icons/md";
import Image, { StaticImageData } from "next/image";
import "./Card.css";
import { GetBMC, GetLMC, checkUserLogin, alertUserUnAuthentication  } from "@/app/services/useraccount.service";

interface CardProps {
  id: number;
  title: string;
  img: StaticImageData;
  dummyText: string;
  cType: string;
}

const Card: React.FC<CardProps> = ({ id, title, img, dummyText, cType }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  // const [showInput, setShowInput] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleAddItem = () => {
    if(!checkUserLogin())
    {
          alertUserUnAuthentication();
          return false;
    }
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  useEffect(() => {  
    if(!isLoaded)
    {
      if(cType=="BMC")
      {
      GetBMC().then((data) => {
        if(data!=null)
        {
          if(id==1 && data.keyPartners !=null)
          {            
              setItems(data.keyPartners);  
          }
          else if(id==2 && data.keyActivities !=null)
            {
              setItems(data.keyActivities); 
              } 
            else if(id==3 && data.keyResources !=null)
              {
                setItems(data.keyResources); 
                } 
            else if(id==4 && data.keyPropositions !=null)
              {
                setItems(data.keyPropositions); 
                 } 
              else if(id==5 && data.keyRelationships !=null)
                {
                  setItems(data.keyRelationships); 
                  } 
                else if(id==6 && data.keyChannels !=null)
                  {
                    setItems(data.keyChannels); 
                    }
                    else if(id==7 && data.keySegment !=null)
                    {
                      setItems(data.keySegment); 
                     }
                     else if(id==8 && data.keyStructure !=null)
                      {
                        setItems(data.keyStructure); 
                        }
                        else if(id==9 && data.keyStreams !=null)
                        {
                          setItems(data.keyStreams); 
                          }
          
        }
      });
      setIsLoaded(true);    
    }
    else if(cType=="LMC")
      {
        GetLMC().then((data) => {
          if(data!=null)
          {
            if(id==1 && data.problem !=null)
            {
              setItems(data.problem); 
              }
            else if(id==2 && data.solution !=null)
              {
                setItems(data.solution);  
               } 
              else if(id==3 && data.uniqueValueProposition !=null)
                {
                  setItems(data.uniqueValueProposition); 
                 } 
              else if(id==4 && data.unfairAdvantage !=null)
                {
                  setItems(data.unfairAdvantage); 
                  } 
                else if(id==5 && data.customerSegments !=null)
                  {
                    setItems(data.customerSegments); 
                   }
                   else if(id==6 && data.keyMetrics !=null)
                      {
                        setItems(data.keyMetrics);  
                        }
                    else if(id==7 && data.channels !=null)
                        {
                          setItems(data.channels); 
                          }
                          else if(id==8 && data.costStructure !=null)
                          {
                            setItems(data.costStructure); 
                           }
                          else if(id==9 && data.revenueStreams !=null)
                            {
                              setItems(data.revenueStreams); 
                               }
            
          }
        });        
        setIsLoaded(true);  
      } 
      else{

      }
    }
    
  });




  return (
    <div className="w-80">
      <div className="py-10 px-5 border h-full rounded-lg drop-shadow-md flex flex-col items-start bg-white relative">
        {/* Top Section */}

        <div className="flex flex-col items-center w-full">
          <div className="mb-3">
            <Image src={img} alt={`${title} image`} width={80} height={80} />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <h2 className="text-[28px] font-bold text-center">
            {title}
          </h2>
        </div>
        {/* Input Section */}
        <div className="mt-4 w-full relative">
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={dummyText}
              rows={5}
              className={`border w-full rounded-xl p-2 pr-10 resize-none ${
                inputValue.trim()
                  ? "overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                  : "overflow-hidden"
              }`}
            ></textarea>
          </div>

          <MdSaveAlt
            className="absolute bottom-2 right-2 text-3xl cursor-pointer text-textThemeClr hover:text-green-700"
            onClick={handleAddItem}
          />
        </div>

        {/* List Section */}
        <ul
          className={`mt-4 space-y-3 w-full ${
            items.length > 0
              ? "border rounded-lg shadow-sm p-4 bg-white" // Styles when items exist
              : ""
          }`}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 border-b"
            >
              <span className={`card-${id}`}>{item}</span>
              <FiX
                className="cursor-pointer text-red-600 hover:text-red-800"
                onClick={() => handleRemoveItem(index)}
              />
            </li>
          ))}
        </ul>

        {/* Add Button Section */}
      </div>
    </div>
  );
};

export default Card;
