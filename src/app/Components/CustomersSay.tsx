"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { TiStarFullOutline } from "react-icons/ti";

const CustomersSay: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const testimonials = [
    {
      id: 1,
      rating: 5,
      title: "Exceptional Service!",
      text: "Our experience with ORA EGBUNIKE & ASSOCIATES was outstanding. Their team's dedication and professionalism made finding our dream home a breeze.",
      name: "Ayotilewa",
      location: "Lagos, Nigeria",
      image: "/Profile1.png", // Replace with the correct path
    },
    {
      id: 2,
      rating: 5,
      title: "Efficient and Reliable",
      text: "ORA EGBUNIKE & ASSOCIATES provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      name: "Ayotilewa",
      location: "Lagos, Nigeria",
      image: "/Profile2.png", // Replace with the correct path
    },
    {
      id: 3,
      rating: 5,
      title: "Trusted Advisors",
      text: "The ORA EGBUNIKE & ASSOCIATES team guided us through the entire buying process. Their knowledge of our needs was impressive. Thank you for your support!",
      name: "Ayotilewa",
      location: "Lagos, Nigeria",
      image: "/Profile3.png", // Replace with the correct path
    },
    {
      id: 4,
      rating: 5,
      title: "Highly Recommended",
      text: "We highly recommend ORA EGBUNIKE & ASSOCIATES. They are a true asset to the real estate industry. Their professionalism and expertise are unmatched.",
      name: "Ayotilewa",
      location: "Lagos, Nigeria",
      image: "/Profile3.png", // Replace with the correct path
    },
  ];
  return (
    <div className="w-full h-full flex flex-col justify-start items-center md:px-[2rem] mb-[6rem]">
      <div className="mt-0 md:mt-0 md:w-full md:pl-12 p-[1.5rem] flex flex-col justify-start items-start">
        <img
          className="hidden md:inline my-[1.5rem]"
          src="/AbstractDesign.png"
          alt=""
        />
        <div className="w-full flex justify-between items-center">
          <div className="w-full h-full">
            <h4 className="text-sm text-red-600 font-bold uppercase">
              Valued Customers
            </h4>
            <h2 className="text-[2.25rem] md:text-[2.5rem] font-bold mt-3 md:mt-2">
              What our Customers Say
            </h2>
            <p className="text-neutral-400 mt-4">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose ORA EGBUNIKE & ASSOCIATES
              for their real estate needs.
            </p>
          </div>
          <button className="hidden w-[19rem] relative top-[3rem] md:block bg-red-600 text-white py-3 px-4 rounded-lg mr-4">
            View all Testemonials
          </button>
        </div>
      </div>
      <div className="mt-12 relative w-full overflow-hidden">
        <div
          className="md:w-full flex items-center justify-start transition-transform duration-500 ease-in-out basis-[100%] md:basis-[40%] lg:basis-[80%] gap-x-[3.5rem] md:gap-x-[1.5rem] px-[3.5rem]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 p-6 px-[2rem] md:p-8 rounded-lg shadow-md w-full 
              "
            >
              <div className="flex items-center mb-8">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 rounded-full p-[0.25rem] pb-[0.3rem] border border-stone-300 mr-3 flex justify-center items-center"
                  >
                    <TiStarFullOutline className="w-6 h-6 text-yellow-500" />
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-semibold">{testimonial.title}</h3>
              <p className="text-gray-500 mt-2 h-[8rem] w-[15rem] md:w-[21rem] overflow-hidden">
                {testimonial.text}
              </p>
              <div className="mt-4 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-6 w-full pt-[1rem] border-t border-zinc-300 flex justify-center md:justify-between items-center mx-[2rem] md:px-[2rem]">
        <button
          onClick={prevSlide}
          className="p-2 bg-white hover:bg-black active:bg-black border border-gray-400 rounded-full"
        >
          <IoArrowBackOutline className="w-6 h-6 text-gray-500 hover:text-white active:text-white" />
        </button>
        <p className="text-gray-500 px-[1.25rem] md:pl-[1rem]">of 10</p>
        <div className="flex gap-x-4">
          <button
            onClick={nextSlide}
            className="p-2 bg-white hover:bg-black active:bg-black border border-gray-400 rounded-full"
          >
            <IoArrowForwardOutline className="w-6 h-6 text-gray- hover:text-white active:text-white500" />
          </button>
        </div>
      </div>
      <div className="hidden mt-6 w-full pt-[1rem] border-t border-zinc-300 md:flex justify-center md:justify-between items-center mx-[2rem] md:px-[2rem]">
        <p className="text-gray-500 pl-[1.85rem] md:pl-[1rem]">of 10</p>
        <div className="flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-white hover:bg-black active:bg-black border border-gray-400 rounded-full"
          >
            <IoArrowBackOutline className="w-6 h-6 text-gray-500 hover:text-white active:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white hover:bg-black active:bg-black border border-gray-400 rounded-full"
          >
            <IoArrowForwardOutline className="w-6 h-6 text-gray- hover:text-white active:text-white500" />
          </button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CustomersSay;
