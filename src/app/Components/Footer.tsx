/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { GrSend } from "react-icons/gr";
import { TbMailPlus } from "react-icons/tb";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 w-full h-full flex flex-col justify-start items-start py-[3.25rem] pt-[0.5rem] lg:pb-[3.25rem]">
      <div className="py-[3.25rem] px-[0.85rem] md:px-[3rem] border-y-[0.5px] border-zinc-900 w-full h-full flex flex-col md:flex-row justify-center items-center gap-x-[1rem]">
        <div className="w-full md:w-3/4 h-full flex flex-col justify-center items-start">
          <div className="text-white text-4xl font-bold">
            Start Your Real Estate Journey Today
          </div>
          <div className="text-neutral-400 text-[0.8rem] font-light mt-4">
            Your dream property is just a click away. Whether you&apos;re
            looking for a new home, a strategic investment, or expert real
            estate advice, ORA EGBUNIKE & ASSOCIATES is here to assist you every
            step of the way. Take the first step towards your real estate goals
            and explore our available properties or get in touch with our team
            for personalized assistance.
          </div>
        </div>
        <div className="w-full md:w-1/4 mt-[2rem] md:mt-0 h-full flex justify-end items-center">
          <button className="bg-red-600 w-full md:w-fit p-[1rem] h-full flex justify-center items-center text-white text-sm font-bold rounded-lg">
            Explore Properties
          </button>
        </div>
      </div>
      <div className="w-full md:w-fit h-full bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-1 md:px-[1.5rem] flex flex-col md:flex-row justify-between">
          {/* Logo and Newsletter */}
          <div className="w-full mb-8 md:mb-0 px-4 flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img src="/realLogo.png" alt="Logo" className="h-8 mr-2" />
              <span className="text-xl font-semibold">
                Ora Egbunike & Associates
              </span>
            </div>
            <div className="w-full md:w-fit flex items-center bg-neutral-950 rounded-lg px-4 py-2">
              <TbMailPlus size={20} className="text-neutral-400 mr-[0.5rem]" />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-transparent outline-none text-white placeholder-neutral-400 flex-1"
              />
              <button className="ml-2 text-xl">
                <GrSend className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links  sm*/}
          <div className="md:hidden w-full h-full flex justify-center items-start gap-x-2 mt-[2rem]">
            <div className="w-[1/2] h-full flex pl-[0.85rem] pr-[1.5rem] flex-col justify-start items-center gap-y-[2rem]">
              <div>
                <Link
                  href={"/"}
                  className="text-lg font-normal mb-4 text-neutral-400"
                >
                  Home
                </Link>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#hero"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Hero Section
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#features"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#properties"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Properties
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#testimonials"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                    <a
                      href="#faqs"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  href={"/Properties"}
                  className="text-lg font-light text-neutral-400 mb-4"
                >
                  Properties
                </Link>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#portfolio"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                    <a
                      href="#portfolio"
                      // href="#categories"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Categories
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  href={"/ContactUs"}
                  className="text-lg font-light text-neutral-400 mb-4"
                >
                  Contact Us
                </Link>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#contact-form"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Contact Form
                    </a>
                  </li>
                  <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                    <a
                      href="#offices"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Our Offices
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[1/2] h-full flex border-l border-zinc-800 flex-col justify-start items-center gap-y-[2rem]">
              <div className="w-fit pb-[1.5rem]">
                <h3 className="w-fit text-lg font-light text-neutral-400 mb-4">
                  About Us
                </h3>
                <ul className="w-fit">
                  <li className="mb-2">
                    <a
                      href="#story"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Our Story
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#clients"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Our Works
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#how-it-works"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      How It Works
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#team"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Our Team
                    </a>
                  </li>
                  <li className="border-b pb-[1rem] md:pb-0 border-zinc-800">
                    <a
                      href="#clients"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Our Clients
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full pb-[1.5rem] px-[1rem] flex flex-col items-center">
                <h3 className="w-fit text-lg font-light text-neutral-400 mb-4">
                  Services
                </h3>
                <ul className="w-fit flex flex-col items-end text-center">
                  <li className="mb-2 w-fit">
                    <a
                      href="#valuation"
                      className="text-white text-center hover:text-gray-400 font-extralight"
                    >
                      Valuation Mastery
                    </a>
                  </li>
                  <li className="mb-2 w-fit">
                    <a
                      href="#marketing"
                      className="text-white text-center w-full hover:text-gray-400 font-extralight"
                    >
                      Strategic Marketing
                    </a>
                  </li>
                  <li className="mb-2 w-fit">
                    <a
                      href="#negotiation"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Negotiation Wizardry
                    </a>
                  </li>
                  <li className="mb-2 w-fit">
                    <a
                      href="#closing"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Closing Success
                    </a>
                  </li>
                  <li className="pb-10 border-b border-zinc-800">
                    <a
                      href="#management"
                      className="w-fit text-white hover:text-gray-400 font-extralight"
                    >
                      Property Management
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Navigation Links  md*/}
          <div className="hidden w-fit h-full md:flex justify-start items-start gap-8 md:gap-x-[4rem] gap-x-14 mt-[2rem] md:mt-0 md:px-[2rem]">
            <div>
              <Link
                href={"/"}
                className="text-lg font-normal mb-4 text-neutral-400"
              >
                Home
              </Link>
              <ul>
                <li className="mb-2">
                  <a
                    href="#hero"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Hero Section
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#features"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Features
                  </a>
                </li>
                {/* <li className="mb-2">
                  <a
                    href="#properties"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Properties
                  </a>
                </li> */}
                <li className="mb-2">
                  <a
                    href="#testimonials"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Testimonials
                  </a>
                </li>
                <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                  <a
                    href="#faqs"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="pb-[1.5rem] w-[7rem] md:pb-0 pl-[1.5rem] md:pl-0 border-l md:border-none border-zinc-800">
              <Link
                href={"/AboutUs"}
                className="text-lg w-[7rem] font-light text-neutral-400 mb-4"
              >
                About Us
              </Link>
              <ul className="w-[7.5rem]">
                <li className="mb-2">
                  <a
                    href="#story"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Our Story
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#works"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Our Works
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#how-it-works"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    How It Works
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#team"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Our Team
                  </a>
                </li>
                <li className="border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                  <a
                    href="#clients"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Our Clients
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Link
                href="/Properties"
                className="text-lg font-light text-neutral-400 mb-4"
              >
                Properties
              </Link>
              <ul>
                <li className="mb-2">
                  <Link
                    href="/Properties"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                  <a
                    href="#categories"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Categories
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full h-full flex flex-col md:flex-row justify-start items-center gap-y-[2rem] md:gap-x-[3.5rem] md:gap-y-0">
              <div className="pb-[1.5rem] md:pb-0 pl-[1.5rem] md:pl-0 border-l md:border-none border-b border-zinc-800">
                <Link
                  href={"/Services"}
                  className="text-lg font-light text-neutral-400 mb-4"
                >
                  Services
                </Link>
                <ul>
                  <li className="mb-2">
                    <a
                      href="#valuation"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Valuation Mastery
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#marketing"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Strategic Marketing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#negotiation"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Negotiation Wizardry
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      href="#closing"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Closing Success
                    </a>
                  </li>
                  <li>
                    <a
                      href="#management"
                      className="text-white hover:text-gray-400 font-extralight"
                    >
                      Property Management
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[6.5rem]">
              <Link
                href="/ContactUs"
                className="text-lg font-light text-neutral-400 mb-4"
              >
                Contact Us
              </Link>
              <ul className="w-[6.5rem]">
                <li className="mb-2">
                  <a
                    href="#contact-form"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Contact Form
                  </a>
                </li>
                <li className="w-[6rem] border-b pb-[1rem] md:border-none md:pb-0 border-zinc-800">
                  <a
                    href="#offices"
                    className="text-white hover:text-gray-400 font-extralight"
                  >
                    Our Offices
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
