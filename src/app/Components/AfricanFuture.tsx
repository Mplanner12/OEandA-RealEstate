"use client";
import React from "react";
import { TiTick } from "react-icons/ti";
import { motion } from "framer-motion";

const AfricanFuture: React.FC = () => {
  return (
    <section
      id="Features"
      className="bg-zinc-50 py-[4.75rem] w-full h-full flex flex-col justify-start items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
        className="w-full h-full flex flex-col px-[0.85rem] lg:px-0 justify-start items-center"
      >
        {" "}
        <h1 className="lg:text-[2.75rem] text-[1.75rem] px-[0.5rem] lg:px-0 font-bold text-neutral-900 lg:w-[33rem] text-center">
          Iconic Abuja-AATC Building
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
        className="w-full h-full lg:gap-x-[3.5rem] px-[1rem] lg:px-[3.75rem] mb-[1rem] lg:mb-[4rem] mt-[5.85rem] flex flex-col-reverse lg:flex-row justify-center items-center"
      >
        <div className="w-full lg:w-2/4 h-full flex flex-col justify-center items-center my-[2rem] lg:my-0">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] font-bold">
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
        <div className="w-full lg:w-[40%] h-[27rem] flex justify-end items-center">
          <img src="GradeA.jpeg" className="w-full h-full" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-full lg:gap-x-[9.5rem] lg:px-[3.75rem] px-[1rem] lg:pl-[2rem] mb-[4rem] flex flex-col lg:flex-row justify-center items-center mt-10"
      >
        <div className="w-full lg:w-[40%] mb-[2.5rem] lg:mb-0 h-full flex justify-center items-center">
          <img src="span2.png" className="w-full h-full" />
        </div>
        <div className="w-full lg:w-[38%] h-full lg:pl-[2.25rem] flex justify-end flex-col items-center">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] font-bold">
            4-Star Hotel
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
        className="w-full h-full lg:gap-x-[3.5rem] lg:px-[3.75rem] px-[1rem] mb-[1rem] lg:mb-[4rem flex flex-col-reverse lg:flex-row justify-center items-center mt-10"
      >
        <div className="w-full lg:w-2/4 h-full flex flex-col justify-center items-start">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] flex justify-start items-center text-start lg:w-[22rem] mb-[1.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] font-bold">
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
        <div className="w-full lg:w-[40%] mb-[2rem] lg:mb-0 h-full flex justify-center items-center">
          <img src="span3.png" className="w-full h-full" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full h-full lg:gap-x-[9.5rem] px-[1rem] lg:px-[3.75rem] lg:pl-[2rem] mb-[4rem] flex flex-col mt-[5.5rem] lg:flex-row justify-center items-center lg:mt-10"
      >
        <div className="w-full lg:w-[40%] h-full flex justify-start items-center">
          <img src="span4.png" className="w-full h-full" />
        </div>
        <div className="w-full lg:w-[38%] lg:pl-[2.25rem] mt-[2rem] lg:mt-0 h-full flex flex-col justify-center items-start">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] lg:ml-[0.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] lg:w-[22rem] font-bold">
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
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        viewport={{ once: true }} // Only animate once when in view
        className="w-full h-full lg:gap-x-[3.5rem] px-[1rem] lg:px-[3.75rem] mb-[1rem] lg:mb-[4rem] mt-[5.85rem] flex flex-col-reverse lg:flex-row justify-center items-center"
      >
        <div className="w-full lg:w-2/4 h-full flex flex-col justify-center items-center my-[2rem] lg:my-0">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] font-bold">
            Meeting Board Room
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Spacious meeting room with flexible layout options for various
              business needs
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Equipped with state-of-the-art technology for presentations and
              video conferencing
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Ideal for teams looking to collaborate in a professional and
              modern environment
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-full flex justify-end items-center">
          <img src="span1.png" className="w-full h-full" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-full lg:gap-x-[9.5rem] lg:px-[3.75rem] px-[1rem] lg:pl-[2rem] mb-[4rem] flex flex-col lg:flex-row justify-center items-center mt-10"
      >
        <div className="w-full lg:w-[40%] mb-[2.5rem] lg:mb-0 h-[26rem] flex justify-center items-center">
          <img src="Resturant.jpeg" className="w-full h-full" />
        </div>
        <div className="w-full lg:w-[38%] h-full lg:pl-[2.25rem] flex justify-end flex-col items-center">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] font-bold">
            Restaurant
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Diverse menu featuring both local and international cuisines
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Elegant, comfortable dining space with seating for groups and
              intimate gatherings
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Exceptional service with a focus on creating memorable dining
              experiences
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-full lg:gap-x-[3.5rem] lg:px-[3.75rem] px-[1rem] mb-[1rem] lg:mb-[4rem flex flex-col-reverse lg:flex-row justify-center items-center mt-10"
      >
        <div className="w-full lg:w-2/4 h-full flex flex-col justify-center items-start">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] flex justify-start items-center text-start lg:w-[22rem] mb-[1.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] font-bold">
            Retail Services
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Wide selection of high-quality products tailored to meet diverse
              customer needs
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Friendly, knowledgeable staff dedicated to delivering exceptional
              customer service
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Convenient location with ample space, perfect for a pleasant
              shopping experience
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[40%] mb-[2rem] lg:mb-0 h-[26rem] flex justify-center items-center">
          <img src="Reception4.jpeg" className="w-full h-full" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full h-full lg:gap-x-[9.5rem] px-[1rem] lg:px-[3.75rem] lg:pl-[2rem] mb-[4rem] flex flex-col mt-[5.5rem] lg:flex-row justify-center items-center lg:mt-10"
      >
        <div className="w-full lg:w-[40%] h-[26rem] flex justify-start items-center">
          <img src="span4.png" className="w-full h-full" />
        </div>
        <div className="w-full lg:w-[38%] lg:pl-[2.25rem] mt-[2rem] lg:mt-0 h-full flex flex-col justify-center items-start">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] lg:ml-[0.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] lg:w-[22rem] font-bold">
            ATM Centers
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              24/7 access for convenient cash withdrawals, deposits, and balance
              inquiries
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Enhanced security features for safe and secure transactions
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Multiple ATM locations across the city for easy accessibility
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        viewport={{ once: true }} // Only animate once when in view
        className="w-full h-full lg:gap-x-[3.5rem] px-[1rem] lg:px-[3.75rem] mb-[1rem] lg:mb-[4rem] mt-[5.85rem] flex flex-col-reverse lg:flex-row justify-center items-center"
      >
        <div className="w-full lg:w-2/4 h-full flex flex-col justify-center items-center my-[2rem] lg:my-0">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] font-bold">
            GYM
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              State-of-the-art equipment for cardio, strength training, and
              flexibility
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Certified trainers available for personalized workout guidance and
              support
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Spacious workout areas and dedicated zones for group classes and
              relaxation
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[40%] h-[26rem] flex justify-end items-center">
          <img src="Reception3.jpeg" className="w-full h-full" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-full lg:gap-x-[9.5rem] lg:px-[3.75rem] px-[1rem] lg:pl-[2rem] mb-[4rem] flex flex-col lg:flex-row justify-center items-center mt-10"
      >
        <div className="w-full lg:w-[40%] mb-[2.5rem] lg:mb-0 h-[26rem] flex justify-center items-center">
          <img src="Reception2.jpeg" className="w-full h-full" />
        </div>
        <div className="w-full lg:w-[38%] h-full lg:pl-[2.25rem] flex justify-end flex-col items-center">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] mb-[1.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] font-bold">
            Swimming Pool
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Crystal-clear, temperature-controlled pool for a comfortable swim
              experience
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Professional lifeguards on duty for enhanced safety and peace of
              mind
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Separate areas for lap swimming, leisure, and children’s play
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, delay: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-full lg:gap-x-[3.5rem] lg:px-[3.75rem] px-[1rem] mb-[1rem] lg:mb-[4rem flex flex-col-reverse lg:flex-row justify-center items-center mt-10"
      >
        <div className="w-full lg:w-2/4 h-full flex flex-col justify-center items-start">
          {/* <p className="w-full h-full hidden lg:flex justify-start items-start text-xs text-zinc-900">
            KEY FEATURE
          </p> */}
          <h1 className="w-full h-full my-[1rem] flex justify-start items-center text-start lg:w-[22rem] mb-[1.75rem] text-zinc-900 text-[1.75rem] lg:text-[2.35rem] font-bold">
            Business Center
          </h1>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Fully equipped workstations with high-speed internet and modern
              office tools
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              Private meeting rooms available for client meetings and
              presentations
            </p>
          </div>
          <div className="w-full h-full flex justify-start items-center mt-4">
            <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-teal-800 rounded-full">
              <TiTick className="text-white rounded-full" />
            </div>
            <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
              On-site support staff to assist with administrative tasks and
              technical needs
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[40%] mb-[2rem] lg:mb-0 h-[26rem] flex justify-center items-center">
          <img src="OpenSpace.jpeg" className="w-full h-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default AfricanFuture;
