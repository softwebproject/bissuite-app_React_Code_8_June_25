"use client";
import Image from "next/image";

import {FaLinkedinIn } from "react-icons/fa";
import imageSpinner from "../../../public/images/spinner.webp";
// export function AddLibrary() {
//   if (document.querySelectorAll(`script[src="/bissuitescript.js"]`).length <= 0) {
//     const script = document.createElement("script");
//     script.src ="/bissuitescript.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }
//   return true;
// }

const Footer: React.FC = () => {
  return (
    <footer className="bg-bgthemefooter text-gray-300 py-10">
      <div className="max-w-screen-xl mx-auto px-5 md:px-10 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-semibold text-white">BisSuite</h1>
          <p className="text-sm mt-7">Copyright © 2024 BisSuite.</p>
          <p className="text-sm mt-2">All rights reserved</p>
          <div className="flex space-x-4 mt-5">
            {/* <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-800"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-lg" />
            </a> */}
            <a
              href="https://www.linkedin.com/company/pangeacons"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-800"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-lg" />
            </a>
            {/* <a
              href="#"
              className="p-2 bg-gray-700 rounded-full hover:bg-gray-800"
              aria-label="Twitter"
            >
              <FaTwitter className="text-lg" />
            </a> */}
          </div>
        </div>

        {/* Frameworks Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">Frameworks</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/businessmodel" className="hover:text-white">
                Business Model Canvas
              </a>
            </li>
            <li>
              <a href="/leancanvas" className="hover:text-white">
                Lean Canvas
              </a>
            </li>
            <li>
              <a href="/swotgenerate" className="hover:text-white">
                Environmental Analysis
              </a>
            </li>
            <li>
              <a href="/towsgenerate" className="hover:text-white">
              SWOT Analysis
              </a>
            </li>
            <li>
              <a href="/towsmatrix" className="hover:text-white">
                TOWS Matrix
              </a>
            </li>
            <li>
              <a href="/valueproposition" className="hover:text-white">
                Value Proposition Canvas
              </a>
            </li>
            <li>
              <a href="/breakevenpoint" className="hover:text-white">
                Breakeven Analysis
              </a>
            </li>
            <li>
              <a href="/edianylsis" className="hover:text-white">
                EDI Analysis
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/termsandconditions" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contactus" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacypolicy" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/signup" className="hover:text-white">
                SignUp
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Up to Date Section */}
        {/* <div>
          <h2 className="text- font-semibold text-white">Stay up to date</h2>
          <form className="mt-4">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 rounded-l-sm text-gray-800 placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 bg-textThemeClr hover:bg-green-700 text-white rounded-r-sm"
                aria-label="Subscribe"
              >
                ➤
              </button>
            </div>
          </form>
        </div> */}
      </div>
      <div id="dvSpinner" className="spinnerBGStyle">
        <div className="spinnerStyle">
        <Image className="spinnerImgStyle" src={imageSpinner} alt="LOading..." />
        </div>
      </div>
      {/* {AddLibrary()} */}
    </footer>
  );
};

export default Footer;
