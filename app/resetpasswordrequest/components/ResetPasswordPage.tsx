"use client";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineKey } from "react-icons/md";
//import { useRouter } from "next/navigation";
import Link from "next/link";
import { ResetPSWRequest } from "@/app/services/useraccount.service";

const ResetPasswordPage = () => {
  //const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission    
    const target = e.target as typeof e.target & {
      email: { value: string };     
    };
    const email = target.email.value; // typechecks!
    //console.log(email);
    ResetPSWRequest(email);
    //router.push("/resetpasswordrequestsent");
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md px-2 md:px-6 py-3 bg-white text-center">
        <div className="flex justify-center items-center w-28 h-28 bg-[rgba(219,255,238,0.4)] rounded-full mx-auto">
          <div className="flex justify-center items-center w-20 h-20 bg-[#dbfee7] rounded-full mx-auto">
            <MdOutlineKey className="text-textThemeClr text-4xl rotate-[320deg]" />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F3245] mt-4">
          Reset Password?
        </h2>
        <p className="text-[#5B676D] text-base lg:text-lg mt-2">
          No worries, we’ll send you reset instructions.
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-[#6F6F6F] font-medium mb-2 flex"
            >
              Email
            </label>
            <div>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-[#E0E1E2] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-textThemeClr"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-textThemeClr my-4 text-white font-bold rounded-md hover:bg-btnHover transition"
          >
            Reset Password
          </button>
        </form>

        <div className="mt-4">
          <h1 className="flex justify-center items-center font-semibold">
            <IoIosArrowRoundBack className="mr-1 text-2xl mt-1" />
            <span className="mr-1"> Back to </span>
            <Link href="/signin">
              <span className="font-medium text-textThemeClr hover:underline">
                Sign in
              </span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
