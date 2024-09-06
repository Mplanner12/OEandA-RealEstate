"use client";
import React, { useState } from "react";
import OfficeCard from "./OfficeCard";

const offices = [
  {
    type: "main",
    title: "Main Headquarters",
    address: "123 ORA EGBUNIKE & ASSOCIATES Plaza, City Center, Lagos",
    description:
      "Our main headquarters serve as the heart of ORA EGBUNIKE & ASSOCIATES. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    email: "info@OE&A.com",
    phone: "+1 (123) 456-7890",
    location: "Lagos",
    button: "Get Direction",
  },
  {
    type: "regional",
    title: "Regional Offices",
    address: "Urban Avenue, Downtown District, Abuja",
    description:
      "ORA EGBUNIKE & ASSOCIATES presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    email: "info@OE&A.com",
    phone: "+1 (123) 628-7890",
    location: "Abuja",
    button: "Get Direction",
  },
];

const Discover = () => {
  const [filter, setFilter] = useState("all");

  const filteredOffices = offices.filter((office) =>
    filter === "all" ? true : office.type === filter
  );

  return (
    <div className="bg-neutral-950 text-white py-10 px-5 lg:py-[5.5rem] lg:px-[4rem]">
      <div className="w-full md:px-[2rem] mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-start">
          Discover Our Office Locations
        </h1>
        <p className="text-lg mb-8 text-start lg:w-[65rem]">
          Estarein is here to serve you across multiple locations. Whether
          you&rsquo;re looking to meet our team, discuss real estate
          opportunities, or simply drop by for a chat, we have offices
          conveniently located to serve your needs.
        </p>

        {/* Filters */}
        <div className="w-full lg:w-fit flex justify-start items-center gap-4 mb-12 p-[0.85rem] bg-neutral-900 rounded-lg">
          <button
            onClick={() => setFilter("all")}
            className={`py-3 w-full lg:w-[9rem] font-light border border-neutral-800 shadow-sm px-2 lg:px-7 rounded-md ${
              filter === "all" ? "bg-neutral-950" : "bg-neutral-900"
            } hover:bg-zinc-900`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("regional")}
            className={`py-3 w-full lg:w-[9rem] font-light border border-neutral-800 shadow-sm px-2 lg:px-7 rounded-md ${
              filter === "regional" ? "bg-zinc-900" : "bg-neutral-900"
            } hover:bg-gray-600`}
          >
            Regional
          </button>
          <button
            onClick={() => setFilter("international")}
            className={`py-3 w-full lg:w-[9rem] font-light border border-neutral-800 shadow-sm px-2 lg:px-7 rounded-md ${
              filter === "international" ? "bg-zinc-900" : "bg-neutral-900"
            } hover:bg-gray-600`}
          >
            International
          </button>
        </div>

        {/* Office Cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-4">
          {filteredOffices.map((office, index) => (
            <OfficeCard key={index} office={office} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
