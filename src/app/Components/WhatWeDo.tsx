/* eslint-disable @next/next/no-img-element */
import React from "react";

const WhatWeDo = () => {
  const services = [
    {
      title: "Valuation",
      details: [
        "Impairment Testing under IAS 36",
        "Property Investment Valuations",
        "Asset Valuations under IFRS",
      ],
    },
    {
      title: "Facilities Management",
      details: [
        "We are leading providers of integrated facilities management services, delivering real value across sectors nationwide.",
      ],
    },
    {
      title: "Real Estate Management",
      details: [
        "Our property management consultancy entails, procuring leases and management of the leased apartments",
      ],
    },
    {
      title: "Feasibility Studies of Capital Projects/ Development",
      details: [
        "We understand current planning policy and regulations requirements and through detailed and viability appraisals.",
      ],
    },
    {
      title: "Development Appraisal",
      details: [
        "We draw from our immense bank of experience and market knowledge to advise developers on what we know will work best.",
      ],
    },
    {
      title: "Asset Recovery/ Receiver Manager",
      details: [
        "We value and structure the best settlements recovery outcomes",
      ],
    },
    {
      title: "Project Management",
      details: [
        "Our firm can help at every stage, by supporting your investment, acquisition and development decisions.",
      ],
    },
  ];
  return (
    <div className="bg-white w-full h-full flex flex-col md:px-[2.5rem] justify-center items-center pb-[3.5rem] md:pb-[5rem] pt-[1rem] px-[2rem] gap-y-[1.75rem]">
      <div className="w-full h-full px-[0.15rem] mt-[1.25rem] flex flex-col justify-start items-center">
        <p className="w-full uppercase text-red-600 text-[1rem] text-start font-bold">
          130+ beautiful apartments
        </p>
        <h1 className="w-full h-full text-[3rem] text-black font-bold mt-[1.2rem]">
          What we Do
        </h1>
      </div>
      <div className="bg-white text-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 shadow-lg rounded-xl hover:bg-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white"
              >
                <div className="text-[2.25rem] mb-6 font-light">
                  0{index + 1}
                </div>
                <div className="font-bold">{service.title}</div>
                <ul className="list-disc pl-0">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="mb-1 list-none">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
