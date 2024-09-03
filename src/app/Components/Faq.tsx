"use client";
import React, { useState } from "react";

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
    answer: "ORA EGBUNIKE & ASSOCIATES is located in [Insert Location Here].",
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
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section py-12 px-[1.25rem] bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start md:gap-x-[4rem] justify-start">
        <div className="w-full h-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start justify-start">
          <h2 className="w-full text-[2.5rem] text-start font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="w-full md:w-[18.5rem] flex justify-start text-gray-500 text-start mb-10">
            If there are questions you want to ask, we will answer all your
            questions.
          </p>
        </div>
        <div className="space-y-4">
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
                <div className="w-full md:w-[45rem] p-4 text-gray-600">
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
