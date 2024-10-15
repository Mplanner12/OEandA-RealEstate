"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import AfricanFuture from "../Components/AfricanFuture";
import WhyChooseUs from "../Components/WhyChooseUs";
import HeaderA from "../Components/HeaderA";
import FooterA from "../Components/FooterA";
import Gallery from "../Components/Gallery";
import ImageCarousel from "../Components/ImageCarousel";
import SocialAATC from "../Components/SocialAATC";
import { motion } from "framer-motion";
import OtherBenefits from "../Components/OtherBenefits";
import { TiTick } from "react-icons/ti";

const Page: React.FC = () => {
  const [title, setTitle] = useState("AATC");
  useEffect(() => {
    setTitle("AATC");
  }, [title]);

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
    <main>
      <head>
        <title>{title}</title>
      </head>
      <div className="bg-white w-full h-full flex flex-col justify-start items-center lg:items-start text-white font-sans">
        <HeaderA />
        <ImageCarousel>
          <div className="w-full h-full text-white md:p-5 xl:px-2 py-[2.5rem] p-4 md:pr-0 flex flex-col justify-center items-center">
            {/* <!-- Text Content --> */}
            <div className="w-full md:w-[85%] lg:w-[70%] h-fit flex-col md:px-[3rem] lg:px-[4.5rem] xl:px-[6rem] mt-[-1rem] pt-[1.25rem] my-[3rem] md:py-[3rem] justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="flex-col mb-6 mt-[-0.35rem] h-fit md:mt-0 w-full flex justify-center items-center"
              >
                <h1 className="w-full z-40 uppercase md:text-[3rem] lg:leading-[2.95rem] text-2xl font-bold mb-4 md:mb-3 text-center">
                  Abuja Afreximbank African Trade Centre <br />
                  <span className="text-yellow-400">(Abuja - AATC)</span>
                </h1>
              </motion.div>
            </div>
          </div>
        </ImageCarousel>

        <section className="lg:p-[5rem] lg:h-[68rem] px-[1rem] lg:px-[5rem] mt-[3rem] lg:mt-[1.85rem] w-full gap-x-[2rem] lg:gap-x-[2.75rem] h-full flex flex-col lg:flex-row  justify-center items-center lg:items-start">
          <div className="lg:w-[48%] w-full h-[96%] lg:mt-[1rem] fles justify-center items-center">
            <img
              className="w-full h-full flex justify-center items-center"
              src="/AboutAATC.png"
              alt=""
            />
          </div>
          <motion.div
            id="About"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Adjust as needed
            viewport={{ once: true }}
            className="lg:w-[45%] w-full h-full lg:mt-[1rem] flex flex-col justify-start items-start"
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
              The Abuja-Afreximbank African Trade Centre(AATC) is a planned
              premium property development strategically located in the Central
              Business District of Abuja Federal Capital Territory(FCT),
              Nigeria. The Abuja-AATC is the first self branded Afreximbank
              African Trade Centre to be developed as part of the Afreximbank’s
              strategy to grow intra-African trade. This iconic property is a
              “one-stop-shop” providing a unique range of trade services and
              amenities focused on the following:
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
              className="w-full h-full gap-y-[1.25rem] flex flex-col justify-start items-center mt-[2.85rem] lg:mt-[1.75rem]"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="p-[1rem] py-[1rem] pt-0 lg:py-[1.5rem] border border-neutral-200 rounded-lg w-full h-full lg:h-[9rem] flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-center mb-[0.35rem] lg:mb-0"
              >
                <div className="w-fit lg:ml-[-2rem] top-[-1.35rem] lg:top-1 relative h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                  i
                </div>
                <div className="w-full ml-[0.85rem] text-neutral-950">
                  Bridging the gap in trade and market information in Africa,
                  especially with regards to intra-African trade between Nigeria
                  and other African countries.
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="p-[1rem] py-[1rem] pt-0 lg:py-[1.5rem] border border-neutral-200 rounded-lg w-full h-full lg:h-[9rem] flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-center mb-[0.35rem] lg:mb-0"
              >
                <div className="w-fit lg:ml-[-2rem] top-[-1.35rem] lg:top-1 relative h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                  ii
                </div>
                <p className="w-full ml-[0.85rem] text-neutral-950">
                  AATC acts as a central hub for intra-African trade, enabling
                  businesses to connect, collaborate, and conduct transactions,
                  supported by facilities for trade fairs and exhibitions.
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="p-[1rem] py-[1rem] pt-0 lg:py-[1.5rem] border border-neutral-200 rounded-lg w-full h-full lg:h-[9rem] flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-center mb-[0.35rem] lg:mb-0"
              >
                <div className="w-fit lg:ml-[-2rem] top-[-1.35rem] lg:top-1 relative h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                  iii
                </div>
                <p className="w-full ml-[0.85rem] text-neutral-950">
                  By showcasing the potential of the African market and
                  providing a secure and well-equipped business environment,
                  AATC seeks to attract foreign direct investment, supported by
                  resources and guidance for international investors.
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="p-[1rem] py-[1rem] pt-0 lg:py-[1.5rem] border border-neutral-200 rounded-lg w-full h-full lg:h-[9rem] flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-center mb-[0.35rem] lg:mb-0"
              >
                <div className="w-fit lg:ml-[-2rem] top-[-1.35rem] lg:top-1 relative h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                  iv
                </div>
                <p className="w-full ml-[0.85rem] text-neutral-950">
                  AATC will house dedicated spaces for workshops, seminars, and
                  conferences to promote innovation and knowledge sharing,
                  addressing Africa&apos;s unique trade and development
                  challenges.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        <AfricanFuture />
        <WhyChooseUs />
        <OtherBenefits />
        <Gallery />
        <div className="w-full h-full flex flex-col gap-y-4 justify-center items-center bg-gradient-to-r from-sky-50 to-emerald-200 shadow-lg py-[2rem] lg:mb-6 rounded-lg text-center">
          <h2 className="w-full h-full flex justify-center items-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-[.25rem]">
            PRICING
          </h2>
          <div className="text-lg text-start md:text-xl lg:text-2xl font-semibold text-emerald-800">
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Lettable Area: 2nd to 5th floor spaces of 705 SqM/ floor
              </p>{" "}
              <br />
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Rent: $570/SqM/Annum
              </p>{" "}
              <br />
            </div>
            <div className="w-full h-full flex justify-start items-center mt-4">
              <div className="p-[0.15rem] w-fit h-full flex flex-col justify-start items-start bg-white rounded-full">
                <TiTick size={22} className="text-teal-800 rounded-full" />
              </div>
              <p className="text-zinc-900 text-base ml-3 w-full h-full flex justify-start items-start font-[400">
                Service Charge: $120/SqM/Annum{" "}
              </p>{" "}
              <br />
            </div>
          </div>
        </div>

        <FooterA />
        <SocialAATC />
      </div>
    </main>
  );
};

export default Page;
