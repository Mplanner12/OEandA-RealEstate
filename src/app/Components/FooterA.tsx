/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { IoMail } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

const FooterA: React.FC = () => {
  return (
    <footer className="bg-white text-black w-full h-full border-y-[0.5px] border-zinc-100 flex flex-col justify-start items-start py-[3.25rem] pt-[0.5rem] lg:pb-[3.25rem]">
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
      <div className="w-full h-full lg:grid flex flex-col-reverse lg:grid-cols-3 mt-[2rem]">
        <div className="w-full h-full flex justify-start items-center">
          <img src="/AbstractAATC.png" alt="" />
        </div>
        <div className="w-full h-full flex flex-col col-span-2 lg:justify-start items-start lg:gap-y-[3rem] lg:mt-[2rem]">
          <div className="w-full h-full flex flex-col justify-center items-center lg:items-start">
            <button className="bg-emerald-700 mx-auto text-white py-[0.85rem] text-sm px-5 lg:ml-[16rem] mb-[4rem] rounded-lg">
              Download Brochure
            </button>
            <div className="w-fill h-full flex flex-col md:flex-row justify-center lg:justify-start items-center gap-x-[4.25rem]">
              <div className="w-full h-full flex gap-y-3 flex-col justify-start items-center">
                <FaPhoneAlt
                  size={38}
                  className="text-emerald-700 p-2 bg-emerald-100 rounded-full"
                />
                <p className="text-center text-lg text-emerald-700">
                  +234-xxx-xxx-xxxx
                </p>
              </div>
              <div className="w-full h-full flex gap-y-3 flex-col justify-start items-center">
                <IoMail
                  size={38}
                  className="text-emerald-700 p-2 bg-emerald-100 rounded-full"
                />
                <p className="text-center text-lg text-emerald-700">
                  cykonkwo@oraegbunike.com{" "}
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
        </div>
      </div>

      <div className="w-full md:w-fit h-full bg-white text-neutral-900 py-12 lg:mt-[1.75rem]">
        <div className="container mx-auto px-1 md:px-[1.5rem] flex flex-col md:flex-row justify-between">
          {/* Logo and Newsletter */}
          <div className="w-full mb-8 md:mb-0 px-4 flex flex-col items-start lg:mt-[1.85rem]">
            <div className="flex items-center mb-4">
              <img src="/realLogo.png" alt="Logo" className="h-8 mr-2" />
              <span className="text-xl font-bold">OEandA</span>
            </div>
            <div className="w-full md:w-fit flex items-center border border-emerald-700 bg-white rounded-lg px-5 py-3">
              <TbMailPlus size={20} className="text-emerald-700 mr-[0.5rem]" />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent outline-none text-emerald-700 placeholder-emerald-700 flex-1"
              />
              <button className="ml-2 text-xl">
                <GrSend className="h-6 w-6 text-emerald-700" />
              </button>
            </div>
          </div>

          {/* Navigation Links  sm*/}
          <div className="md:hidden w-full h-full flex justify-start px-[1rem] items-start gap-x-[2rem] mt-[2rem]">
            <div className="w-[1/2] h-full flex pl-[0.85rem] pr-[1.5rem] flex-col justify-start items-center gap-y-[2rem]">
              <div>
                <h3 className="text-lg font-normal mb-4 text-neutral-500">
                  Home
                </h3>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#hero"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Hero Section
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#features"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Features
                    </a>
                  </li>

                  <li className="mb-2">
                    <a
                      href="#testimonials"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                    <a
                      href="#faqs"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div>
                <h3 className="text-lg font-light text-neutral-500 mb-4">
                  Properties
                </h3>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#portfolio"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                    <a
                      href="#categories"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Categories
                    </a>
                  </li>
                </ul>
              </div> */}
              <div>
                <h3 className="text-lg font-light text-neutral-500 mb-4">
                  Contact Us
                </h3>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#contact-form"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Contact Form
                    </a>
                  </li>
                  <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                    <a
                      href="#offices"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Our Offices
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[1/2] h-full flex border-l border-zinc-800 flex-col justify-start items-center gap-y-[2rem]">
              <div className="w-fit pb-[1.5rem]">
                <h3 className="w-fit text-lg font-light text-neutral-500 mb-4">
                  About Us
                </h3>
                <ul className="w-fit">
                  <li className="mb-2">
                    <a
                      href="#story"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Our Story
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#works"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Our Works
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#how-it-works"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      How It Works
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#team"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="border-b pb-[1rem] md:pb-0 border-zinc-800">
                    <a
                      href="#clients"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Our Clients
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="w-full pb-[1.5rem] px-[1rem] flex flex-col items-center">
                <h3 className="w-fit text-lg font-light text-neutral-500 mb-4">
                  Services
                </h3>
                <ul className="w-fit flex flex-col items-end text-center">
                  <li className="mb-2 w-fit">
                    <a
                      href="#valuation"
                      className="text-neutral-900 text-center hover:text-gray-400 font-semibold"
                    >
                      Valuation Mastery
                    </a>
                  </li>
                  <li className="mb-2 w-fit">
                    <a
                      href="#marketing"
                      className="text-neutral-900 text-center w-full hover:text-gray-400 font-semibold"
                    >
                      Strategic Marketing
                    </a>
                  </li>
                  <li className="mb-2 w-fit">
                    <a
                      href="#negotiation"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Negotiation Wizardry
                    </a>
                  </li>
                  <li className="mb-2 w-fit">
                    <a
                      href="#closing"
                      className="text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Closing Success
                    </a>
                  </li>
                  <li className="pb-10 border-b border-zinc-800">
                    <a
                      href="#management"
                      className="w-fit text-neutral-900 hover:text-gray-400 font-semibold"
                    >
                      Property Management
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          {/* Navigation Links  md*/}
          <div className="hidden w-fit h-full lg:flex justify-start items-start gap-8 lg:gap-x-[5rem] xl:gap-x-[6.25rem] gap-x-14 mt-[2rem] md:px-[1.5rem] lg:px-[1.25rem] lg:pl-[3rem] xl:pl-[7.25rem]">
            <div>
              <h3 className="text-lg font-normal mb-4 text-neutral-500">
                Home
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#hero"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Hero Section
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#features"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#properties"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Properties
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#testimonials"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                  <a
                    href="#faqs"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    FAQ&apos;s
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-[1.5rem] w-fit md:pb-0 pl-[1.5rem] md:pl-0 border-l md:border-none border-zinc-800">
              <h3 className="text-lg w-[7rem] font-normal text-neutral-500 mb-4">
                About Us
              </h3>
              <ul className="w-fit">
                <li className="mb-2">
                  <a
                    href="#story"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Our Story
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#works"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Our Works
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#how-it-works"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    How It Works
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#team"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Our Team
                  </a>
                </li>
                <li className="border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                  <a
                    href="#clients"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Our Clients
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h3 className="text-lg font-normal text-neutral-500 mb-4">
                Properties
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#portfolio"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                  <a
                    href="#categories"
                    className="text-neutral-900 hover:text-gray-400 font-semibold"
                  >
                    Categories
                  </a>
                </li>
              </ul>
            </div> */}
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
                    +234-xxx-xxx-xxxx
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
