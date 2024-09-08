/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const AboutHero: React.FC = () => {
  return (
    <div className="lg:w-full bg-black text-white md:p-5 xl:px-2 p-4 md:pr-0 flex flex-col md:flex-row-reverse items-center sm:items-start justify-between">
      {/* <!-- Image --> */}
      <div className="bg-[url('/About Design.png')] w-full h-full lg:flex lg:flex-col hidden md:px-[1.5rem] justify-center">
        <div className="bg-zinc-900 rounded-xl md:py-[3.5rem] bg-cover hidden lg:flex w-full h-full justify-center">
          <img
            src="/Image.png"
            alt="Image"
            className="w-full h-full rounded-xl object-cover object-center"
          />
        </div>
      </div>
      <div className="bg-[url('/About Design.png')] w-full h-full flex-col lg:hidden rounded-xl justify-center">
        <div className="bg-zinc-900 rounded-xl w-full h-full">
          <img
            width={300}
            height={300}
            src="/Image.png"
            alt="Image"
            className="bg-[url('/About Design.png')] w-full h-full object-cover object-center"
          />
        </div>
      </div>
      {/* <!-- Text Content --> */}
      <div className="w-full h-full flex-col md:px-[3rem] lg:px-[4.5rem] xl:px-[6rem] pt-[1.25rem] md:pt-[5rem] justify-center items-center mt-[-1rem] lg:mt-0">
        <div className="w-full h-full py-[0.75rem] fles justify-start items-center">
          <img src="/starsAbout.png" alt="" />
        </div>
        <div className="flex flex-col mb-6 mt-[-0.35rem] md:mt-0 w-full">
          <h1 className="md:text-[2.5rem] leading-[2.85rem] text-3xl font-bold mb-4 md:mb-3 w-[20rem] md:w-[30rem]">
            Our Journey
          </h1>
          <p className="md:text-base text-[0.9rem] mb-6 md:mt-[1.25rem] md:mb-[1.75rem] text-neutral-400 md:w-[30rem]">
            The firm was incorporated in 1985 and is duly recognized by the
            Nigerian Institution of Estate Surveyors and Valuers (NIESV), Estate
            Surveyors and Valuers Registration Board of Nigeria (ESVARBON) and
            the Royal Institution of Chartered Surveyors (RICS). The firm is
            also a member of International Facility Management Association,
            Houston, USA and Institute of Workplace and Facilities Management
            (IWFM), London, UK.
          </p>
        </div>
        {/* <!-- Statistics Content --> */}
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 gap-x-0 text-center w-full justify-between md:justify-start">
          <div className="w-full md:w-fit h-full flex justify-between gap-[0.5rem] md:gap-y-0">
            <div className="w-full md:w-fit shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700">
              <p className="text-2xl text-center md:text-start sm:text-xl font-bold">
                200+
              </p>
              <p className="md:text-sm w-full text-center md:text-start font-light text-sm text-neutral-400">
                Happy Customers
              </p>
            </div>
            <div className="w-full md:w-fit shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700">
              <p className="text-2xl text-center md:text-start sm:text-xl font-bold">
                10k+
              </p>
              <p className="md:text-sm w-full text-center md:text-start font-light text-sm text-neutral-400">
                Properties For Clients
              </p>
            </div>
          </div>
          <div className="w-full md:w-fit shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700">
            <p className="text-2xl text-center md:text-start sm:text-xl font-bold">
              16+
            </p>
            <p className="md:text-sm w-full text-center md:text-start font-light text-sm text-neutral-400">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
