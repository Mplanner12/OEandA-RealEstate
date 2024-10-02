// components/PortfolioCard.tsx
import React from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  images: string[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start w-full md:justify-between py-6 mb-[3rem] md:mb-[3.5rem] gap-y-[3rem]">
      {/* Left side: Text and button */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start">
        <h2 className="text-[2.25rem] md:text-[3rem] uppercase font-bold w-[85%] text-red-950">
          {title}
        </h2>
        <p className="text-gray-700 mt-4 w-[80%]">{description}</p>
        <button className="mt-9 md:mt-6 py-2 px-4 bg-red-600 text-white font-normal rounded-md">
          Explore Properties
        </button>
      </div>

      {/* Right side: Images */}
      <div className="w-full justify-start lg:justify-end items-center md:w-1/2 flex flex-wrap">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} image ${index}`}
            className="rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
