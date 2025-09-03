"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";

const ResetPasswordPage4 = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    router.push("/signin");
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md px-2 md:px-6 py-6 bg-white text-center">
        <div className="flex justify-center items-center w-28 h-28 bg-[rgba(211,249,225,0.5)] rounded-full mx-auto">
          <div className="flex justify-center items-center w-20 h-20 bg-[#D3F9E1] rounded-full mx-auto">
            <FaRegCircleCheck className="text-[#268B5B] text-4xl " />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F3245] mt-4">
          Password reset
        </h2>
        <p className="text-[#5B676D] text-base lg:text-lg mt-2">
          Your pasword has been successfully reset. Click below to log in
          iBlocks
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <button
            type="submit"
            className="w-full p-4 bg-textThemeClr my-4 text-white font-bold rounded-md hover:bg-btnHover transition"
          >
            Continue
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

export default ResetPasswordPage4;
