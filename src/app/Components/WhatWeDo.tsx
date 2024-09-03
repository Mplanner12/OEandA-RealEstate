/* eslint-disable @next/next/no-img-element */
import React from "react";

const WhatWeDo = () => {
  return (
    <div className="bg-white w-full h-full flex flex-col md:px-[2.5rem] justify-center items-center pb-[3.5rem] md:pb-[5rem] pt-[1rem] px-[2rem] gap-y-[1.75rem]">
      <div className="w-full h-full px-[0.15rem] mt-[1.25rem] flex flex-col justify-start items-center">
        <p className="w-full uppercase text-red-600 text-[1rem] text-start font-bold">
          130+ beautiful apartments
        </p>
        <h1 className="w-full h-full text-[2.5rem] text-black font-bold mt-[1.2rem]">
          What we Do
        </h1>
      </div>
      <div className="w-full h-full flex flex-col md:flex-row justify-start items-center gap-y-[4rem] gap-x-[4rem]">
        <div className="bg-white shadow-xl pt-[1.2rem] pb-[2.75rem] px-[0.5rem] rounded-md w-full h-full flex flex-col justify-start items-center">
          <img className="w-full " src="/factoryImg.png" alt="Image" />
          <div className="w-full h-full flex flex-col justify-start items-center mt-[1.5rem] px-[0.85rem]">
            <h1 className="w-full text-[2rem] text-neutral-800 text-start font-bold">
              Industrial
            </h1>
            <p className="text-neutral-800 text-[1.35rem] leading-9 mt-[1rem]">
              Industrial development is our main line of business. We do Factory
              Construction, Warehouse and others
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl pt-[1.2rem] pb-[2.75rem] px-[0.5rem] rounded-md w-full h-full flex flex-col justify-start items-center">
          <img className="w-full " src="/factoryImg.png" alt="Image" />
          <div className="w-full h-full flex flex-col justify-start items-center mt-[1.5rem] px-[0.85rem]">
            <h1 className="w-full text-[2rem] text-neutral-800 text-start font-bold">
              Commercial
            </h1>
            <p className="text-neutral-800 text-[1.35rem] leading-9 mt-[1rem]">
              Industrial development is our main line of business. We do Factory
              Construction, Warehouse and others
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl pt-[1.2rem] pb-[2.75rem] px-[0.5rem] rounded-md w-full h-full flex flex-col justify-start items-center">
          <img className="w-full " src="/factoryImg.png" alt="Image" />
          <div className="w-full h-full flex flex-col justify-start items-center mt-[1.5rem] px-[0.85rem]">
            <h1 className="w-full text-[2rem] text-neutral-800 text-start font-bold">
              Residential
            </h1>
            <p className="text-neutral-800 text-[1.35rem] leading-9 mt-[1rem]">
              Industrial development is our main line of business. We do Factory
              Construction, Warehouse and others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
