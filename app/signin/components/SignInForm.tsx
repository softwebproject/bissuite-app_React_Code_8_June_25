"use client";
import Link from "next/link";
import { useState } from "react";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { userLogin } from "@/app/services/useraccount.service";

  

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formAction = async (formData: FormData) => {
    
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const result = await userLogin(email, password);
    if(result)
    {      
      if (typeof window !== 'undefined' && window.location) {
        window.location.href="/";
      }
    }
    else
    {
      alert("Invalid credentials. Please try again with correct credentials.");
    }
  }  

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-bgthemeClr p-8 shadow-lg shadow-[rgba(76,175,79,0.49)] rounded-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-textThemeClr mb-6">
          Sign In to BisSuite
        </h1>
        <form action={formAction}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                className="w-full pl-10 p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-4 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full pl-10 pr-10 p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your password"
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-4 cursor-pointer text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <PiEyeBold className="text-xl" />
                ) : (
                  <PiEyeClosedBold className="text-xl" />
                )}
              </div>
            </div>
            <Link href="/resetpasswordrequest">
              <h3 className="text-textThemeClr text-xs md:text-sm text-end mt-2 cursor-pointer hover:underline">
                Reset Password?
              </h3>
            </Link>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-textThemeClr text-white font-bold rounded-md hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-textThemeClr font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
