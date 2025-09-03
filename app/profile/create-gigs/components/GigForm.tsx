"use client";

import { FaChevronDown, FaImage } from "react-icons/fa";

export default function GigForm() {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-white shadow-md rounded-lg border border-[#DADBDD] px-2 sm:px-4 md:px-6 lg:px-10">
      <form className="space-y-6">
        {/* Gig Title Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div>
            <h1 className="text-[#252525] text-base font-semibold">
              Gig title
            </h1>

            <p className="text-sm text-[#393A3D] mt-2">
              As your Gig storefront, your{" "}
              <b> title is the most important place </b> to include keywords
              that buyers would likely use to search for a service like yours.
            </p>
          </div>
          <div className="md:col-span-2">
            <textarea
              placeholder="I will do something i'm really good at"
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
            <div className="text-right text-xs text-gray-400 mt-1">
              0 / 80 max
            </div>
          </div>
        </div>

        {/* Category Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h1 className="text-[#252525] text-base font-semibold">Category</h1>

            <p className="text-sm text-[#393A3D] mt-2">
              Choose the category and sub-category most suitable for your Gig.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative w-full">
                <select className="w-full appearance-none border border-gray-300 rounded-md px-4 py-3 text-sm pr-8">
                  <option>SELECT A CATEGORY</option>
                </select>
                <FaChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
              </div>
              <div className="relative w-full">
                <select className="w-full appearance-none border border-gray-300 rounded-md px-4 py-3 text-sm pr-8">
                  <option>SELECT A SUBCATEGORY</option>
                </select>
                <FaChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="text-[#252525] text-base font-semibold">
            Price Starting from
          </div>
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="$90"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm"
            />
          </div>
        </div>

        {/* Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h1 className="text-[#252525] text-base font-semibold">
              Description
            </h1>

            <p className="text-sm text-[#393A3D] mt-2">
              Briefly Describe Your Gig
            </p>
          </div>
          <div className="md:col-span-2">
            <textarea
              rows={7}
              placeholder="Briefly Describe Your Gig"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
            <div className="text-right text-xs text-gray-400 mt-1">
              0 / 1200 Characters
            </div>
          </div>
        </div>

        {/* Cover Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div>
            <h1 className="text-[#252525] text-base font-semibold">
              Cover Image
            </h1>

            <p className="text-sm text-[#393A3D] mt-2">
              Get noticed by the right buyers with visual examples of your
              services.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="border border-gray-300 rounded-md p-4 flex items-center ">
              <div className="border border-dashed border-gray-300 p-6 rounded-md text-center">
                <FaImage className="mx-auto text-3xl text-gray-400 mb-2" />
                <p className="text-sm font-medium text-gray-600">
                  Drag image here
                </p>
                <p className="text-sm text-gray-400">or </p>
                <p className="text-sm text-green-600 font-semibold cursor-pointer">
                  or Browse Image
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-10 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            type="button"
            className="border border-gray-300 px-10 py-2 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
