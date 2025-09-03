"use client";
import React, { useState } from "react";
import ProfileBar from "../../components/ProfileBar";
import Image from "next/image";
import gig1 from "../../../../public/images/gigs/gig1.png";
import gig2 from "../../../../public/images/gigs/gig2.png";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PiShareFatFill } from "react-icons/pi";
import Link from "next/link";
import { useRouter } from "next/navigation";

const gigs = [
  {
    id: 1,
    title: "Create Business Model and plan layout",
    image: gig1,
    clicks: 32,
    orders: 2,
    status: "Active",
  },
  {
    id: 2,
    title: "Create TOWS with our trained model.",
    image: gig2,
    clicks: 7,
    orders: 0,
    status: "Pause",
  },
];

const GigDetails = () => {
  const [selectedGigs, setSelectedGigs] = useState<number[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedGigs([]);
    } else {
      setSelectedGigs(gigs.map((gig) => gig.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle individual checkbox selection
  const handleSelectGig = (id: number) => {
    if (selectedGigs.includes(id)) {
      setSelectedGigs(selectedGigs.filter((gigId) => gigId !== id));
      setSelectAll(false);
    } else {
      setSelectedGigs([...selectedGigs, id]);
      if (selectedGigs.length + 1 === gigs.length) {
        setSelectAll(true);
      }
    }
  };
 const router=useRouter();
  return (
    <>
      <div className="flex flex-col gap-6">
        <ProfileBar activeBar="Gigs" />

        <section className="flex-col bg-white shadow-md rounded-md">
          {/* Header */}
          <section className="flex justify-between border-b border-[#ECECEC] px-4 py-3">
            <h1 className="text-lg sm:text-xl md:text-[22px] font-semibold py-2">
              Gigs
            </h1>
            <Link
              href="/profile/create-gigs"
              className="bg-textThemeClr rounded-md px-4 py-2 text-white"
            >
              CREATE A NEW GIG
            </Link>
          </section>

          {/* Gigs Table */}
          <div className="overflow-x-auto w-full pb-10">
            <table className="min-w-full border-separate border-spacing-y-4 text-sm sm:text-base">
              <thead>
                <tr className="text-left text-[#95979D] text-sm font-semibold uppercase">
                  <th className="px-4 flex gap-5">
                    <input
                      type="checkbox"
                      className="w-5 h-5 cursor-pointer accent-textThemeClr"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                    Gig
                  </th>
                  <th className="px-4">Clicks</th>
                  <th className="px-4">Orders</th>
                  <th className="px-4">Status</th>
                  <th className="px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {gigs.map((gig) => (
                  <tr key={gig.id} className="bg-white rounded-lg shadow-sm">
                    <td className="flex items-center gap-4 px-4 py-4">
                      <input
                        type="checkbox"
                        className="w-5 h-5 cursor-pointer accent-textThemeClr"
                        checked={selectedGigs.includes(gig.id)}
                        onChange={() => handleSelectGig(gig.id)}
                      />
                      <Image
                        src={gig.image}
                        alt="gig image"
                        width={50}
                        height={50}
                        className="rounded"
                      />
                      <span className="max-w-xs">{gig.title}</span>
                    </td>
                    <td className="px-4">
                      {gig.clicks.toString().padStart(2, "0")}
                    </td>
                    <td className="px-4">{gig.orders}</td>
                    <td className="px-4">
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded ${
                          gig.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {gig.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 flex gap-2">
                      <button  onClick={()=>router.push("/profile/profile-view")} className="p-3 rounded bg-gray-100 hover:bg-gray-200">
                        <FiEye className="text-[#727B8B] text-lg md:text-xl" />
                      </button>
                      <button className="p-3 rounded bg-gray-100 hover:bg-gray-200">
                        <RiDeleteBin6Fill className="text-[#727B8B] text-lg md:text-xl" />
                      </button>
                      <button className="p-3 rounded bg-gray-100 hover:bg-gray-200">
                        <PiShareFatFill className="text-[#727B8B] text-lg md:text-xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default GigDetails;
