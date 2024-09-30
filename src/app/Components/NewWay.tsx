/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const NewWay: React.FC = () => {
  return (
    <div
      id="#features"
      className="bg-white w-full h-full flex flex-col md:flex-row justify-start items-center md:items-start px-[2.5rem] md:px-[3rem] py-[4.25rem]"
    >
      <div className="bg-stone-50 py-[3.5rem] md:mx-[2rem] rounded-xl shadow-md">
        <div className="w-full h-full gap-y-[1.25rem] flex flex-col justify-center items-start px-[2.75rem]">
          <h1 className="text-[2.2rem] font-bold text-gray-800">
            The new way to find your new home
          </h1>
          <p className="text-gray-800 text-[1.25rem] font-[300]">
            Find your dream place to live in with more than 10k+ properties
            listed.
          </p>
          <Link
            href={"/Properties"}
            className="w-fit bg-red-700 rounded-xl text-white text-base md:text-lg py-[1.25rem] px-[1.25rem] md:px-[2rem]"
          >
            Browse Properties
          </Link>
        </div>

        <img
          className="mt-[1.75rem] w-full h-full object-cover"
          src="/Illustration.png"
          width={500}
          height={500}
          alt="Illustration"
        />
      </div>
      <div className="w-full h-full flex flex-col md:flex-row justify-start py-[4rem] mt-[1rem] md:gap-x-[1rem] gap-y-[2rem] items-center  md:pl-[3rem]">
        <div className="w-full h-full gap-y-[3rem] flex flex-col justify-start items-start">
          <div className="w-full gap-x-[2rem] md:gap-x-[1.5rem] h-full flex md:flex-col justify-start items-start">
            <div className="w-fit h-full flex justify-center items-center">
              <img width={100} height={100} src="/QIcon.png" alt="QIcon" />
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
              <h1 className="text-slate-950 text-[1.85rem] font-bold">
                Quality of Service
              </h1>
              <p className="text-gray-600 text-lg mt-[1.25rem] md:leading-7">
                Our Experience and familiarization enhances our proactive
                approach in the discharge of our duties.
              </p>
            </div>
          </div>
          <div className="w-full gap-x-[2rem] md:gap-x-[1.5rem] h-full flex md:flex-col justify-start items-start">
            <div className="w-fit h-full flex justify-center items-center">
              <img width={100} height={100} src="/BIcon.png" alt="BIcon" />
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
              <h1 className="text-slate-950 text-[1.85rem] font-bold">
                Best Price
              </h1>
              <p className="text-gray-600 text-lg mt-[1.25rem] md:leading-7">
                we bring this through consistent innovative ideas to help you
                reduce cost while adding value in the long run.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full gap-y-[3rem] flex flex-col justify-start items-start">
          <div className="w-full gap-x-[2rem] md:gap-x-[1.5rem] h-full flex md:flex-col justify-start items-start">
            <div className="w-fit h-full flex justify-center items-center">
              <img width={100} height={100} src="/RIcon.png" alt="QIcon" />
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
              <h1 className="text-slate-950 text-[1.85rem] font-bold">
                Risk Transfer
              </h1>
              <p className="text-gray-600 text-lg mt-[1.25rem] md:leading-7">
                Your Risks are transferred, cost planning and targeted
                reductions can be implemented.
              </p>
            </div>
          </div>
          <div className="w-full gap-x-[2rem] md:gap-x-[1.5rem] h-full flex md:flex-col justify-start items-start">
            <div className="w-fit h-full flex justify-center items-center">
              <img width={100} height={100} src="/SIcon.png" alt="BIcon" />
            </div>
            <div className="w-full h-full flex flex-col justify-start items-start">
              <h1 className="text-slate-950 text-[1.85rem] font-bold">
                Sustainability
              </h1>
              <p className="text-gray-600 text-lg mt-[1.25rem] md:leading-7">
                we have our renewable program that focuses on energy reduction
                across the clusters we manage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWay;
