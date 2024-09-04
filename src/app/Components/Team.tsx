/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PiPaperPlaneTiltFill } from "react-icons/pi";

const teamMembers = [
  {
    name: "Ayotilewa",
    position: "Founder",
    imageUrl: "/TeamM1.png", // Replace with the correct image path
  },
  {
    name: "Ayotilewa",
    position: "Chief Real Estate Officer",
    imageUrl: "/TeamM2.png", // Replace with the correct image path
  },
  {
    name: "Ayotilewa",
    position: "Head of Property Management",
    imageUrl: "/TeamM3.png", // Replace with the correct image path
  },
  {
    name: "Ayotilewa",
    position: "Legal Counsel",
    imageUrl: "/TeamM4.png", // Replace with the correct image path
  },
];

const MeetTheTeam: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-[4rem]">
      <div className="text-center">
        <div className="w-full h-full hidden md:flex justify-start">
          <img
            className="hidden md:inline my-[1.5rem]"
            src="/AbstractDesign.png"
            alt=""
          />
        </div>
        <h2 className="text-3xl font-bold text-start">Meet the Team</h2>
        <p className="text-gray-500 text-start mt-5">
          At ORA EGBUNIKE & ASSOCIATES, our success is driven by the dedication
          and expertise of our team. Get to know the people behind our mission
          to make your real estate dreams a reality.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center border border-neutral-200"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full mb-[2.5rem] rounded-lg object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500 mb-[0.5rem]">{member.position}</p>
            <button className="mt-4 bg-black text-white flex items-center justify-between py-3 px-6 pr-4 mb-[2rem] md:mb-[1rem] rounded-full w-full">
              Say Hello 👋
              <span className="ml-2 bg-red-600 p-2 rounded-full">
                <PiPaperPlaneTiltFill size={24} className="text-white" />
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;
