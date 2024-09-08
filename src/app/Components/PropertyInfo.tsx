import React from "react";
import { BsTextarea } from "react-icons/bs";
import { FaBath } from "react-icons/fa6";
import { HiMiniBolt } from "react-icons/hi2";
import { IoBedSharp } from "react-icons/io5";

interface Property {
  id: number;
  title: string;
  slug: string;
  location: string;
  description: string;
  price: string;
  imageUrl: string;
}

const PropertyInfo: React.FC<{ property: Property | undefined }> = ({
  property,
}) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-between mt-8 items-start lg:gap-x-8">
      <div className="w-full h-full lg:w-2/4 border border-neutral-900 rounded-lg p-4 lg:p-[2rem]">
        <h2 className="text-xl font-normal lg:text-start lg:w-full">
          Description
        </h2>
        <p className="text-sm font-light text-neutral-400 mt-3 lg:text-start lg:w-[30rem]">
          Discover your own piece of paradise with the Seaside Serenity Villa. T
          With an open floor plan, breathtaking ocean views from every room, and
          direct access to a pristine sandy beach, this property is the epitome
          of coastal living.
        </p>
        <div className="w-full h-full flex justify-start items-center gap-x-4 mt-6 pt-4 border-t border-neutral-900">
          <div className="w-full h-full flex flex-col justify-start items-center gap-y-2">
            <div className="w-full h-full gap-x-2 flex justify-start items-center">
              <IoBedSharp size={24} />
              <p className="text-sm font-light text-neutral-400">Bedrooms</p>
            </div>
            <p className="text-lg font-semibold w-full h-full flex justify-start items-center">
              04
            </p>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-center gap-y-2 pl-[0.5rem] border-l border-neutral-900">
            <div className="w-full h-full gap-x-2 flex justify-start items-center">
              <FaBath size={24} />
              <p className="text-sm font-light text-neutral-400">Bathrooms</p>
            </div>
            <p className="text-lg font-semibold w-full h-full flex justify-start items-center">
              03
            </p>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-center gap-y-2 pl-[0.5rem] border-l border-neutral-900">
            <div className="w-full h-full gap-x-2 flex justify-start items-center">
              <BsTextarea size={24} />
              <p className="text-sm font-light text-neutral-400">Area</p>
            </div>
            <p className="text-lg font-semibold w-full h-full flex justify-start items-center">
              2,500 Square Feet
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full lg:w-2/4 border border-neutral-900 rounded-lg p-4 lg:p-[2rem]">
        <h2 className="text-xl font-normal">Key Features and Amenities</h2>
        <ul className="mt-[2rem] w-full h-full flex flex-col justify-start items-start gap-y-2">
          <li className="w-full text-sm lg:text-base font-light text-neutral-400 flex justify-start items-center gap-x-4 p-[1.5rem] py-[1rem] rounded-md border shadow-md border-neutral-950 bg-gradient-to-r from-neutral-900 to-neutral-950 border-l-red-800">
            <HiMiniBolt />
            Expansive oceanfront terrace for outdoor entertaining
          </li>
          <li className="w-full text-sm lg:text-base font-light text-neutral-400 flex justify-start items-center gap-x-4 p-[1.5rem] py-[1rem] rounded-md border shadow-md border-neutral-950 bg-gradient-to-r from-neutral-900 to-neutral-950 border-l-red-800">
            <HiMiniBolt />
            Master suite with a spa-inspired bathroom and ocean-facing balcony{" "}
          </li>
          <li className="w-full text-sm lg:text-base font-light text-neutral-400 flex justify-start items-center gap-x-4 p-[1.5rem] py-[1rem] rounded-md border shadow-md border-neutral-950 bg-gradient-to-r from-neutral-900 to-neutral-950 border-l-red-800">
            <HiMiniBolt />
            Private garage and ample storage space{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PropertyInfo;
