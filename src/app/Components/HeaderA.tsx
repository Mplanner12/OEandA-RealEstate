"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { BiSearchAlt } from "react-icons/bi";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const HeaderA: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <header className="bg-white w-full h-full text-neutral-900 p-4">
      {/* Small Screen */}
      <div className="flex justify-between items-center lg:hidden pl-[1rem]">
        <div className="flex items-center">
          <Image
            src="/realLogo.png"
            alt="OEandA Logo"
            width={30}
            height={30}
            className="mr-2"
          />
          <span className="font-bold">OEandA</span>
        </div>
        <button onClick={toggleMenu} className="bg-inherit">
          <HiMiniBars3BottomRight
            size={23}
            className="bg-inherit text-black shadow-sm"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center lg:hidden">
          <button onClick={toggleMenu} className="absolute top-4 right-4 ">
            <FaXmark size={26} className="text-white" />
          </button>
          <nav className="flex flex-col items-center space-y-6 text-lg">
            <Link href="/" className="hover:text-gray-400 text-white">
              Home
            </Link>
            <Link href="/AboutUs" className="hover:text-gray-400 text-white">
              About Us
            </Link>
            <div className="relative">
              {/* <Link
                href={"/Properties"}
                className="flex items-center justify-center space-x-2 hover:text-gray-400 text-white"
                onClick={toggleDropdown}
              >
                <span>Properties</span>
                <RiArrowDropDownLine size={26} />
              </Link> */}
              {/* Dropdown Menu */}
              {/* {isDropdownOpen && (
                <div className="absolute left-0 mt-2 py-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <Link
                    href="/properties/residential"
                    className="block px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                  >
                    Residential
                  </Link>
                  <Link
                    href="/properties/commercial"
                    className="block px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200 ease-in-out"
                  >
                    Commercial
                  </Link>
                </div>
              )} */}
            </div>
            <Link href="/services" className="hover:text-gray-400 text-white">
              Services
            </Link>
            <Link href="/blog" className="hover:text-gray-400 text-white">
              AATC
            </Link>
            <Link href="/ContactUs" className="hover:text-gray-400 text-white">
              Contact Us
            </Link>
            {/* <button className="bg-neutral-900 ml-4 p-3 px-6 border border-zinc-900 rounded-lg flex items-center space-x-2 hover:bg-white hover:text-black transition">
              <BiSearchAlt size={26} className="font-light" />
              <span>Property Search</span>
            </button> */}
          </nav>
        </div>
      )}
      {/*  Larger screen */}
      <div className="hidden lg:flex justify-between items-center  p-[2rem] px-[2rem] pr-[4rem]">
        <div className="flex items-center">
          <Image
            src="/realLogo.png"
            alt="OEandA Logo"
            width={30}
            height={30}
            className="mr-2"
          />
          <span className="font-bold">OEandA</span>
        </div>
        <nav className="w-fit flex items-center space-x-12 text-black">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/AboutUs" className="hover:text-gray-400">
            About Us
          </Link>
          <div className="relative">
            <Link
              href={"/Properties"}
              className="flex items-center space-x-2 hover:text-gray-400"
              onClick={toggleDropdown}
            >
              <span>Properties</span>
              {/* <RiArrowDropDownLine size={26} /> */}
            </Link>
          </div>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/AATc" className="hover:text-gray-400">
            AATC
          </Link>
          <div className="flex justify-start items-center space-x-10">
            <Link
              href="/ContactUs"
              className="hover:text-gray-400 ml-[2.25rem]"
            >
              Contact Us
            </Link>
            {/* <div className="bg-white text-black ml-4 p-2 px-3 border border-white rounded-lg flex items-center space-x-2 hover:bg-white hover:text-black transition">
              <button>
                <BiSearchAlt size={26} className="font-light" />
              </button>
              <input
                type="text"
                placeholder="Property Search"
                className="w-[8rem] text-sm bg-white text-black ml-4 p-2 px-1 border border-white rounded-lg flex items-center space-x-2 hover:bg-white hover:text-black transition"
              />
            </div> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderA;
