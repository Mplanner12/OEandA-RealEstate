/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PiArrowUpRight } from "react-icons/pi";

const ContactHero: React.FC = () => {
  return (
    <div className="lg:w-full bg-black text-white md:p-5 xl:px-2 p-4 md:pr-0 flex flex-col md:flex-row-reverse items-center sm:items-start justify-start">
      {/* <!-- Text Content --> */}
      <div className="w-full h-full flex-col md:px-[3rem] lg:px-[4.5rem] xl:px-[6rem] pt-[1.25rem] md:pt-[5rem] justify-center items-center mt-[-1rem] lg:mt-0">
        <div className="flex flex-col mb-6 mt-[-0.35rem] md:mt-0 w-full">
          <h1 className="md:text-[2.5rem] leading-[2.85rem] text-3xl font-bold mb-4 md:mb-3 w-full xl:w-[50rem]">
            Get in Touch with ORA EGBUNIKE & ASSOCIATES
          </h1>
          <p className="md:text-base text-[0.9rem] mb-6 md:mt-[1.25rem] md:mb-[1.75rem] text-neutral-400 w-full xl:w-[68rem]">
            Welcome to ORA EGBUNIKE & ASSOCIATES Contact Us page. We&apos;re
            here to assist you with any inquiries, requests, or feedback you may
            have. Whether you&apos;re looking to buy or sell a property, explore
            investment opportunities, or simply want to connect, we&apos;re just
            a message away. Reach out to us, and let&apos;s start a
            conversation.
          </p>
        </div>
        {/* <!-- Conatact Links --> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-3 md:gap-x-2 text-center w-full border-t-2 border-zinc-800 shadow-md py-[1rem]">
          <div className="w-full flex flex-col justify-start items-center md:w-full shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700 gap-y-[1.25rem]">
            <div className="w-full gap-x-[0.25rem] relative left-[1.25rem] lg:left-[2rem] h-full flex justify-center items-start">
              <div className="w-full h-full flex justify-center items-center">
                <img src="/CEmail.png" alt="" />
              </div>
              <div className="w-full h-full flex justify-center ml-[-1rem] md:ml-[-2rem] lg:ml-[-4rem] relative top-[-0.75rem] items-start">
                <PiArrowUpRight size={40} className="text-neutral-600" />
              </div>
            </div>
            <div className="md:text-sm w-full text-center text-sm text-white font-bold">
              info@OE&A.com
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-center md:w-full shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700 gap-y-[1.25rem]">
            <div className="w-full gap-x-[0.25rem] relative left-[1.25rem] lg:left-[2rem] h-full flex justify-center items-start">
              <div className="w-full h-full flex justify-center items-center">
                <img src="/CEmail.png" alt="" />
              </div>
              <div className="w-full h-full flex justify-center ml-[-1rem] md:ml-[-2rem] lg:ml-[-4rem] relative top-[-0.75rem] items-start">
                <PiArrowUpRight size={40} className="text-neutral-600" />
              </div>
            </div>
            <div className="md:text-sm w-full text-center text-sm text-white font-bold">
              info@OE&A.com
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-center md:w-full shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700 gap-y-[1.25rem]">
            <div className="w-full gap-x-[0.25rem] relative left-[1.25rem] lg:left-[2rem] h-full flex justify-center items-start">
              <div className="w-full h-full flex justify-center items-center">
                <img src="/CEmail.png" alt="" />
              </div>
              <div className="w-full h-full flex justify-center ml-[-1rem] md:ml-[-2rem] lg:ml-[-4rem] relative top-[-0.75rem] items-start">
                <PiArrowUpRight size={40} className="text-neutral-600" />
              </div>
            </div>
            <div className="md:text-sm w-full text-center text-sm text-white font-bold">
              info@OE&A.com
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-center md:w-full shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700 gap-y-[1.25rem]">
            <div className="w-full gap-x-[0.25rem] relative left-[1.25rem] lg:left-[2rem] h-full flex justify-center items-start">
              <div className="w-full h-full flex justify-center items-center">
                <img src="/CEmail.png" alt="" />
              </div>
              <div className="w-full h-full flex justify-center ml-[-1rem] md:ml-[-2rem] lg:ml-[-4rem] relative top-[-0.75rem] items-start">
                <PiArrowUpRight size={40} className="text-neutral-600" />
              </div>
            </div>
            <div className="md:text-sm w-full text-center text-sm text-white font-bold">
              info@OE&A.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
