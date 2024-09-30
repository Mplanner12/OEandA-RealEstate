/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const teamMembers = [
  {
    name: "AbdulMalik Ora Egbunike ",
    position: "Principal Consultant",
    imageUrl: "/AbdulM.jpg", // Replace with the correct image path
  },
  {
    name: "Alhaji Shehuluqman Sambo",
    position: "Company Secretary/Legal Advisor",
    imageUrl: "/AlhajiS.jpg", // Replace with the correct image path
  },
  {
    name: "Cyprian Nnadozie Konkwo ",
    position: "Managing Partner",
    imageUrl: "/TeamM3.png", // Replace with the correct image path
  },
  {
    name: "Engr. Arowosafe M. Olayinka",
    position: "Facilities Management Co-ordinator",
    imageUrl: "/EngrA.jpg", // Replace with the correct image path
  },
  {
    name: "AkinBayo Akintokun ",
    position: "Facility Manager, ADB",
    imageUrl: "/AkinB.jpg", // Replace with the correct image path
  },
  {
    name: "Adikpe Linda Odije",
    position: "Estate Surveyor",
    imageUrl: "/Adikpe.jpg", // Replace with the correct image path
  },
  {
    name: "Obodoechina Emeka",
    position: "Principal Estate Surveyor",
    imageUrl: "/TeamM4.png", // Replace with the correct image path
  },
  {
    name: "Paul Okwuayanga ",
    position: "Regional Manager, Lagos",
    imageUrl: "/PaulO.jpg", // Replace with the correct image path
  },
];

const MeetTheTeam: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const previous = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <div id="team" className=" text-black p-6">
      <div className="w-full md:container md:mx-auto text-center">
        <h2 className="text-3xl uppercase font-bold mb-6">
          Meet Our Outstanding Team
        </h2>
        <p className="mb-4">
          Welcome to Ora Egbunike, where you&rsquo;re not just a user but a
          pioneer in the transition to a safer world, with affordable housing
          options.
        </p>
        <div className="flex items-center w-full justify-center">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-y-[1.5rem] md:gap-y-0 gap-x-[2.25rem] overflow-hidden mx-4">
            {teamMembers
              .slice(currentIndex, currentIndex + 3)
              .map((member, index) => (
                <div
                  key={member.name}
                  className="w-fit h-full shalow-xl border-[0.5px] border-gray-100 rounded-lg"
                >
                  <div className="w-full flex justify-center items-center object-contain">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-[17.5rem] mt-4 bg-white rounded-lg"
                    />
                  </div>
                  <div className="hover:bg-black hover:text-white w-full h-[7.5rem] md:h-[5.85rem] flex justify-between gap-x-[0.5rem] md:gap-x-[3rem] mt-4 pt-1 px-3 md:px-6 bg-stone-100 items-center rounded-md">
                    <div className="w-full h-full flex flex-col justify-start items-start">
                      <h3 className="text-[0.95rem] tracking-tight uppercase text-start font-semibold mt-2 w-[10rem] md:w-[12rem]">
                        {member.name}
                      </h3>
                      <p className="text-xs text-start w-[8.75rem] md:w-[10rem]">
                        {member.position}
                      </p>
                    </div>
                    <div className="w-full h-full flex mt-4 justify-center items-start">
                      <a className="mt-2 inline-block text-xs w-[6.25rem] bg-red-100 text-red-400 hover:bg-neutral-700 hover:text-white font-bold py-1.5 px-3 rounded-lg">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="md:hidden w-full grid grid-cols-1 md:grid-cols-3 gap-y-[1.5rem] md:gap-y-0 gap-x-[0.75rem] overflow-hidden mx-1">
            {teamMembers
              .slice(currentIndex, currentIndex + 1)
              .map((member, index) => (
                <div
                  key={member.name}
                  className="w-full h-full shalow-xl border-[0.5px] border-gray-100 rounded-lg"
                >
                  <div className="w-full flex justify-center items-center object-contain">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-[16rem] mt-4 bg-white rounded-lg"
                    />
                  </div>
                  <div className="hover:bg-black hover:text-white w-full h-[7.5rem] md:h-[5.85rem] flex justify-between gap-x-[0.35rem] md:gap-x-[3rem] mt-4 pt-1 px-[2rem] md:px-6 bg-stone-100 items-center rounded-md">
                    <div className="w-full h-full flex flex-col justify-start items-start">
                      <h3 className="text-[0.95rem] tracking-tight uppercase text-start font-semibold mt-2 w-[10rem] md:w-[12rem]">
                        {member.name}
                      </h3>
                      <p className="text-xs text-start w-[8.75rem] md:w-[10rem]">
                        {member.position}
                      </p>
                    </div>
                    <div className="w-full h-full flex mt-4 justify-end items-start">
                      <a className="mt-2 inline-block text-xs w-[6.25rem] bg-red-100 text-red-400 hover:bg-neutral-700 hover:text-white font-bold py-1.5 px-3 rounded-lg">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full gap-x-[0.95rem] mt-[2rem] h-full flex justify-end items-center">
          <button
            onClick={previous}
            className="bg-gray-50 border hover:bg-gray-700 p-3 rounded-full focus:bg-black active:bg-black"
          >
            <FaArrowLeft className="text-black hover:text-white active:text-white focus:text-white" />
          </button>
          <button
            onClick={next}
            className="bg-gray-50 border hover:bg-gray-700 p-3 rounded-full focus:bg-black active:bg-black"
          >
            <FaArrowRight className="text-black hover:text-white active:text-white focus:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
