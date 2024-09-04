import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const SocialLinks: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row-reverse justify-start md:pb-[9rem] md:justify-between items-center bg-zinc-900 md:bg-zinc-900 py-[1.25rem]">
      <div className="md:hidden px-[1.5rem] py-[1.25rem] w-full h-full flex justify-center items-center gap-x-[1.15rem]">
        <div className="w-fit h-full flex justify-center items-center p-[1rem] bg-black rounded-full">
          <FaFacebookF size={20} className="text-white" />
        </div>
        <div className="w-fit h-full flex justify-center items-center p-[1rem] bg-black rounded-full">
          <FaLinkedin size={20} className="text-white" />
        </div>
        <div className="w-fit h-full flex justify-center items-center p-[1rem] bg-black rounded-full">
          <FaTwitter size={20} className="text-white" />
        </div>
        <div className="w-fit h-full flex justify-center items-center p-[1rem] bg-black rounded-full">
          <FaYoutube size={20} className="text-white" />
        </div>
      </div>
      <div className="hidden md:px-[5rem] w-full md:w-fit h-full md:flex justify-center items-center gap-x-[2.5rem]">
        <div className="w-fit h-full flex justify-center items-center">
          <FaFacebookF size={24} className="text-white" />
        </div>
        <div className="w-fit h-full flex justify-center items-center">
          <FaLinkedin size={24} className="text-white" />
        </div>
        <div className="w-fit h-full flex justify-center items-center">
          <FaTwitter size={24} className="text-white" />
        </div>
        <div className="w-fit h-full flex justify-center items-center">
          <FaYoutube size={24} className="text-white" />
        </div>
      </div>
      <div className="w-full md:px-[2rem] md:gap-x-[2rem] h-full flex flex-col md:flex-row justify-start items-center">
        <div className="flex flex-col md:flex-row md:gap-x-[2rem] justify-start items-center text-xs gap-y-[0.5rem] text-white">
          <p className="w-fit">@2024 ORA EGBUNIKE & ASSOCIATES.</p>
          <p className="w-fit">All Rights Reserved.</p>
        </div>
        <div className="w-full md:w-fit h-full mt-[0.5rem] md:mt-0 flex justify-center md:justify-start items-center md:items-start text-xs text-white text-center">
          Terms & Conditions
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
