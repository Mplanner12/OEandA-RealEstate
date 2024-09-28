import React from "react";
import { FiBox } from "react-icons/fi";
import { GiHouse } from "react-icons/gi";
import {
  IoCalendarClear,
  IoLocationSharp,
  IoSearchSharp,
} from "react-icons/io5";
import { PiMoneyWavy } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

interface PropertySearchProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const PropertySearch: React.FC<PropertySearchProps> = ({ setSearchTerm }) => {
  return (
    <div className="lg:mt-[-2rem] mt-[1rem] md:mb-[-3rem] lg:px-[3.75rem] w-full h-full flex flex-col justify-start items-center px-[0.75rem]">
      <div className="w-full lg:w-[80%] xl:w-[73%] justify-center items-center font-light lg:bg-neutral-900 lg:p-2 text-stone-500 rounded-lg  lg:rounded-none lg:rounded-t-lg">
        <div className="w-full h-full flex justify-start items-center lg:py-[0.35rem] px-[0.5rem] lg:px-[0.75rem] lg:bg-neutral-950 border-neutral-800 shadow-lg rounded-lg lg:rounded-md border">
          <input
            type="text"
            placeholder="Search For A Property"
            className="w-full h-full text-stone-500 outline-none rounded-md shadow-lg text-sm p-4 lg:p-4 px-4 lg:px-2 bg-neutral-950"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-red-700 w-fit lg:w-[32%] flex justify-center lg:justify-start items-center gap-x-2 text-white rounded-lg p-[0.5rem] px-[1rem] lg:pr-[0.35rem] lg:pl-[1rem]">
            <IoSearchSharp />
            <p className="hidden lg:block">Find Property</p>
          </button>
        </div>
      </div>
      <div className="w-full mt-[1rem] lg:mt-0 lg:w-[88%] xl:w-[89%] flex justify-center rounded-lg items-center font-light bg-neutral-900 px-2 text-stone-500">
        <div className="bg-neutral-900 p-3 py-5 w-full rounded-lg lg:w-fit flex justify-between items-center">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-x-4 lg:gap-x-[2.85rem] gap-y-4 px-[0.2rem] lg:px-0 lg:gap-y-0">
            {/* Dropdown for Location */}
            <div className="relative p-3 lg:p-2 lg:px-2 bg-neutral-950 w-full flex justify-start border border-neutral-800 rounded-lg items-center gap-x-2">
              <IoLocationSharp className="text-gray-400  border-r border-neutral-800 pr-2 w-fit" />
              <select className="rounded w-full lg:w-[8rem] xl:w-[10rem] cursor-pointer appearance-none text-white bg-inherit">
                <option>Location</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>
              <div className="absolute top-2 right-2 pointer-events-none">
                <RiArrowDropDownLine size={30} className=" text-gray-400" />
              </div>
            </div>

            {/* Dropdown for Property Type */}
            <div className="relative p-3 lg:p-2 lg:px-2 bg-neutral-950 w-full flex justify-start border border-neutral-800 rounded-lg items-center gap-x-2">
              <GiHouse className="text-gray-400  border-r border-neutral-800 pr-2 w-fit" />
              <select className="rounded w-full lg:w-[8rem] xl:w-[10rem] cursor-pointer appearance-none text-white bg-inherit">
                <option>Property Type</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Condominium</option>
              </select>
              <div className="absolute top-2 right-2 pointer-events-none">
                <RiArrowDropDownLine size={30} className=" text-gray-400" />
              </div>
            </div>

            {/* Dropdown for Pricing Range */}
            <div className="relative p-3 lg:p-2 lg:px-2 bg-neutral-950 w-full flex justify-start border border-neutral-800 rounded-lg items-center gap-x-2">
              <PiMoneyWavy className="text-gray-400  border-r border-neutral-800 pr-2 w-fit" />
              <select className="rounded lg:w-[6rem] xl:w-[10rem cursor-pointer appearance-none text-white bg-inherit">
                <option>Pricing Range</option>
                <option>$50,000 - $100,000</option>
                <option>$100,000 - $500,000</option>
                <option>$500,000+</option>
              </select>
              <div className="absolute top-2 right-2 pointer-events-none">
                <RiArrowDropDownLine size={30} className=" text-gray-400" />
              </div>
            </div>

            {/* Dropdown for Property Size */}
            <div className="relative p-3 lg:p-2 lg:px-2 bg-neutral-950 w-full flex justify-start border border-neutral-800 rounded-lg items-center gap-x-2">
              <FiBox className="text-gray-400  border-r border-neutral-800 pr-2 w-fit" />
              <select className="rounded w-full lg:w-[8rem] xl:w-[10rem] cursor-pointer appearance-none text-white bg-inherit">
                <option>Property Size</option>
                <option>Under 1000 sq ft</option>
                <option>1000 - 5000 sq ft</option>
                <option>Over 5000 sq ft</option>
              </select>
              <div className="absolute top-2 right-2 pointer-events-none">
                <RiArrowDropDownLine size={30} className=" text-gray-400" />
              </div>
            </div>

            {/* Dropdown for Build Year */}
            <div className="relative p-3 lg:p-2 lg:px-2 bg-neutral-950 w-full flex justify-start border border-neutral-800 rounded-lg items-center gap-x-4">
              <IoCalendarClear className="text-gray-400 border-r border-neutral-800 pr-2 w-fit" />
              <select className="rounded w-full lg:w-[8rem] xl:w-[10rem] cursor-pointer appearance-none text-white bg-inherit">
                <option>Build Year</option>
                <option>Before 2000</option>
                <option>2000 - 2010</option>
                <option>After 2010</option>
              </select>
              <div className="absolute top-2 right-2 pointer-events-none">
                <RiArrowDropDownLine size={30} className=" text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;
