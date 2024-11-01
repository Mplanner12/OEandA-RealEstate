/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TiTick } from "react-icons/ti";

const OtherBenefits: React.FC = () => {
  return (
    <div className="bg-white py-[4rem] px-[1rem] lg:px-[4.75rem] w-full h-full flex text-neutral-900 flex-col justify-start items-center">
      <h1 className="w-full h-full text-center text-[2.25rem] lg:text-[3rem] font-bold">
        Other Benefits
      </h1>
      <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-start items-center mt-[2.85rem] rounded-xl border-[0.5px] border-neutral-200 p-4 lg:p-[2.75rem]">
        <div className="w-full lg:w-[63%] h-full flex flex-col justify-start items-center">
          <div className="w-full lg:pr-[13.85rem] h-full flex flex-col justify-start items-start mt-[-1.5rem]">
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Flexible rental packages
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Relocation assistance
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Marketing opportunities for tenants
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Strategic and prestigious location
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Integration into the international trade and trade finance
                ecosystem
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Tenant incentives and support programs
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                State-of-the-art infrastructure for business growth
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-[1rem] lg:w-[45%] h-full flex mb-[1.5rem] lg:mb-0 justify-start items-center">
          <div className="w-full h-full flex justify-center items-center">
            <img
              className="lg:h-[22rem] w-full"
              src="/AATC SME HUB 0008.jpeg"
              alt=""
            />
            {/* <div className="w-full h-full ml-[3.5rem] z-20"> */}
            {/* <img
              className="w-[80%] h-full ml-[-9rem] mt-[8.75rem] lg:mt-0 z-20"
              src="/AATC SME HUB 0010.jpep"
              alt=""
            /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherBenefits;
