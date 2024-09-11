"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import AfricanFuture from "../Components/AfricanFuture";
import WhyChooseUs from "../Components/WhyChooseUs";
import Footer from "../Components/Footer";
import HeaderA from "../Components/HeaderA";
import FooterA from "../Components/FooterA";
import SocialAATC from "../Components/SocialAATC";
import { motion } from "framer-motion";

const page: React.FC = () => {
  const features = [
    {
      title: "Grade A Office Spaces",
      description:
        "Flexible leasing options available for long-term and short-term rentals.",
    },
    {
      title: "4-Star Hotel",
      description: "148-key hotel offering luxurious accommodations...",
    },
    // Add other features accordingly
  ];

  return (
    <div className="bg-white w-full h-full flex flex-col justify-start items-center lg:items-start text-white font-sans">
      <HeaderA />
      <div className="lg:w-full w-full bg-teal-700 lg:h-[35rem] text-white md:p-5 xl:px-2 p-4 md:pr-0 flex flex-col md:flex-row-reverse items-center justify-between">
        {/* <!-- Text Content --> */}
        <div className="w-full h-full flex-col md:px-[3rem] lg:px-[4.5rem] xl:px-[6rem] pt-[1.25rem] md:pt-[5rem] justify-center items-center mt-[-1rem] lg:mt-0 leading-[3rem]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }} // Adjust duration as needed
            className="flex-col mb-6 mt-[-0.35rem] h-full md:mt-0 w-full flex justify-center items-center"
          >
            <h1 className="uppercase md:text-[3rem] leading-[2.95rem] text-3xl font-bold mb-4 md:mb-3 w-[20rem] lg:w-[45rem] text-center">
              Abuja Afreximbank African Trade Centre{" "}
              <span className="text-yellow-400">(AATC)</span>
            </h1>
          </motion.div>
        </div>
      </div>
      <div className="z-20 mx-auto lg:mt-[-17rem] p-[1rem] rounded-b-lg border-3 border-teal-700 w-full lg:w-[89%] bg-teal-700">
        <video
          className="w-full h-full flex justify-center items-center"
          src="/Hvideo.mp4"
          controls
          muted
          autoPlay
        />
      </div>

      <section className="lg:p-[5rem] px-[1rem] lg:px-[5rem] mt-[2rem] w-full gap-x-[2rem] h-full flex flex-col lg:flex-row lg:justify-start justify-center items-center lg:items-start">
        <div className="lg:w-2/4 w-full h-full fles justify-center items-center">
          <img
            className="w-full h-full flex justify-center items-center"
            src="/AboutAATC.png"
            alt=""
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }} // Adjust as needed
          viewport={{ once: true }}
          className="lg:w-2/4 w-full h-full flex flex-col justify-start items-start"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl lg:text-[3rem] mt-[1rem] lg:mt-0 lg:leading-[2.85rem] w-full font-bold text-neutral-900"
          >
            Welcome to the Future of Trade in Africa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base mt-4 text-zinc-500 lg:pr-[2rem]"
          >
            The Abuja-Afreximbank African Trade Centre is a planned premium
            property development strategically located in the Centra lBusiness
            District of Abuja Federal Capita lTerritory, Nigeria. TheAbuja-AATC
            is the first self branded Afrexim bank African Trade Centre to be
            developed as part of the Afreximbank’s strategy to grow
            intra-African trade. This iconic property is a “One-stop-shop”
            providing unique range of trade services and amenities focused on:
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
            className="w-full h-full gap-y-[1.5rem] flex flex-col justify-start items-center mt-[2.85rem]"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="p-[1rem] py-[1rem] pt-0 lg:pt-[1.85rem] lg:py-[1.85rem] border border-neutral-200 rounded-lg w-full h-full flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start mb-[0.5rem] lg:mb-0"
            >
              <div className="w-fit lg:ml-[-2rem] top-[-1.35rem] lg:top-1 relative h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                i
              </div>
              <div className="w-full ml-[0.85rem] text-neutral-950">
                Bridging the gap in trade and market information in Africa,
                especially with regards to intra African trade between Nigeria
                and other African countries.
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="p-[1rem] py-[1rem] pt-0 lg:pt-[1.85rem] lg:py-[1.85rem] border border-neutral-200 rounded-lg w-full h-full flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start mb-[0.5rem] lg:mb-0"
            >
              <div className="w-fit lg:ml-[-2rem] top-[-1.35rem] lg:top-1 relative h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                ii
              </div>
              <p className="w-full ml-[0.85rem] text-neutral-950">
                Bridging the gap in trade and market information in Africa,
                especially with regards to intra African trade between Nigeria
                and other African countries.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="p-[1rem] py-[1rem] pt-0 lg:pt-[1.85rem] lg:py-[1.85rem] border border-neutral-200 rounded-lg w-full h-full flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start mb-[0.5rem] lg:mb-0"
            >
              <div className="w-fit lg:ml-[-2rem] top-[-1.35rem] lg:top-1 relative h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                iii
              </div>
              <p className="w-full ml-[0.85rem] text-neutral-950">
                Bridging the gap in trade and market information in Africa,
                especially with regards to intra African trade between Nigeria
                and other African countries.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="p-[1rem] py-[1rem] pt-0 lg:pt-[1.85rem] lg:py-[1.85rem] border border-neutral-200 rounded-lg w-full h-full flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start mb-[0.5rem] lg:mb-0"
            >
              <div className="w-fit lg:ml-[-2rem] top-[-1.35rem] lg:top-1 relative h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                iv
              </div>
              <p className="w-full ml-[0.85rem] text-neutral-950">
                Bridging the gap in trade and market information in Africa,
                especially with regards to intra African trade between Nigeria
                and other African countries.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <AfricanFuture />
      <WhyChooseUs />
      <FooterA />
      <SocialAATC />
    </div>
  );
};

export default page;
