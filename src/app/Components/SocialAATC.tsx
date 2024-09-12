import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

const SocialAATC: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row-reverse justify-start md:pb-[2.5rem] md:justify-between items-center bg-white py-[1.25rem]">
      <div className="md:hidden px-[3.5rem] py-[1.25rem] w-full h-full flex justify-center items-center gap-x-0 lg:gap-x-[1.15rem]">
        <Link
          href="https://www.facebook.com/share/XWysssLPi3qCbSEp/?mibextid=kFxxJD"
          className="w-fit h-full flex justify-center items-center p-[0.35rem] rounded-full"
        >
          <FaFacebookF
            size={39}
            className="text-white p-2.5 rounded-full bg-emerald-700"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/showcase/ora-egbunike-and-associates/"
          className="w-fit h-full flex justify-center items-center p-[0.35rem] rounded-full"
        >
          <FaLinkedin
            size={39}
            className="text-white p-2.5 rounded-full bg-emerald-700"
          />
        </Link>
        {/* <div className="w-fit h-full flex justify-center items-center p-[0.35rem] rounded-full">
          <FaTwitter
            size={39}
            className="text-white p-2.5 rounded-full bg-emerald-700"
          />
        </div> */}
        <Link
          href="https://www.youtube.com/@oraegbunikeassociates6093"
          className="w-fit h-full flex justify-center items-center p-[0.35rem] rounded-full"
        >
          <FaYoutube
            size={39}
            className="text-white p-2.5 rounded-full bg-emerald-700"
          />
        </Link>
      </div>
      <div className="hidden md:px-[5rem] w-full md:w-fit h-full md:flex justify-center items-center gap-x-[1rem]">
        <Link
          href="https://www.facebook.com/share/XWysssLPi3qCbSEp/?mibextid=kFxxJD"
          className="w-fit h-full flex justify-center items-center"
        >
          <FaFacebookF
            size={39}
            className="text-white p-2.5 rounded-full bg-emerald-700"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/showcase/ora-egbunike-and-associates/"
          className="w-fit h-full flex justify-center items-center"
        >
          <FaLinkedin
            size={36}
            className="text-white p-2 rounded-full bg-emerald-700"
          />
        </Link>
        {/* <div className="w-fit h-full flex justify-center items-center">
          <FaTwitter
            size={36}
            className="text-white p-2 rounded-full bg-emerald-700"
          />
        </div> */}
        <Link
          href="https://www.youtube.com/@oraegbunikeassociates6093"
          className="w-fit h-full flex justify-center items-center"
        >
          <FaYoutube
            size={36}
            className="text-white p-2 rounded-full bg-emerald-700"
          />
        </Link>
      </div>
      <div className="w-full md:px-[2rem] md:gap-x-[2rem] h-full flex flex-col md:flex-row justify-start items-center font-[500]">
        <div className="flex flex-col md:flex-row md:gap-x-[2rem] justify-start items-center text-base gap-y-[0.5rem] text-neutral-900">
          <p className="w-fit">@2024 ORA EGBUNIKE & ASSOCIATES.</p>
          <p className="w-fit">All Rights Reserved.</p>
        </div>
        <div className="w-full md:w-fit h-full mt-[0.5rem] md:mt-0 flex justify-center md:justify-start items-center md:items-start text-base text-neutral-900 text-center">
          Terms & Conditions
        </div>
      </div>
    </div>
  );
};

export default SocialAATC;
