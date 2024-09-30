"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const MissionVisionSection: React.FC = () => {
  const [isMissionActive, setIsMissionActive] = useState(true);

  return (
    <section className="bg-white py-16 md:px-[4rem] md:block">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-x-[5rem]">
        {/* Image Section */}
        <div className="relative bg-stone-300 rounded-lg mb-12 md:mb-0 md:w-1/2">
          <img
            src="/HouseAbout.png"
            alt="House"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          {/* Tabs for Mission & Vision */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-6 py-2 rounded-lg font-semibold ${
                isMissionActive
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setIsMissionActive(true)}
            >
              Mission
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-semibold ${
                !isMissionActive
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => setIsMissionActive(false)}
            >
              Vision
            </button>
          </div>

          {/* Mission or Vision Content */}
          {isMissionActive ? (
            <div className="z-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-[4rem] lg:mb-4 h-[4rem]">
                Our Misson
              </h2>
              <p className="text-gray-600 text-lg h-[10rem]">
                To deliver premium value using our strategic capabilities and
                global best practices to meet the changing needs of our clients,
                our people and other key stakeholders.
              </p>
            </div>
          ) : (
            <div className="z-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 h-[3rem]">
                Our Vision
              </h2>
              <p className="text-gray-600 text-lg h-[10rem]">
                To be the preferred global provider of Real Estate and
                Facilities Management Solutions.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
