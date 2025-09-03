"use client";
import Link from "next/link";
//import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const ResetPasswordPage2 = () => {
  // const router = useRouter();
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault(); // Prevent default form submission
  //   router.push("/resetpassword3");
  // };
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md px-2  sm:py-6 bg-white text-center">
        <div className="flex justify-center items-center w-28 h-28 bg-lightGreen50 rounded-full mx-auto">
          <div className="flex justify-center items-center w-20 h-20 bg-lightGreenCustom rounded-full mx-auto">
            <IoMail className="text-textThemeClr text-4xl " />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F3245] mt-4">
          Check your email
        </h2>
        <p className="text-[#5B676D] text-base lg:text-lg mt-2">
          We have sent a password reset link to your email.
        </p>

        {/* <form className="mt-2" onSubmit={handleSubmit}>
          <p className="text-[#5B676D] text-base lg:text-lg mb-6">
            xyzabc@gmail.com
          </p>
          <button
            type="submit"
            className="w-full p-4 bg-textThemeClr my-4 text-white font-bold rounded-md hover:bg-btnHover transition"
          >
            Reset Password
          </button>
        </form> */}

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

export default ResetPasswordPage2;
