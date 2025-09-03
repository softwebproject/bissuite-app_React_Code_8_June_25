"use client";
import Link from "next/link";
//import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineKey } from "react-icons/md";
import { getQueryVariable, ResetPSWDO} from "@/app/services/useraccount.service";

const ResetPasswordPage3 = () => {
  //const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    const target = e.target as typeof e.target & {
      password: { value: string };    
      cPassword: { value: string };
    };
    const password = target.password.value; // typechecks!
    //const cPassword = target.cPassword.value; // typechecks!
    //console.log(password);
    //console.log(cPassword);
    //router.push("/resetpasswordsuccess");
    let email ='0';
                let token='';
                if (typeof window !== 'undefined') {
                  email = getQueryVariable('email'); 
                  token = getQueryVariable('token');            
                } 
                ResetPSWDO(email, password, token);           
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md px-2 md:px-6 py-3 bg-white text-center">
        <div className="flex justify-center items-center w-28 h-28 bg-lightGreen50 rounded-full mx-auto">
          <div className="flex justify-center items-center w-20 h-20 bg-lightGreenCustom rounded-full mx-auto">
            <MdOutlineKey className="text-textThemeClr text-4xl rotate-[320deg]" />
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2F3245] mt-4">
          Set New Password
        </h2>
        <p className="text-[#5B676D] text-base lg:text-lg mt-2">
          Your new password must be different to previously used passwords.
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="text-[#6F6F6F] font-medium mb-2 flex"
            >
              Password
            </label>
            <div>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-[#E0E1E2] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-textThemeClr"
                placeholder="********"
              />
            </div>
            <span className="text-[#929292] text-sm mt-1 mb-2 flex">
              Must be at least 8 characters.
            </span>
          </div>

          <div className="mb-4">
            <label
              htmlFor="cPassword"
              className="text-[#6F6F6F] font-medium mb-2 flex"
            >
              Confirm Password
            </label>
            <div>
              <input
                type="password"
                id="cPassword"
                className="w-full p-3 border border-[#E0E1E2] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-textThemeClr"
                placeholder="********"
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

export default ResetPasswordPage3;
