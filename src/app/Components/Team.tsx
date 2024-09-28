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
    <div className=" text-black p-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl uppercase font-bold mb-6">
          Meet Our Outstanding Team
        </h2>
        <p className="mb-4">
          Welcome to Ora Egbunike, where you're not just a user but a pioneer in
          the transition to a safer world, with affordable housing options.
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 overflow-hidden mx-4">
            {teamMembers
              .slice(currentIndex, currentIndex + 4)
              .map((member, index) => (
                <div key={member.name} className="w-full p-4 shalow-lg">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
                  <p className="text-sm">{member.position}</p>
                  <a
                    //  href={member.descriptionUrl}
                    className="mt-2 inline-block bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                  >
                    Read more
                  </a>
                </div>
              ))}
          </div>
        </div>

        <div className="w-full gap-x-[0.95rem] mt-[-2rem] h-full flex justify-end items-center">
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
  // return (
  //   <section className="py-12 px-4 md:px-[4rem]">
  //     <div className="text-center">
  //       <div className="w-full h-full hidden md:flex justify-start">
  //         <img
  //           className="hidden md:inline my-[1.5rem]"
  //           src="/AbstractDesign.png"
  //           alt=""
  //         />
  //       </div>
  //       <h2 className="text-3xl font-bold text-start">Meet the Team</h2>
  //       <p className="text-gray-500 text-start mt-5">
  //         At ORA EGBUNIKE & ASSOCIATES, our success is driven by the dedication
  //         and expertise of our team. Get to know the people behind our mission
  //         to make your real estate dreams a reality.
  //       </p>
  //     </div>

  //     <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  //       {teamMembers.map((member, index) => (
  //         <div
  //           key={index}
  //           className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center border border-neutral-200"
  //         >
  //           <img
  //             src={member.imageUrl}
  //             alt={member.name}
  //             className="w-full h-full mb-[2.5rem] rounded-lg object-cover"
  //           />
  //           <h3 className="mt-4 text-xl font-semibold text-center">
  //             {member.name}
  //           </h3>
  //           <p className="text-gray-500 mb-[0.5rem] text-center">
  //             {member.position}
  //           </p>
  //           <button className="mt-4 bg-black text-white flex items-center justify-between py-3 px-6 pr-4 mb-[2rem] md:mb-[1rem] rounded-full w-full">
  //             Say Hello 👋
  //             <span className="ml-2 bg-red-600 p-2 rounded-full">
  //               <PiPaperPlaneTiltFill size={24} className="text-white" />
  //             </span>
  //           </button>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );
};

export default MeetTheTeam;
