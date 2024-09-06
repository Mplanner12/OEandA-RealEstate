/* eslint-disable @next/next/no-img-element */
import React from "react";

const images = [
  { src: "/Ex1.png", alt: "Office Space" },
  { src: "/Ex2.png", alt: "Team Meeting" },
  { src: "/Ex3.png", alt: "Business Discussion" },
  //   { src: "/Ex4.png", alt: "Teamwork" },
  //   { src: "/Ex5.png", alt: "Business Meeting" },
];

const images2 = [
  { src: "/Ex4.png", alt: "Teamwork" },
  { src: "/Ex5.png", alt: "Business Meeting" },
];

const ExploreSection = () => {
  return (
    <div className="bg-neutral-950 mt-[-1.5rem] text-white py-12 px-4 md:px-[5.5rem] mb-[-2.25rem] lg:mb-0">
      <div className="w-full bg-neutral-900 rounded-lg shadow-lg p-[2rem] lg:p-[3rem]">
        <div className="w-full grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex justify-center items-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="rounded-lg object-cover w-full h-full shadow-lg hover:shadow-2xl transition duration-300"
              />
            </div>
          ))}
          <div className="w-full h-full flex gap-x-[1rem] justify-start items-center">
            {images2.map((image, index) => (
              <div
                key={index}
                className="w-full h-full flex justify-center items-center"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg object-cover w-full h-full shadow-lg hover:shadow-2xl transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-fit h-fit lg:mt-[-0.35rem] py-[0.9rem] lg:py-0 ml-[-0.75rem]">
          <img className="" src="/AbstractDesign.png" alt="" />
        </div>
        <div className="w-full h-full flex flex-col lg:mt-[0.75rem] md:flex-row justify-center items-center">
          <div className="w-full h-full flex flex-col justify-center items-start">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Explore ORA EGBUNIKE & ASSOCIATES World
            </h2>
            <p className="mb-6 lg:w-[30rem] text-start text-neutral-400">
              Step inside the world of ORA EGBUNIKE & ASSOCIATES, where
              professionalism meets warmth, and expertise meets passion. Our
              gallery offers a glimpse into our team and workspaces, inviting
              you to get to know us better.
            </p>
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <img src="/Ex6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
