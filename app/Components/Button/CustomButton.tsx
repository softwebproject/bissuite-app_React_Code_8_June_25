import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string; // link is expected to be a string
  textSize: string;
  fontWeight: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  link = "/", // Default to '/' if link is not passed
  textSize,
  fontWeight,
}) => {
  // Check if the link prop is valid
  if (!link) {
    console.error("Invalid link prop passed to CustomButton");
    return null; // Return nothing if the link is invalid
  }

  return (
    <Link href={link}>
      <button
        className={`text-white bg-textThemeClr py-4 px-10 hover:bg-btnHover font-medium rounded-lg ${textSize} ${fontWeight} px-4 py-2 text-center`}
      >
        {text}
      </button>
    </Link>
  );
};

export default CustomButton;
