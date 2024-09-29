import React from "react";
import {
  FaGraduationCap,
  FaMoneyBillTransfer,
  FaRegStar,
  FaUser,
  FaUsers,
} from "react-icons/fa6";
import { MdLeaderboard } from "react-icons/md";

const ValuesSection = () => {
  return (
    <div className="container mx-auto py-12 flex flex-col md:flex-row justify-between items-center gap-x-[4rem] px-[1.25rem] md:px-[4rem]">
      <div className="text-center md:text-left mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Values</h2>
        <p className="text-gray-500 md:w-[28rem] text-start">
          Our story is one of continuous growth and evolution. We started as a
          small team with big dreams, determined to create a real estate
          platform that transcended the ordinary.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="p-3 bg-gray-800 rounded-full">
              <FaRegStar size={24} className="text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">Performance</h4>
            <p className="text-gray-500">
              Performance is the cornerstone of every successful real estate
              transaction.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="p-3 bg-gray-800 rounded-full">
              <FaGraduationCap size={24} className="text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">Excellence</h4>
            <p className="text-gray-500">
              We set the bar high for ourselves. From the properties we list to
              the services we provide.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="p-3 bg-gray-800 rounded-full">
              <FaUsers size={24} className="text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">Integrity</h4>
            <p className="text-gray-500">
              Our foundation is built on the unyielding integrity we maintain
              with every transaction.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="p-3 bg-gray-800 rounded-full">
              <FaRegStar size={24} className="text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">Innovation</h4>
            <p className="text-gray-500">
              We believe in pushing the boundaries and always finding new ways
              to serve our customers.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="p-3 bg-gray-800 rounded-full">
              <MdLeaderboard size={24} className="text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">Leadership </h4>
            <p className="text-gray-500">
              {/* We believe in pushing the boundaries and always finding new ways
              to serve our customers. */}
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="p-3 bg-gray-800 rounded-full">
              <FaMoneyBillTransfer size={24} className="text-white" />
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold">
              Wealth creation and knowledge sharing
            </h4>
            <p className="text-gray-500">
              {/* We believe in pushing the boundaries and always finding new ways
              to serve our customers. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
