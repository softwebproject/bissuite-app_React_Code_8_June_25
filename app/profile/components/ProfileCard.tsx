"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { WiTime4 } from "react-icons/wi";
import { getUserById } from "@/app/services/useraccount.service";
import profileImg from "../../../public/images/profileImg.png";

const ProfileCard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserById();
      if (data) setUser(data);
    };
    fetchUser();
  }, []);

  return (
    <section className="flex flex-col items-center bg-white shadow-md rounded-lg p-6">
      {/* ✅ Profile Image */}
      <Image
        src={
          user?.profileImagePath
            ? `http://bisuite.somee.com/${user.profileImagePath}`
            : profileImg
        }
        alt="Profile"
        width={128}
        height={128}
        className="w-32 h-32 rounded-full object-cover"
      />

      {/* ✅ Name */}
      <h2 className="text-xl md:text-2xl font-semibold text-[#333333] my-4">
        {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
      </h2>

      {/* ✅ Country */}
      <div className="flex items-center gap-2 my-1">
        <IoLocationOutline className="text-[rgba(111,111,111,0.8)] text-xl md:text-2xl " />
        <p className="text-[rgba(111,111,111,0.8)] text-base md:text-lg">
          {user?.country || "Unknown"}
        </p>
      </div>

      {/* ✅ Local Time */}
      <div className="flex items-center gap-2 my-1">
        <WiTime4 className="text-[rgba(111,111,111,0.8)] text-xl md:text-2xl " />
        <p className="text-[rgba(111,111,111,0.8)] text-base md:text-lg">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} local time
        </p>
      </div>
    </section>
  );
};

export default ProfileCard;
