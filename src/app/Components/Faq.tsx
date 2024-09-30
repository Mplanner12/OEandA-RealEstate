"use client";
import React, { useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is ORA EGBUNIKE & ASSOCIATES?",
    answer:
      "ORA EGBUNIKE & ASSOCIATES is a housing concept that consists of several houses in a gated cluster. We offer comfortable, secure, and affordable housing with various complete and modern facilities.",
  },
  {
    id: 2,
    question: "Where is the location of ORA EGBUNIKE & ASSOCIATES?",
    answer:
      "ORA EGBUNIKE & ASSOCIATES is located in No. 2 Wahab Dosumu Close, Iya Abubakar Crescent, Off Alex Ekwueme Way, Jabi, Abuja., FCT-Abuja, Nigeria",
  },
  {
    id: 3,
    question:
      "How much are the prices and types of houses in ORA EGBUNIKE & ASSOCIATES?",
    answer:
      "The prices and types of houses in ORA EGBUNIKE & ASSOCIATES vary depending on the specific property. Please contact us for detailed information.",
  },
  {
    id: 4,
    question: "What are the facilities provided in ORA EGBUNIKE & ASSOCIATES?",
    answer:
      "ORA EGBUNIKE & ASSOCIATES provides modern facilities including 24/7 security, recreational areas, swimming pools, and more.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<any>(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex: number) => (prevIndex + 1) % faqItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex: number) =>
      prevIndex === 0 ? faqItems.length - 1 : prevIndex - 1
    );
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-12 pt-[2.25rem] lg:pt-[4.5rem] lg:pb-[4rem] px-[1rem] bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start md:gap-x-[1.5rem] justify-start">
        <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start justify-start">
          <h2 className="w-full text-[2.5rem] md:text-[2.25rem] md:w-[35rem] text-start font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="w-full md:w-[18.5rem] flex justify-start text-gray-500 text-start mb-10">
            If there are questions you want to ask, we will answer all your
            questions.
          </p>
        </div>
        {/* Carousel for mobile */}
        <div className="md:hidden w-full h-full flex flex-col items-center justify-center">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`border rounded-lg transition-shadow py-[0.85rem] px-[1.25rem] duration-300 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              <div className="flex justify-between items-center w-full p-4 text-left">
                <span className="font-semibold text-[1.3rem]">
                  {item.question}
                </span>
              </div>
              <div className="w-full md:w-[45rem] p-4 text-gray-600">
                {item.answer}
              </div>
            </div>
          ))}
          <div className="md:hidden mt-6 mb-[1.25rem] w-full pt-[1rem] border-t border-zinc-500 flex justify-start md:justify-between items-center mx-[2rem] md:px-[2rem]">
            <div className="w-full md:hidden flex justify-start items-center">
              <button className="w-fit p-[1.25rem] text-sm bg-red-600 text-white rounded-lg">
                View All FAQ’s
              </button>
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <button
                onClick={prevSlide}
                className="p-2 bg-white hover:bg-black active:bg-black border border-gray-400 rounded-full"
              >
                <IoArrowBackOutline className="w-6 h-6 text-gray-500 hover:text-white active:text-white" />
              </button>
              <p className="text-gray-500 px-[0.25rem] md:pl-[1rem]">
                {activeIndex + 1} of {faqItems.length}
              </p>
              <div className="flex gap-x-2">
                <button
                  onClick={nextSlide}
                  className="p-2 bg-white hover:bg-black active:bg-black border border-gray-400 rounded-full"
                >
                  <IoArrowForwardOutline className="w-6 h-6 text-gray- hover:text-white active:text-white500" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ for larger screens */}
        <div className="hidden md:block space-y-4 w-full mt-[2.5rem] h-full">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`border rounded-lg transition-shadow py-[0.85rem] px-[1.25rem] duration-300 ${
                activeIndex === index ? "shadow-lg" : "shadow-sm"
              }`}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-[1.3rem]">
                  {item.question}
                </span>
                <span className="ml-4 text-xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="w-full md:w-[35rem] p-4 text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
