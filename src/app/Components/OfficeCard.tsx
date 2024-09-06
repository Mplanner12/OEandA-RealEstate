import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

const OfficeCard = ({ office }: any) => {
  return (
    <div className="bg-neutral-950 border border-neutral-800 p-4 py-8 lg:p-12 lg:px-9 rounded-lg flex flex-col justify-start items-start shadow-md">
      <h3 className="text-sm text-white font-light text-start mb-3">
        {office.title}
      </h3>
      <p className="text-white text-2xl text-start mb-4">{office.address}</p>
      <p className="text-gray-400 mb-4 text-start text-[0.9rem]">
        {office.description}
      </p>
      <div className="flex flex-col md:flex-row items-start justify-start w-full md:px-[0.5rem] gap-2 mb-4">
        <Link
          href={`mailto:${office.email}`}
          className="text-white text-xs lg:text-sm flex justify-start items-center rounded-full border bg-neutral-900 hover:bg-neutral-800 border-neutral-800 p-[0.85rem]"
        >
          <div>
            <FaEnvelope className="mr-2 text-white" />
          </div>
          <div>{office.email}</div>
        </Link>
        <div className="w-full h-full flex justify-start items-center gap-2">
          <Link
            href={`tel:${office.phone}`}
            className="text-white text-xs lg:text-sm flex justify-start items-center rounded-full border bg-neutral-900  hover:bg-neutral-800 border-neutral-800 p-[0.85rem]"
          >
            <FaPhoneAlt className="mr-2 text-white" />
            {office.phone}
          </Link>
          <div className="text-white text-xs lg:text-sm flex justify-start items-center rounded-full border bg-neutral-900  hover:bg-neutral-800 border-neutral-800 p-[0.85rem]">
            <FaLocationDot className="mr-2 text-white" />
            {office.location}
          </div>
        </div>
      </div>
      <button className="bg-red-700 hover:bg-red-800 py-3 px-4 text-sm rounded-lg font-light w-full mt-4 text-white">
        {office.button}
      </button>
    </div>
  );
};

export default OfficeCard;
