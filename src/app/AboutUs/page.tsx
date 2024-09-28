"use client";
import React from "react";
import AboutHero from "../Components/AboutHero";
import MissionVisionSection from "../Components/MissionSection";
import ValuesSection from "../Components/Values";
import CustomersSay from "../Components/CustomersSay";
import MeetTheTeam from "../Components/Team";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SocialLinks from "../Components/SocialLinks";

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutHero />
      <MissionVisionSection />
      <ValuesSection />
      <CustomersSay />
      <MeetTheTeam />
      <Footer />
      <SocialLinks />
    </div>
  );
};

export default Page;
