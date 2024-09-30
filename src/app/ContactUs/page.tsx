import React from "react";
import ContactHero from "../Components/ContactHero";
import LetsConnect from "../Components/letsConnect";
import Discover from "../Components/Offices";
import ExploreSection from "../Components/ExploreSection";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SocialLinks from "../Components/SocialLinks";
import FAQ from "../Components/Faq";

const page: React.FC = () => {
  return (
    <div id="#contact-form">
      <Header />
      <ContactHero />
      <LetsConnect />
      <Discover />
      {/* <ExploreSection /> */}
      <FAQ />
      <Footer />
      <SocialLinks />
    </div>
  );
};

export default page;
