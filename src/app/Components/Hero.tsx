/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-black text-white p-6 sm:p-4 flex flex-col md:flex-row-reverse items-center sm:items-start justify-between">
      {/* <!-- Image --> */}
      <div className="hidden lg:flex w-full h-full justify-center">
        <img
          src="/building.png"
          alt="Building Image"
          className="max-w-full h-full object-cover object-center"
        />
      </div>
      <div className="w-full h-full flex-col lg:hidden justify-center">
        <div className="w-full h-full">
          <Image
            width={300}
            height={300}
            src="/buildingsm.png"
            alt="Building Image"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full h-full z-20 relative top-[-2.75rem] left-[0.5rem]">
          <Image
            width={100}
            height={100}
            src="/circleContainer.png"
            alt="Circle Container"
            className="w-fit h-fit object-cover object-center"
          />
        </div>
      </div>
      {/* <!-- Text Content --> */}
      <div className="w-full h-full flex-col justify-center items-center mt-[-1rem] lg:mt-0">
        <div className="flex flex-col sm:mb-6 sm:w-full">
          <h1 className="text-4xl sm:text-3xl font-bold mb-4">
            WELCOME TO <br /> ORA EGBUNIKE & ASSOCIATES
          </h1>
          <p className="md:text-base text-[0.9rem] mb-6 text-neutral-400">
            One of the top real estate companies in Nigeria positioned to
            deliver a cutting-edge and competitive real estate solution to our
            valued clients.
          </p>
          <div className="flex md:flex-row w-full h-full flex-col mb-[1.85rem] gap-y-[0.75rem]">
            <button className="bg-zinc-900 shadow-md text-white py-2 px-4 rounded-lg w-full sm:mb-2">
              Learn More
            </button>
            <button className="bg-red-700 text-white shadow-md py-2 px-4 rounded-lg w-full">
              Browse Properties
            </button>
          </div>
        </div>
        {/* <!-- Statistics Content --> */}
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-6 gap-x-0 text-center w-full justify-between">
          <div className="w-full h-full flex justify-between gap-[0.5rem]">
            <div className="w-full shadow-md bg-zinc-900 p-[1rem] rounded-lg">
              <p className="text-2xl sm:text-xl font-bold">200+</p>
              <p className="md:text-base font-light text-sm text-neutral-400">
                Happy Customers
              </p>
            </div>
            <div className="w-full shadow-md bg-zinc-900 p-[1rem] rounded-lg">
              <p className="text-2xl sm:text-xl font-bold">10k+</p>
              <p className="md:text-base font-light text-sm text-neutral-400">
                Properties For Clients
              </p>
            </div>
          </div>
          <div className="w-full shadow-md bg-zinc-900 p-[1rem] rounded-lg">
            <p className="text-2xl sm:text-xl font-bold">16+</p>
            <p className="md:text-base font-light text-sm text-neutral-400">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
