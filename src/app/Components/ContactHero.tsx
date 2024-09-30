/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-3 md:gap-x-2 text-center w-full border-t-2 border-zinc-800 shadow-md py-[1rem]">
          <div className="w-full flex justify-start items-center md:w-full shadow-md bg-stone-50 p-[2.65rem] rounded-md border-[0.25px] border-neutral-700 gap-x-[1.25rem]">
            <div className="w-fit h-full flex justify-start items-start">
              <FaFacebook className="text-black w-full" size={60} />
            </div>
            <div className="w-full mt-[0.5rem] gap-x-[0.25rem] h-full flex flex-col justify-start items-start">
              <div className="w-full flex justify-start items-center text-center text-2xl text-black font-semibold">
                Facebook
              </div>
              <p className="w-full text-[0.85rem] mt-[0.4rem] text-gray-700 flex justify-start items-center font-light">
                <span className="text-gray-400 mr-[0.25rem] text-2xl">
                  &#8226;
                </span>{" "}
                Ora Egbunike & Associates
              </p>
            </div>
          </div>
          <div className="w-full flex justify-start items-center md:w-full shadow-md bg-stone-50 p-[2.65rem] rounded-md border-[0.25px] border-neutral-700 gap-x-[1.25rem]">
            <div className="w-fit h-full flex justify-start items-start">
              <FaLinkedin className="text-black w-full" size={60} />
            </div>
            <div className="w-full mt-[0.5rem] gap-x-[0.25rem] h-full flex flex-col justify-start items-start">
              <div className="w-full flex justify-start items-center text-center text-2xl text-black font-semibold">
                Linkedln
              </div>
              <p className="w-full text-[0.85rem] mt-[0.4rem] text-gray-700 flex justify-start items-center font-light">
                <span className="text-gray-400 mr-[0.25rem] text-2xl">
                  &#8226;
                </span>{" "}
                Oea_Associates
              </p>
            </div>
          </div>
          <div className="w-full flex justify-start items-center md:w-full shadow-md bg-stone-50 p-[2.65rem] rounded-md border-[0.25px] border-neutral-700 gap-x-[1.25rem]">
            <div className="w-fit h-full flex justify-start items-start">
              <FaYoutube className="text-black w-full" size={60} />
            </div>
            <div className="w-full mt-[0.5rem] gap-x-[0.25rem] h-full flex flex-col justify-start items-start">
              <div className="w-full flex justify-start items-center text-center text-2xl text-black font-semibold">
                Youtube
              </div>
              <p className="w-full text-[0.85rem] mt-[0.4rem] text-gray-700 flex justify-start items-center font-light">
                <span className="text-gray-400 mr-[0.25rem] text-2xl">
                  &#8226;
                </span>{" "}
                Ora Egbunike & Associates
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
