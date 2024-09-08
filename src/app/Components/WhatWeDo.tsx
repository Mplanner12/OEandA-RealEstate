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
              DEVELOPMENT APPRAISAL{" "}
            </h1>
            <p className="text-neutral-800 lg:h-[33rem] text-[1.35rem] leading-9 mt-[1rem]">
              We draw from our immense bank of experience and market knowledge
              to advise developers on what we know will work best. From the
              choice of external and interior fittings, to the phasing of fund
              releases, our attention to detail maximizes value for our clients
              while keeping risk to a minimum.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl pt-[1.2rem] pb-[2.75rem] px-[0.5rem] rounded-md w-full h-full flex flex-col justify-start items-center">
          <img className="w-full " src="/factoryImg.png" alt="Image" />
          <div className="w-full h-full flex flex-col justify-start items-center mt-[1.5rem] px-[0.85rem]">
            <h1 className="w-full text-[2rem] text-neutral-800 text-start font-bold">
              ASSET RECOVERY/ RECEIVER MANAGER
            </h1>
            <p className="text-neutral-800 lg:h-[33rem] text-[1.35rem] leading-9 mt-[1rem]">
              Changes in legislations, regulations and market conditions create
              a challenging environment for businesses leading to breaches
              and/or defaults in financial commitments by obligors. Our legal
              team Understands the policies and regulatory requirements and
              through detailed specific situations. We maximize value and
              structure the best settlement recovery outcomes.
            </p>
          </div>
        </div>
        <div className="bg-white shadow-xl pt-[1.2rem] pb-[2.75rem] px-[0.5rem] rounded-md w-full h-full flex flex-col justify-start items-center">
          <img className="w-full " src="/factoryImg.png" alt="Image" />
          <div className="w-full h-full flex flex-col justify-start items-center mt-[1.5rem] px-[0.85rem]">
            <h1 className="w-full text-[2rem] text-neutral-800 text-start font-bold">
              PROJECT MANAGEMENT
            </h1>
            <p className="text-neutral-800 lg:h-[33rem] text-[1.35rem] leading-9 mt-[1rem]">
              We provide project management services through the property life
              cycle. Our firm can help at every stage, by supporting your
              investment, acquisition and development decisions. From full
              project management, contract administration and development
              monitoring to the management of teams, selection of procurement,
              we use our construction and management expertise to ensure
              projects are delivered safely and securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
