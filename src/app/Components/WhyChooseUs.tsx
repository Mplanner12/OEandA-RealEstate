/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TiTick } from "react-icons/ti";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-white py-[4rem] px-[1rem] lg:px-[4.75rem] w-full h-full flex text-neutral-900 flex-col justify-start items-center">
      <h1 className="w-full h-full text-center text-[2.25rem] lg:text-[3rem] font-bold">
        Why Choose Us
      </h1>
      <p className="text-sm text-center lg:w-[27rem] my-[1.5rem]">
        AATC is a premier, purpose-built commercial property located in the
        heart of Abuja’s Central Business District.{" "}
      </p>
      <div className="w-full h-full flex flex-col-reverse lg:flex-row justify-start items-center mt-[2.85rem] rounded-xl border-[0.5px] border-neutral-200 p-4 lg:p-[2.75rem]">
        <div className="w-full lg:w-[63%] h-full flex flex-col justify-center items-center">
          <h1 className="w-full h-full text-start font-bold text-2xl lg:text-[2rem]">
            AATC has everything you need to succeed.
          </h1>
          <div className="w-full lg:pr-[13.85rem] h-full flex flex-col justify-start items-start mt-[1.5rem]">
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                24-hour uninterrupted power supply with 150% backup capacity.
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Continuous, reliable water supply.
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Shatterproof, soundproof glass façade for optimal security and
                noise control.
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Advanced security systems with state-of-the-art access control.
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Building Management System (BMS) to optimize mechanical
                services.
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                High-speed elevators for seamless vertical transportation.
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Daikin VRV air-conditioning for superior climate control.
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Fibre optic internet for fast and reliable connectivity.
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                24/7 concierge and maintenance services.
              </p>
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Ample parking with up to 12 dedicated slots per floor.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-[1rem] lg:w-[37%] h-full flex mb-[1.5rem] lg:mb-0 justify-start items-center">
          <div className="w-full h-full flex justify-center items-center">
            <img src="/WhyChooseUs1.png" alt="" />
            {/* <div className="w-full h-full ml-[3.5rem] z-20"> */}
            <img
              className="w-[70%] lg:w-full h-full ml-[-9rem] mt-[11.75rem] lg:mt-0 z-20"
              src="/WhyChooseUs2.png"
              alt=""
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
