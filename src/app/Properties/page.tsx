"use client";
import React, { useState } from "react";
import PropertySearch from "../Components/PropertySearch";
import FeaturedProperties from "../Components/FeaturedProperty";
import ContactForm from "../Components/ContactForm";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SocialLinks from "../Components/SocialLinks";

const PropertyPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full h-full">
      <Header />
      <div className="bg-neutral-950 w-full h-full text-white flex flex-col justify-start items-center">
        <div className="w-full h-full flex flex-col justify-start items-center lg:py-2">
          <div className="lg:p-[4.5rem] px-[1.25rem] pt-[3.5rem] lg:pb-[4rem] border-b border-neutral-800 lg:pt-[5rem] bg-gradient-to-r from-neutral-900 to-neutral-950 w-full h-full flex flex-col justify-start items-start">
            <h1 className="text-4xl w-[21rem] font-bold text-start">
              Find Your Dream Property
            </h1>
            <p className="text-start font-light text-neutral-400 mt-4 mb-8 lg:w-[50rem] xl:w-[69rem]">
              Welcome to ORA EGBUNIKE & ASSOCIATES , where your dream property
              awaits in every corner of our beautiful world. Explore our curated
              selection of properties, each offering a unique story and a chance
              to redefine your life. With categories to suit every dreamer, your
              journey
            </p>
          </div>
          <PropertySearch setSearchTerm={setSearchTerm} />
          <FeaturedProperties searchTerm={searchTerm} />
        </div>
        <ContactForm />
      </div>
      <Footer />
      <SocialLinks />
    </div>
  );
};

export default PropertyPage;
