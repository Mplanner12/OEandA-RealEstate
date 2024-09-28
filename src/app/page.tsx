"use client";
import Hero from "./Components/Hero";
import NewWay from "./Components/NewWay";
import WhoWeAre from "./Components/WhoWeAre";
import WhatWeDo from "./Components/WhatWeDo";
import ProfessionalAffiliations from "./Components/ProfessionalAffiliations";
import CustomersSay from "./Components/CustomersSay";
import FAQ from "./Components/Faq";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SocialLinks from "./Components/SocialLinks";
import FeaturedProperties from "./Components/FeaturedProperty";
import { useState } from "react";
import ClientLogos from "./Components/ClientLogos";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: any) => {
    setSearchTerm(term);
  };

  return (
    <main className="bg-white w-full flex min-h-screen flex-col items-center justify-between">
      <Header onSearch={handleSearch} />
      <Hero />
      <NewWay />
      <WhoWeAre />
      <WhatWeDo />
      <FeaturedProperties searchTerm={searchTerm} />
      <ClientLogos />
      {/* <ProfessionalAffiliations /> */}
      {/* <CustomersSay /> */}
      {/* <FAQ /> */}
      <Footer />
      <SocialLinks />
    </main>
  );
}
