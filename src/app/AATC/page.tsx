/* eslint-disable @next/next/no-img-element */
import React from "react";
import AfricanFuture from "../Components/AfricanFuture";
import WhyChooseUs from "../Components/WhyChooseUs";
import Footer from "../Components/Footer";
import HeaderA from "../Components/HeaderA";
import FooterA from "../Components/FooterA";
import SocialAATC from "../Components/SocialAATC";

const page: React.FC = () => {
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
    <div className="bg-white w-full h-full flex flex-col justify-start items-start text-white font-sans">
      <HeaderA />
      <div className="lg:w-full bg-teal-700 lg:h-[35rem] text-white md:p-5 xl:px-2 p-4 md:pr-0 flex flex-col md:flex-row-reverse items-center sm:items-start justify-between">
        {/* <!-- Text Content --> */}
        <div className="w-full h-full flex-col md:px-[3rem] lg:px-[4.5rem] xl:px-[6rem] pt-[1.25rem] md:pt-[5rem] justify-center items-center mt-[-1rem] lg:mt-0 leading-[3rem]">
          <div className="flex-col mb-6 mt-[-0.35rem] md:mt-0 w-full flex justify-center items-center">
            <h1 className="uppercase md:text-[3rem] leading-[2.85rem] text-3xl font-bold mb-4 md:mb-3 w-[20rem] lg:w-[45rem] text-center">
              Abuja Afreximbank African Trade Centre{" "}
              <span className="text-yellow-400">(AATC)</span>
            </h1>
            {/* <p className="md:text-base text-[0.9rem] mb-6 md:mt-[1.25rem] md:mb-[1.75rem] text-neutral-400 md:w-[30rem]">
                The Abuja-Afreximbank African Trade Centre is a planned premium
                property development...
              </p> */}
          </div>
        </div>
      </div>
      <div className="z-20 mx-auto lg:mt-[-17rem] p-[1rem] rounded-lg border-3 border-teal-700 w-full lg:w-[89%] bg-teal-700">
        <img className="bg-neutral-400" src="/AATCimg.png" alt="" />
      </div>

      <section className="p-[5rem] mt-[2rem] w-full gap-x-[2rem] h-full flex flex-col lg:flex-row lg:justify-start justify-center items-start">
        <div className="w-2/4 h-full fles justify-center items-center">
          <img src="/AboutAATC.png" alt="" />
        </div>
        <div className="w-2/4 h-full flex flex-col justify-start items-start">
          <h1 className="text-[3rem] font-bold text-neutral-900">
            About the Abuja-AATC Building.
          </h1>
          <p className="text-base mt-4 text-zinc-500 lg:pr-[2rem]">
            The Abuja-Afreximbank African Trade Centre is a planned premium
            property development strategically located in the Centra lBusiness
            District of Abuja Federal Capita lTerritory, Nigeria. TheAbuja-AATC
            is the first self branded Afrexim bank African Trade Centre to be
            developed as part of the Afreximbank’s strategy to grow
            intra-African trade. This iconic property is a “One-stop-shop”
            providing unique range of trade services and amenities focused on:
          </p>
          <div className="w-full h-full gap-y-[1.5rem] flex flex-col justify-start items-center mt-[2.85rem]">
            <div className="p-[1rem] py-[1.85rem] border border-neutral-200 rounded-lg w-full h-full flex justify-start items-start">
              <div className="w-fit ml-[-2rem] relative top-1 h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                {/* <img src="/SVG1.png" alt="" /> */}i
              </div>
              <p className="w-full ml-[0.85rem] text-neutral-950">
                Bridging the gap in trade and market information in Africa,
                especially with regards to intra African trade between Nigeria
                and other African countries.
              </p>
            </div>
            <div className="p-[1rem] py-[1.85rem] border border-neutral-200 rounded-lg w-full h-full flex justify-start items-start">
              <div className="w-fit ml-[-2rem] relative top-1 h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-4 to-teal-800 rounded-lg justify-center items-center">
                {/* <img src="/SVG1.png" alt="" /> */}ii
              </div>
              <p className="w-full ml-[0.85rem] text-neutral-950">
                Bridging the gap in trade and market information in Africa,
                especially with regards to intra African trade between Nigeria
                and other African countries.
              </p>
            </div>
            <div className="p-[1rem] py-[1.85rem] border border-neutral-200 rounded-lg w-full h-full flex justify-start items-start">
              <div className="w-fit ml-[-2rem] relative top-1 h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-3.5 to-teal-800 rounded-lg justify-center items-center">
                {/* <img src="/SVG1.png" alt="" /> */}iii
              </div>
              <p className="w-full ml-[0.85rem] text-neutral-950">
                Bridging the gap in trade and market information in Africa,
                especially with regards to intra African trade between Nigeria
                and other African countries.
              </p>
            </div>
            <div className="p-[1rem] py-[1.85rem] border border-neutral-200 rounded-lg w-full h-full flex justify-start items-start">
              <div className="w-fit ml-[-2rem] relative top-1 h-fit p-2 flex bg-gradient-to-br from-emerald-500 px-3.5 to-teal-800 rounded-lg justify-center items-center">
                {/* <img src="/SVG1.png" alt="" /> */}iv
              </div>
              <p className="w-full ml-[0.85rem] text-neutral-950">
                Bridging the gap in trade and market information in Africa,
                especially with regards to intra African trade between Nigeria
                and other African countries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AfricanFuture />
      <WhyChooseUs />
      <FooterA />
      <SocialAATC />
    </div>
  );
};

export default page;
