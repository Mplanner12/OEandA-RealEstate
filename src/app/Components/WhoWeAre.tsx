/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div
      id="story"
      className="w-full h-full flex flex-col md:flex-row-reverse justify-center items-center py-[2.5rem] pt-[1rem] px-[2rem] gap-y-[2.75rem]"
    >
      <div className="w-full h-full flex justify-center items-center">
        <img className="md:hidden" src="WhoweAre.png" alt="Image" />
        <img className="hidden md:flex" src="WhoweAremd.png" alt="Image" />
      </div>
      <div className="w-full h-full px-[1rem] mt-[1.25rem] flex flex-col justify-start items-center">
        <p className="w-full uppercase text-red-600 text-[1rem] text-start font-bold">
          Take a look at our story
        </p>
        <h1 className="w-full h-full text-[2.25rem] text-black font-bold mt-[1.2rem]">
          Who We Are
        </h1>
        <p className="text-gray-800 text-[1.25rem] tracking-wide lg:tracking-normal leading-9 mt-[1.25rem]">
          Ora Egbunike & Associates is a leading firm of chartered surveyors,
          certified Facilities managers and integrated property investment
          consultants providing hands- on solutions to complex business
          challenges faced by organisations and helping them in meeting specific
          needs. Our value offerings are bespoke, designed and founded upon
          extensive research and analysis of customer needs with the aim of
          improving organizational performance, facilities synergy/efficiency,
          employee wellness, productivity and sustained competitive edge.
        </p>
        <div className="w-full h-full flex justify-start items-center">
          <Link
            href={"/AboutUs"}
            className="bg-red-700 text-white px-[2rem] py-[1rem] rounded-lg mt-[1.5rem]"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
