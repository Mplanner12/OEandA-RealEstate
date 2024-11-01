/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { IoMail } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

const FooterA: React.FC = () => {
  return (
    <footer className="bg-white text-black w-full h-full lg:px-[3.85rem] border-y-[0.5px] border-zinc-100 flex flex-col justify-start items-start py-[3.25rem] pt-[0.5rem] lg:pb-[2rem]">
      <div className="py-[3.25rem] px-[0.85rem] md:px-[3rem] lg:mt-[5rem] w-full h-full flex flex-col md:flex-row justify-center items-center gap-x-[1rem]">
        <div className="w-full md:w-3/4 h-full flex flex-col justify-center items-center">
          <div className="text-4xl flex justify-center items-center font-bold text-center">
            Your Opportunity to Be Part of AATC
          </div>
          <div className="text-zinc-900 flex justify-start lg:w-[38rem] items-center text-[0.8rem] text-center font-light mt-4">
            Seize the opportunity to be a part of this transformative project.
            Early booking guarantees you a strategic position within Africa’s
            most anticipated trade hub.
          </div>
        </div>
      </div>

      {/* Brochure */}
      <div className="w-full h-full lg:grid lg:pl-[2rem] px-[1rem] flex flex-col-reverse lg:grid-cols-3 mt-[2rem]">
        <div className="w-full h-full flex justify-start items-center">
          <img src="/AbstractAATC.png" alt="" />
        </div>
        <a
          href="#Contact"
          className="w-full h-full flex flex-col lg:ml-[0.05rem] col-span-2 lg:justify-start items-start lg:gap-y-[3rem] lg:mt-[2rem]"
        >
          <div className="w-full h-full flex flex-col justify-center items-center lg:items-start">
            <a
              download
              href={"/brochure.pdf"}
              id="button"
              className="bg-emerald-700 mx-auto text-white py-[0.85rem] text-md px-5 w-full lg:ml-[19rem] xl:ml-[20.5rem] 2xl:ml-[33rem] lg:w-fit mb-[4rem] rounded-lg"
            >
              Download Brochure
            </a>
            <div className="w-full h-full flex flex-col lg:pl-[2rem] xl:pl-[4.5rem] 2xl:pl-[6rem] md:flex-row justify-center lg:justify-start items-center gap-x-[4.25rem]">
              <div className="w-full h-full flex gap-y-3 flex-col justify-start items-center">
                <FaPhoneAlt
                  size={38}
                  className="text-emerald-700 p-2 bg-emerald-100 rounded-full"
                />
                <p className="text-center text-lg text-emerald-700">
                  +2348038774238
                </p>
              </div>
              <div className="w-full h-full flex gap-y-3 flex-col justify-start items-center">
                <IoMail
                  size={38}
                  className="text-emerald-700 p-2 bg-emerald-100 rounded-full"
                />
                <p className="text-center text-lg text-emerald-700">
                  cykonkwo@oraegbunike.com
                </p>
              </div>
              <div className="w-full h-full flex gap-y-3 flex-col justify-start items-center">
                <FaGlobe
                  size={38}
                  className="text-emerald-700 p-2 bg-emerald-100 rounded-full"
                />
                <p className="text-center text-lg text-emerald-700">
                  oraegbunike.com/AATC{" "}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="w-full md:w-fit h-full bg-white text-neutral-900 py-12 lg:py-8 lg:mt-[1.75rem]">
        <div className="container mx-auto px-1 md:px-[1.5rem] flex flex-col md:flex-row justify-between">
          {/* Logo and Newsletter */}
          <div className="w-full mb-8 md:mb-0 px-4 flex flex-col items-start lg:mt-[1rem]">
            <div className="flex items-center mb-4">
              <img src="/realLogo.png" alt="Logo" className="h-8 mr-2" />
              <span className="text-xl font-bold">
                Ora Egbunike & Associates
              </span>
            </div>
            <form className="gap-y-4 max-w-lg mx-auto lg:py-[1rem]">
              <h1 className="w-full text-start text-lg font-semibold mb-[0.25rem]">
                Contact Us
              </h1>
              <div className="w-full h-full lg:h-fit flex justify-start items-center gap-x-2 mb-4">
                <div>
                  <label className="block font-semibold">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border lg:w-[14rem] rounded-md p-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full border lg:w-[14rem] rounded-md p-2"
                  />
                </div>
              </div>
              <div>
                <label className="block font-semibold">Message</label>
                <textarea
                  placeholder="Enter your Message here.."
                  className="w-full border rounded-md p-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-700 text-white rounded-md p-2 font-semibold hover:bg-emerald-800"
              >
                Send Your Message
              </button>
            </form>
          </div>

          {/* Navigation Links  sm*/}
          <div className="md:hidden w-full h-full flex flex-col justify-start px-[1rem] items-start gap-x-[0.85rem] mt-[2rem]">
            <div className="w-full h-full flex mb-[1.5rem] pr-[1.5rem] justify-start items-center gap-y-[2rem]">
              <div className="w-full h-full flex flex-col justify-start items-start">
                <h3 className="text-lg font-normal mb-4 text-neutral-500">
                  Home
                </h3>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#Features"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full h-full flex border-l border-zinc-800 flex-col pl-[1.5rem] justify-start items-center gap-y-[2rem]">
                <div className="w-fit">
                  <Link
                    href="/AboutUs"
                    className="w-fit text-lg font-light text-neutral-500 mb-4"
                  >
                    About Us
                  </Link>
                  <ul className="w-fit">
                    <li className="mb-2">
                      <a
                        href="#About"
                        className="text-neutral-900 hover:text-gray-400 font-semibold"
                      >
                        Our Story
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-start">
              <h3 className="text-lg font-light text-neutral-500 mb-4">
                Contact Us
              </h3>
              <ul className="w-full flex flex-col justify-start items-center gap-y-[1rem]">
                <div className="w-full h-full flex gap-x-2 justify-start items-center">
                  <FaGlobe
                    size={18}
                    className="text-emerald-700 rounded-full"
                  />
                  <p className="text-center text-sm text-emerald-700">
                    oraegbunike.com/AATC{" "}
                  </p>
                </div>
                <div className="w-full h-full flex gap-x-2 justify-start items-center">
                  <IoMail size={18} className="text-emerald-700 rounded-full" />
                  <p className="text-center text-sm text-emerald-700">
                    cykonkwo@oraegbunike.com{" "}
                  </p>
                </div>
                <div className="w-full h-full flex gap-x-2 justify-start items-center">
                  <FaPhoneAlt
                    size={18}
                    className="text-emerald-700 rounded-full"
                  />
                  <p className="text-center text-sm text-emerald-700">
                    +2348038774238
                  </p>
                </div>
              </ul>
            </div>
          </div>
          {/* Navigation Links  md*/}
          <div className="hidden w-fit h-full lg:flex justify-start items-start gap-8 lg:gap-x-[5rem] xl:gap-x-[8.5rem] gap-x-14 mt-[2rem] lg:mt-[4.85rem] md:px-[1.5rem] lg:px-[1.25rem] lg:pl-[2.5rem] xl:pl-[3rem] 2xl:pl-[13rem]">
            <div>
              <h3 className="text-lg font-normal mb-4 text-neutral-500">
                Home
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#Features"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-[1.5rem] w-[6rem] md:pb-0 md:pl-0 border-l md:border-none border-zinc-800">
              <a
                href="/AboutUs"
                className="text-lg w-[6rem] font-normal text-neutral-500 mb-4"
              >
                About Us
              </a>
              <ul className="w-[6rem] mt-[0.75rem]">
                <li className="mb-2">
                  <a
                    href="#About"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Our Story
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h3 className="text-lg font-normal text-neutral-500 mb-4">
                Contact Us
              </h3>
              <ul className="w-full flex flex-col justify-start items-center gap-y-[1rem]">
                <div className="w-full h-full flex gap-x-2 justify-start items-center">
                  <FaGlobe
                    size={18}
                    className="text-emerald-700 rounded-full"
                  />
                  <p className="text-center text-sm text-emerald-700">
                    oraegbunike.com/AATC{" "}
                  </p>
                </div>
                <div className="w-full h-full flex gap-x-2 justify-start items-center">
                  <IoMail size={18} className="text-emerald-700 rounded-full" />
                  <p className="text-center text-sm text-emerald-700">
                    cykonkwo@oraegbunike.com{" "}
                  </p>
                </div>
                <div className="w-full h-full flex gap-x-2 justify-start items-center">
                  <FaPhoneAlt
                    size={18}
                    className="text-emerald-700 rounded-full"
                  />
                  <p className="text-center text-sm text-emerald-700">
                    +2348038774238
                  </p>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterA;
