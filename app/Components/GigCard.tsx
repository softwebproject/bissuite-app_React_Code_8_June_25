"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import{FaStar,FaHeart,FaRegHeart} from "react-icons/fa"

interface SingleGigProps{
    image:string;
    price:number;
    userImage:string;
    userName:string;
    userRole:string;
    description:string;
    rating:number;
    reviewsCount:number;
    liked?:boolean;
}
export default function GigCard({
image,
price,
userImage,
userName,
userRole,
description,
rating,
reviewsCount,
liked=false,

}:SingleGigProps){
    const router=useRouter();
    return(
        <div
        onClick={()=>router.push("/profile/detail-gig-view")}
        className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition duration-300 cursor-pointer"
        >
           <div className="relative w-full h-48">
        <Image src={image} alt="Gig Image" fill className="object-cover" />
        <div className="absolute bottom-2 right-0 bg-[rgba(49,65,118,0.70)] text-sm px-4 py-1 rounded-s-full font-semibold text-white border border-white">
          From ${price}
        </div>
      </div>


 <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <Image
            src={userImage}
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="text-sm font-semibold text-gray-900">
              {userName}
            </div>
            <div className="text-xs text-gray-500">{userRole}</div>
          </div>
        </div>

        <p className="text-sm text-gray-700 mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-yellow-500 text-sm">
            <FaStar className="mr-1" />
            {rating.toFixed(1)}{" "}
            <span className="text-gray-600 ml-1">({reviewsCount})</span>
          </div>
          <button className="text-gray-400 hover:text-red-500">
            {liked ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
      </div>
        </div>
    );
}
