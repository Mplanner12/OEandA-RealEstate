/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      id="#hero"
      className="lg:w-full bg-black text-white md:p-5 xl:px-2 p-4 md:pr-0 flex flex-col md:flex-row-reverse items-center sm:items-start justify-between"
    >
      {/* <!-- Image --> */}
      <div className="bg-zinc-900 w-full h-full lg:flex lg:flex-col hidden justify-center">
        <div className="bg-[url('/gradientbg.png')] bg-cover hidden lg:flex w-full h-full justify-center">
          <img
            src="/building.png"
            alt="Building Image"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="hidden lg:flex w-full md:w-fit h-full z-20 relative lg:top-[-34rem] xl:top-[-38rem] 2xl:top-[-46rem] left-[-3.5rem]">
          <Image
            width={200}
            height={100}
            src="/circleContainer.png"
            alt="Circle Container"
            className="w-[7rem] h-fit object-cover object-center"
          />
        </div>
      </div>
      <div className="w-full h-full flex-col lg:hidden justify-center">
        <div className="bg-[url('/gradientbg.png')] w-full h-full">
          <Image
            width={300}
            height={300}
            src="/buildingsm.png"
            alt="Building Image"
            className="bg-zinc-900 w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full h-full z-20 relative top-[-3.25rem] left-[0rem]">
          <Image
            width={100}
            height={100}
            src="/circleContainer.png"
            alt="Circle Container"
            className="w-[7.5rem] h-fit object-cover object-center"
          />
        </div>
      </div>
      {/* <!-- Text Content --> */}
      <div className="w-full h-full flex-col md:px-[3rem] lg:px-[4.5rem] xl:px-[6rem] md:pt-[11rem] justify-center items-center mt-[-1rem] lg:mt-0">
        <div className="flex flex-col mb-6 mt-[-0.35rem] md:mt-0 w-full">
          <h1 className="md:text-[2.5rem] leading-[2.85rem] text-3xl font-bold mb-4 md:mb-3 w-[20rem] md:w-[30rem]">
            WELCOME TO <br /> ORA EGBUNIKE & ASSOCIATES
          </h1>
          <p className="md:text-base text-[0.9rem] mb-6 md:mt-[1.25rem] md:mb-[1.75rem] text-neutral-400 md:w-[30rem]">
            One of the top real estate companies in Nigeria positioned to
            deliver a cutting-edge and competitive real estate solution to our
            valued clients.
          </p>
          <div className="flex md:flex-row w-full md:w-fit md:gap-x-[0.5rem] h-full flex-col mb-[1.85rem] gap-y-[0.75rem]">
            <button className="md:w-fit bg-zinc-900 shadow-md text-white py-4 px-6 rounded-md w-full md:px-[1.7rem] md:py-[0.75rem] ">
              Learn More
            </button>
            <button className="md:w-fit bg-red-700 text-white shadow-md py-4 px-6 md:px-[1.7rem] md:py-[0.75rem] rounded-md w-full">
              Browse Properties
            </button>
          </div>
        </div>
        {/* <!-- Statistics Content --> */}
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 gap-x-0 text-center w-full justify-between md:justify-start">
          <div className="w-full md:w-fit h-full flex justify-between gap-[0.5rem] md:gap-y-0">
            <div className="w-full md:w-fit shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700">
              <p className="text-2xl text-center md:text-start sm:text-xl font-bold">
                200+
              </p>
              <p className="md:text-sm w-full text-center md:text-start font-light text-sm text-neutral-400">
                Happy Customers
              </p>
            </div>
            <div className="w-full md:w-fit shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700">
              <p className="text-2xl text-center md:text-start sm:text-xl font-bold">
                10k+
              </p>
              <p className="md:text-sm w-full text-center md:text-start font-light text-sm text-neutral-400">
                Properties For Clients
              </p>
            </div>
          </div>
          <div className="w-full md:w-fit shadow-md bg-zinc-900 p-[1.75rem] rounded-lg border-[0.25px] border-neutral-700">
            <p className="text-2xl text-center md:text-start sm:text-xl font-bold">
              16+
            </p>
            <p className="md:text-sm w-full text-center md:text-start font-light text-sm text-neutral-400">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
