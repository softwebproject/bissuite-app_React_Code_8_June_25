import CustomButton from "@/app/Components/Button/CustomButton";
import Image from "next/image";
import { StaticImageData } from "next/image";
interface CardProps {
  imageUrl: StaticImageData;
  title: string;
  description: string;
  link: string;
  buttonText: string;
}

const CardModal: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  link,
  buttonText,
}) => {
  return (
    <div className="max-w-sm bg-white border border-bgthemeClr rounded-lg shadow p-2 flex flex-col">
      <Image className="mx-auto py-7 w-60 h-60" src={imageUrl} alt={title} />

      <div className="p-4 flex flex-col justify-between flex-grow">
        <h5 className="mb-2 text-center text-3xl font-bold tracking-tight text-themeblackClr">
          {title}
        </h5>

        <p className="my-3 text-sm font-normal text-themegrayClr text-center flex-grow">
          {description}
        </p>

        <div className="flex justify-center mt-5">
          <CustomButton
            text={buttonText}
            link={link}
            textSize="text-sm"
            fontWeight="font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default CardModal;
