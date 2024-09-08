/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProfessionalAffiliations: React.FC = () => {
  return (
    <section className="professional-affiliations">
      <div className="container mx-auto flex flex-col md:flex-row md:gap-x-[5rem] items-center md:px-[2.5rem] md:justify-between py-12">
        {/* Image and Overlay Text */}
        <div className="relative px-[2rem] md:px-0 md:w-1/2">
          <img
            src="/blackbox.png"
            alt="Ora Egbunike & Associates"
            className="block md:hidden w-full"
          />
          <img
            src="/blackbox.png"
            alt="Ora Egbunike & Associates"
            className="hidden md:block w-full"
          />
          <div
            id="blackbox"
            className="absolute w-[19rem] lg:h-[21rem] 2xl:h-[23rem] md:w-[22rem] sm:top-[9rem] sm:left-[7rem] bg-gradient-to-br from-neutral-600 to-black bg-opacity-60 text-white px-[1.5rem] py-[1.25rem] md:pt-[6rem] md:pb-[3rem] rounded"
          >
            <h3 className="text-lg font-bold">Ora Egbunike & Associates</h3>
            <p className="text-sm text-neutral-200 font-light pt-[0.5rem]">
              More than 20 years of experience in the field of architecture and
              has worked on projects up to 100+.
            </p>
          </div>
        </div>
        {/* Text Content */}
        <div className="mt-8 md:mt-0 md:w-1/2 md:pl-12 p-[1.5rem]">
          <h4 className="text-sm text-red-600 font-bold uppercase">
            Professional Affiliations
          </h4>
          <Link
            href={"/AboutUs"}
            className="text-[2.25rem] md:text-[2.5rem] font-bold mt-4"
          >
            Meet our Professionals
          </Link>
          <p className="text-gray-800 mt-4">
            All our teams are professional and competent in their fields and
            will help you realize your dream building with excellent results.
          </p>
          <div className="mt-8 gap-x-[1.85rem] flex justify-start items-center">
            <button className="bg-red-600 text-white py-3 px-6 rounded-lg mr-4">
              See the team
            </button>
            <button className="text-gray-800 font-bold">How it works</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAffiliations;
