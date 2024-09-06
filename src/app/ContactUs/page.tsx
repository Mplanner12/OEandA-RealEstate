import React from "react";
import ContactHero from "../Components/ContactHero";
import LetsConnect from "../Components/letsConnect";
import Discover from "../Components/Offices";
import ExploreSection from "../Components/ExploreSection";

const page: React.FC = () => {
  return (
    <div>
      <ContactHero />
      <LetsConnect />
      <Discover />
      <ExploreSection />
    </div>
  );
};

export default page;
