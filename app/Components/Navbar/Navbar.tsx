"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import { 
  checkIfTokenValid
} from "@/app/services/useraccount.service";

const Navbar = () => {
  const router = useRouter();
  // State to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to toggle dropdown menu for "Services"
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userFirstName, setUserFirstName] = useState("User");

  // Toggle the main menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };  

  const clearCookies = () => {
    if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') != null) {
      setIsUserLoggedIn(false);  
      setUserFirstName("User");    
      window.localStorage.clear();
      window.location.href="/";
     }
  };  
  //let isUserLoggedIn = false;
  //let userFirstName = "User";

  useEffect(() => {
    
  if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('auth_token') != null) {
    checkIfTokenValid();
    setIsUserLoggedIn(true);      
    if (localStorage.getItem('user_firstName') != null) {   
      setUserFirstName(localStorage.getItem('user_firstName') || "User");     
     }  
   }
  });

  return (
    <nav className="bg-bgthemeClr border-bgthemeClr ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          {/* <span className="text-textThemeClr self-center text-[32px] font-semibold whitespace-nowrap">
            BisSuite
          </span> */}
          <Image
            src={logo}
            alt="Logo Image"
            className="w-28 sm:w-44 h-12"
            // width={112}
            // height={176}
          />
          {/* <img
            src={"/images/logo.png"}
            alt="Logo Image"
            className="w-28 sm:w-44 h-12"
            width={112}
            height={176}
          /> */}
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {
              !isUserLoggedIn ?
          <button
            onClick={() => {
              router.push("/signup");
            }}
            type="button"
            className="text-white bg-textThemeClr hover:bg-btnHover font-medium rounded-lg text-sm px-6 py-3 text-center"
          >
            Sign Up
          </button>
          :
           <p>Hi, {userFirstName} | <Link
           onClick={clearCookies}
           href=""
           className="px-2 py-3 text-sm text-textThemeClr hover:bg-btnHover hover:text-bgthemeClr"
           >Logout</Link>
           </p>
          }
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent md:ml-auto">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 md:p-0 text-textThemeClr hover:bg-textThemeClr hover:text-bgthemeClr md:hover:bg-transparent md:hover:text-btnHover rounded md:bg-transparent md:text-textThemeClr"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className=" py-2 px-3 md:p-0 text-textThemeClr hover:bg-textThemeClr hover:text-bgthemeClr md:hover:bg-transparent md:hover:text-btnHover rounded md:bg-transparent md:text-textThemeClr flex items-center"
              >
                Services
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-bgthemeClr border border-gray-200 rounded-lg shadow-lg md:w-52 z-50">
                  <li>
                    <Link
                      onClick={toggleDropdown}
                      href="/businessmodel"
                      className="block px-2 py-3 text-sm text-textThemeClr hover:bg-btnHover hover:text-bgthemeClr"
                    >
                      Business Model Canvas
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDropdown}
                      href="/leancanvas"
                      className="block px-2 py-3 text-sm text-textThemeClr hover:bg-btnHover hover:text-bgthemeClr"
                    >
                      Lean Canvas
                    </Link>
                  </li>                  
                  <li>
                    <Link
                      onClick={toggleDropdown}
                      href="/swotgenerate"
                      className="block px-2 py-3 text-sm text-textThemeClr hover:bg-btnHover hover:text-bgthemeClr"
                    >
                      Environmental Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDropdown}
                      href="/towsgenerate"
                      className="block px-2 py-3 text-sm text-textThemeClr hover:bg-btnHover hover:text-bgthemeClr"
                    >
                      SWOT Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDropdown}
                      href="/towsmatrix"
                      className="block px-2 py-3 text-sm text-textThemeClr hover:bg-btnHover hover:text-bgthemeClr"
                    >
                      TOWS Matrix
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDropdown}
                      href="/valueproposition"
                      className="block px-2 py-3 text-sm text-textThemeClr hover:bg-btnHover hover:text-bgthemeClr"
                    >
                      Value Proposition Canvas
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDropdown}
                      href="/breakevenpoint"
                      className="block px-2 py-3 text-sm text-textThemeClr hover:bg-btnHover hover:text-bgthemeClr"
                    >
                      Breakeven Analysis
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDropdown}
                      href="/edianylsis"
                      className="block px-2 py-3 text-sm text-textThemeClr hover:bg-btnHover hover:text-bgthemeClr"
                    >
                      EDI Analysis
                    </Link>
                  </li>
                </ul>
              )}
            </li>
             <li>
              <Link
                href="/Business_gigs"
                className="block py-2 px-3 md:p-0 text-textThemeClr hover:bg-textThemeClr hover:text-bgthemeClr md:hover:bg-transparent md:hover:text-btnHover rounded md:bg-transparent md:text-textThemeClr"
              >
                Business Gigs
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="block py-2 px-3 md:p-0 text-textThemeClr hover:bg-textThemeClr hover:text-bgthemeClr md:hover:bg-transparent md:hover:text-btnHover rounded md:bg-transparent md:text-textThemeClr"
              >
                Contact us
              </Link>
            </li>
            {
              !isUserLoggedIn &&(
            <li id="liSignIn">                      
              <Link
                href="/signin"
                className="block py-2 px-3 md:p-0 text-textThemeClr hover:bg-textThemeClr hover:text-bgthemeClr md:hover:bg-transparent md:hover:text-btnHover rounded md:bg-transparent md:text-textThemeClr"
              >
                Sign In
              </Link>
            </li>)                      
            }
          </ul>
        </div>
      </div>
           
    </nav>
  );
};

export default Navbar;
