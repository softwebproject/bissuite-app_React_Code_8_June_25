"use client";
import Link from "next/link";
import { useState } from "react";
import { redirect, useRouter } from 'next/navigation';

import { FaEnvelope, FaLock } from "react-icons/fa";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { registerUser, alertConnectionError } from "@/app/services/useraccount.service";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPass, setShowConPass] = useState(false);
const router = useRouter();
  const formAction = async (formData: FormData) => {
    
    const email = formData.get('email') as string
    const password = formData.get('password') as string
   
  const confirmPassword = formData.get('confirmPassword') as string;
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

    const result = await registerUser(email, password, firstName, lastName);
    if(result==0)
    {
      alert("User account has been created successfully. Please login to continue.");
     // redirect('/signin');
    
router.push('/profile');

    }
    else if(result==1)
    {
        alert("User already signed up with same email. Please sign-in or contact admin for any support.");  
          
router.push('/profile');      
    }
      else
    {
      alertConnectionError();
    }
  }  

  const toggleConPassVisibility = () => {
    setShowConPass((prevState) => !prevState);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-bgthemeClr p-8 shadow-lg shadow-[rgba(76,175,79,0.49)] rounded-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-textThemeClr mb-6">
          Sign Up to BisSuite
        </h1>
        <form action={formAction}>
        <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-medium mb-2"
            >
              First Name
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full pl-10 p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your first name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-medium mb-2"
            >
              Last Name
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full pl-10 p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your lastname"
              />
            </div>
          </div>
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
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-4 text-gray-400" />
              <input
                type={showConPass ? "text" : "password"}
                id="confirmPassword"
                 name="confirmPassword"
                className="w-full pl-10 pr-10 p-3 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-green-300"
                placeholder="Enter your password"
              />
              <div
                onClick={toggleConPassVisibility}
                className="absolute right-3 top-4 cursor-pointer text-gray-400 hover:text-gray-600"
              >
                {showConPass ? (
                  <PiEyeBold className="text-xl" />
                ) : (
                  <PiEyeClosedBold className="text-xl" />
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-textThemeClr text-white font-bold rounded-md hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/signin" className="text-textThemeClr font-bold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
