"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";

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
    <header className="z-50 bg-white w-full h-full text-neutral-900 p-4">
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
          <span className="font-bold">Ora Egbunike & Associates</span>
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
            <Link href="/Portfolio" className="text-white hover:text-gray-400">
              Portfolio
            </Link>
            {/* <Link href="/blog" className="hover:text-gray-400 text-white">
              AATC
            </Link> */}
            <Link href="/ContactUs" className="hover:text-gray-400 text-white">
              Contact Us
            </Link>
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
          <span className="font-bold">Ora Egbunike & Associates</span>
        </div>
        <div className="w-fit flex items-center gap-x-14 text-black">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href={"/AboutUs"} className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="/Portfolio" className="hover:text-gray-400">
            Portfolio
          </Link>
          {/* <Link href="/services" className="hover:text-gray-400">
            Services
          </Link> */}
          <Link href="/ContactUs" className="hover:text-gray-400">
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
      </div>
    </header>
  );
};

export default HeaderA;
