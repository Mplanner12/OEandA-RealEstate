"use client";
import React from "react";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";

const AfricanFuture: React.FC = () => {
  return (
    <section className="bg-zinc-50 py-[4.75rem] w-full h-full flex flex-col justify-start items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
        className="w-full h-full flex flex-col justify-start items-center"
      >
        {" "}
        <h1 className="text-[2.75rem] font-bold text-neutral-900 lg:w-[33rem] text-center">
          Welcome to the Future of Trade in Africa
        </h1>
        <p className="text-base mt-4 text-zinc-500 lg:w-[44rem] text-center">
          Designed to be the epicenter of trade, business, and economic
          collaboration in Africa, AATC offers state-of-the-art facilities and
          services that cater to the needs of businesses of all sizes.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        viewport={{ once: true }} // Only animate once when in view
        className="w-full h-full gap-x-[3.5rem] px-[3.75rem] mb-[4rem] mt-[5.85rem] flex justify-center items-center"
      >
        <div className="w-2/4 h-full flex flex-col justify-center items-center">
          <p className="w-full h-full flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p>
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] text-zinc-900 text-[2.35rem] font-bold">
            Grade A Office Spaces
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Flexible leasing options available for long-term and short-term
              rentals
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Modern, spacious, and fully equipped with cutting-edge technology
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Ideal for businesses looking to establish a prestigious presence
              in Abuja
            </p>
          </div>
        </div>
        <div className="w-[40%] h-full flex justify-end items-center">
          <video
            src="video1.mp4"
            controls
            muted
            autoPlay
            className="w-full h-full"
          ></video>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-full gap-x-[9.5rem] px-[3.75rem] pl-[2rem] mb-[4rem] flex justify-center items-center mt-10"
      >
        <div className="w-[40%] h-full flex justify-center items-center">
          <video
            src="video2.mp4"
            controls
            muted
            autoPlay
            className="w-full h-full"
          ></video>
        </div>
        <div className="w-[38%] h-full pl-[2.25rem] flex justify-end flex-col items-center">
          <p className="w-full h-full flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p>
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] text-zinc-900 text-[2.35rem] font-bold">
            4-Star Hotel{" "}
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400]">
              148-key hotel offering luxurious accommodations
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400]">
              Business services, fine dining, and relaxation amenities{" "}
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400]">
              Perfect for hosting international clients and business travelers
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-full gap-x-[3.5rem] px-[3.75rem] mb-[4rem] flex justify-center items-center mt-10"
      >
        <div className="w-2/4 h-full flex flex-col justify-center items-start">
          <p className="w-full h-full flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p>
          <h1 className="w-full h-full my-[1rem] flex justify-start items-center text-start lg:w-[22rem] mb-[1.75rem] text-zinc-900 text-[2.35rem] font-bold">
            Conference & Exhibition Centre{" "}
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400]">
              State-of-the-art facilities for conferences, exhibitions, and
              events
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Fully equipped with the latest audio-visual technology{" "}
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Designed to host large-scale events with ease
            </p>
          </div>
        </div>
        <div className="w-[40%] h-full flex justify-center items-center">
          <video
            src="video3.mp4"
            controls
            muted
            autoPlay
            className="w-full h-full"
          ></video>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full h-full gap-x-[9.5rem] px-[3.75rem] pl-[2rem] mb-[4rem] flex justify-center items-center mt-10"
      >
        <div className="w-[40%] h-full flex justify-start items-center">
          <video
            src="video4.mp4"
            controls
            muted
            autoPlay
            className="w-full h-full"
          ></video>
        </div>
        <div className="w-[38%] pl-[2.25rem] h-full flex flex-col justify-center items-center">
          <p className="w-full h-full flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p>
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] text-zinc-900 text-[2.35rem] font-bold">
            Trade Facilitation Services{" "}
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              A one-stop shop for partnerships, trade information support, and
              business services
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              SME Incubation Hub and technology services to drive business
              growth{" "}
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Dedicated spaces for networking and collaboration, focused on
              boosting intra-African trade
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AfricanFuture;
