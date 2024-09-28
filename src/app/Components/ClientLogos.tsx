import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface Logo {
  name: string;
  image: string; // URL to the logo image
}

const ClientLogos = () => {
  const logos: Logo[] = [
    { name: "Airtel", image: "/logos/airtel.png" },
    { name: "Huawei", image: "/logos/huawei.png" },
    { name: "UNDP", image: "/logos/undp.png" },
    { name: "FH360", image: "/logos/fh360.png" },
    { name: "Total", image: "/logos/total.png" },
    { name: "AMCON", image: "/logos/amcon.png" },
    { name: "NNPC", image: "/logos/nnpc.png" },
    { name: "CBN", image: "/logos/cbn.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const previous = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + logos.length) % logos.length
    );
  };

  return (
    <div className="w-full text-black p-6 lg:px-[5rem] py-[3.5rem] flex flex-col justify-start items-start mb-[2rem]">
      <p className="w-full uppercase md:hidden text-red-600 text-[1rem] text-start font-bold">
        Valued Customers
      </p>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <div className="w-full">
            <h1 className="font-semibold text-[2.35rem] mb-4">
              Our Experience
            </h1>
            <div className="text-[0.9rem] font-light mb-4 w-[58%]">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose ORA EGBUNIKE & ASSOCIATES
              for their real estate needs.
            </div>
          </div>
          <button className="mt-4 py-4 px-4 w-[12rem] hidden lg:block bg-red-700 hover:bg-red-400 rounded-lg text-white font-bold">
            View Portfolio
          </button>
        </div>
        <div className="flex justify-between items-center mt-[3rem]">
          <div className="w-full h-full hidden md:grid md:grid-cols-4 md:grid-rows-[repeat(2, min-content)] gap-4">
            {logos.map((logo, index) => {
              const displayIndex = (index + currentIndex) % logos.length; // Calculate wrapped index
              return (
                <div
                  key={logo.name}
                  className="p-4 shadow-md rounded-lg bg-white"
                >
                  <img
                    src={logos[displayIndex].image}
                    alt={logos[displayIndex].name}
                    className="h-12 mx-auto"
                  />
                </div>
              );
            })}
          </div>
          <div className="w-full h-full grid grid-cols-2 md:hidden gap-4">
            {logos.slice(currentIndex, currentIndex + 4).map((logo) => (
              <div
                key={logo.name}
                className="p-4 shadow-md rounded-lg bg-white"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-12 mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full gap-x-[0.95rem] mt-[2rem] h-full flex justify-end items-center">
        <button
          onClick={previous}
          className="bg-gray-50 border hover:bg-gray-700 p-3 rounded-full focus:bg-black active:bg-black"
        >
          <FaArrowLeft className="text-black hover:text-white active:text-white focus:text-white" />
        </button>
        <button
          onClick={next}
          className="bg-gray-50 border hover:bg-gray-700 p-3 rounded-full focus:bg-black active:bg-black"
        >
          <FaArrowRight className="text-black hover:text-white active:text-white focus:text-white" />
        </button>
      </div>
    </div>
  );
};

export default ClientLogos;
