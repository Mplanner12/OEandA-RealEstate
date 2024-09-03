import Image from "next/image";
import Hero from "./Components/Hero";
import NewWay from "./Components/NewWay";
import WhoWeAre from "./Components/WhoWeAre";
import WhatWeDo from "./Components/WhatWeDo";
import ProfessionalAffiliations from "./Components/ProfessionalAffiliations";
import CustomersSay from "./Components/CustomersSay";
import FAQ from "./Components/Faq";

export default function Home() {
  return (
    <main className="bg-white w-full flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <NewWay />
      <WhoWeAre />
      <WhatWeDo />
      <ProfessionalAffiliations />
      <CustomersSay />
      <FAQ />
    </main>
  );
}
