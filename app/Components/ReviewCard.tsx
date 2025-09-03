"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface ReviewCardProps {
  userName: string;
  userCountry: string;
  userImage?: string; // optional, fallback to initials
  countryFlag: string;
  rating: number;
  date: string;
  reviewText: string;
}

export default function ReviewCard({
  userName,
  userCountry,
  userImage,
  countryFlag,
  rating,
  date,
  reviewText,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 space-y-3 w-full">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0 flex justify-center sm:justify-start">
          {userImage ? (
            <Image
              src={userImage}
              alt="User"
              width={90}
              height={90}
              className="rounded-full w-24 h-24"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-[rgba(76,175,79,0.3)] flex items-center justify-center font-semibold text-textThemeClr text-4xl">
              {userName[0]}
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-gray-800">{userName}</h4>
            <div className="flex items-center gap-2 text-sm text-gray-600 justify-center sm:justify-start">
              <Image
                src={countryFlag}
                alt="Flag"
                width={14}
                height={11}
                className="w-[14px] h-[11px] mt-1.5"
              />
              {userCountry}
            </div>
          </div>

          <div className="flex items-center text-yellow-500 text-sm gap-1 mt-2 justify-center sm:justify-start">
            <FaStar />
            <span className="text-yellow-500">{rating.toFixed(1)}</span>
            <span className="text-gray-300 ml-2">|</span>
            <span className="text-gray-500 ml-2">{date}</span>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed line-clamp-4 mt-2 text-center sm:text-left">
            {reviewText}{" "}
            <span className="cursor-pointer font-semibold">more</span>
          </p>
        </div>
      </div>
    </div>
  );
}
