// pages/PortfolioPage.tsx
import React from "react";
import PortfolioCard from "../Components/PortfolioCard";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const portfolioData = [
  {
    title: "Pacific Silverline Limited",
    description: `Valuation of MV Silverline Crew Boats Anchored at High Tide Jetty, Abuloma, Port Harcourt, Rivers State for Pacific Silverline Limited
2022
`,
    images: ["/PaciImg.png"],
  },
  {
    title: "Clintwealth Limited",
    description:
      "Valuation of Oil Vessels and Assets for ClintWealth Limited Port Harcourt, Rivers State, 2022",
    images: [
      "/ClintImg.png",
      //   "/images/project2-2.png",
      //   "/images/project2-3.png",
      //   "/images/project2-4.png",
    ],
  },
  {
    title: "CBN Head Office Annex Garki",
    description:
      "Project management and construction of 274 bank offices, Kano, Abuja, Lagos, Year: 2016-2019",
    images: ["/CBNImg.png"],
  },
  {
    title: "Mamman Kontagora House",
    description:
      "Facilities management of 14- floor high rise commercial building, Marina Lagos Year 2017 - Date",
    images: ["/MammanImg.png"],
  },
  {
    title: "Ikeja Electricity Distribution Company",
    description: "Asset Valuation",
    images: ["/IkejaImg.png"],
  },
  {
    title: "Nigerian College of Aviation Technology (NCAT) Zaria",
    description:
      "Valuation Asset Tagging and Preparation of Digital Asset Register",
    images: ["/NcatImg.png"],
  },
  {
    title: "African Development Bank",
    description:
      "Facilities management of African Development Bank, located at Central Business District, Abuja Year 2019- Date",
    images: ["/AdbImg.png"],
  },
  {
    title: "UN House",
    description:
      "management of New UN House, Central Business District, Abuja Year 2013 - Date",
    images: ["/UNImg.png"],
  },
  {
    title: "Central Bank of Nigeria Branch Office",
    description:
      "Facilities management of Central Bank of Nigeria Branch Office at Enugu, Enugu State Year 2008 - Date",
    images: ["/CBNbranchImg.png"],
  },
  {
    title: "Cowrie House",
    description:
      "management of New UN House, Central Business District, Abuja Year 2013 - Date",
    images: ["/CowrieImg.png"],
  },
  {
    title: "Bunu Sheriff Gardens",
    description:
      "Multi Luxury Blocks of Flats at 16B Probyn Road Ikoyi, Lagos Year 1994 - 2018",
    images: ["/BunuImg.png"],
  },
  {
    title: "Central Bank of Nigeria",
    description: "Annex Office, Garki II, Abuja",
    images: ["/CBNmainImg.png"],
  },
  {
    title: "NNPC Housing Estate",
    description: "Garki II, AbujaYear 2005-2007",
    images: ["/NNPCImg.png"],
  },
  {
    title: "NCC Building",
    description: `NCC Corporate Headquarters at Plot 423 Aguiyi Ironsi Street, Maitama, Abuja
Year 2006 -2017`,
    images: ["/NCCImg.png"],
  },
  {
    title: "CBN BRANCH OFFICE ABAKALILKI",
    description: `Project management of CBN Branch Office, Abakaliki, Ebonyi State 2021`,
    images: ["/CBNABAImg.png"],
  },
];

const PortfolioPage = () => {
  return (
    <main className="w-full h-full flex flex-col justify-start">
      <Header />
      <div className="w-full px-[1.5rem] md:px-[5.5rem] py-10">
        {portfolioData.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default PortfolioPage;
