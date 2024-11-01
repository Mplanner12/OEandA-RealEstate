"use client";
import React from "react";
import { motion } from "framer-motion";

const MissionVision: React.FC = () => {
  return (
    <section className="bg-white w-full h-full flex flex-col justify-start items-center py-[4.75rem] px-[1rem] lg:px-[3.75rem]">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
        className="w-full h-full flex flex-col justify-start items-center"
      >
        <h1 className="lg:text-[2.75rem] text-[1.75rem] font-bold text-neutral-900 lg:w-[33rem] text-center">
          Mission & Vision
        </h1>
      </motion.div>

      <div className="w-full h-full mt-[3rem] flex flex-col lg:flex-row justify-center items-center gap-x-[2rem] lg:gap-x-[5rem]">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-full flex flex-col justify-start items-center rounded-lg p-8 bg-gradient-to-r from-emerald-50 to-teal-50"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-teal-800 mb-4 text-center">
            Mission
          </h2>
          <p className="text-zinc-900 text-base font-[400] text-center">
            To transform the Bank’s existing and future buildings into iconic
            business complexes that provide an integrated one-stop-shop for
            trade, investment and market information, trade services, trade
            finance and real estate services. To catalyse emergence of non-Bank-
            owned trade centres in Africa through franchising/licensing,
            co-operating, co- servicing, co-branding, co-financing and
            co-development arrangements.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 h-full flex flex-col justify-start items-center rounded-lg p-8 bg-gradient-to-r from-emerald-50 to-teal-50"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-teal-800 mb-4 text-center">
            Vision
          </h2>
          <p className="text-zinc-900 text-base font-[400] text-center">
            Create iconic branded beacons in pan-African commercial capitals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
