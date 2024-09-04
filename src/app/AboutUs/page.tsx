import React from "react";
import AboutHero from "../Components/AboutHero";
import MissionVisionSection from "../Components/MissionSection";
import ValuesSection from "../Components/Values";
import CustomersSay from "../Components/CustomersSay";

const Page: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <MissionVisionSection />
      <ValuesSection />
      <CustomersSay />
    </div>
  );
};

export default Page;
