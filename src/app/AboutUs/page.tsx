import React from "react";
import AboutHero from "../Components/AboutHero";
import MissionVisionSection from "../Components/MissionSection";
import ValuesSection from "../Components/Values";
import CustomersSay from "../Components/CustomersSay";
import MeetTheTeam from "../Components/Team";

const Page: React.FC = () => {
  return (
    <div>
      <AboutHero />
      <MissionVisionSection />
      <ValuesSection />
      <CustomersSay />
      <MeetTheTeam />
    </div>
  );
};

export default Page;
