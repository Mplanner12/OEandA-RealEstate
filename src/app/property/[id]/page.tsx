"use client";
import ImageGallery from "@/app/Components/ImageGallery";
import InquiryForm from "@/app/Components/InquiryForm";
import PricingDetails from "@/app/Components/PricingDetails";
import PropertyInfo from "@/app/Components/PropertyInfo";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import SocialLinks from "../../Components/SocialLinks";

interface Property {
  id: number;
  title: string;
  location: string; // Make location a required string
  status: string;
  slug: string;
  description: string;
  price: string;
  imageUrl: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: "GIGANTIC LUXURIOUS OFFICE COMPLEX",
    location: "DURUMI",
    status: "for Sale",
    slug: "Office space",
    description: `GIGANTIC AND LUXURIOUS OFFICE COMPLEX FOR SALE
Located at Durumi... Read More`,
    price: "₦25 BILLION",
    imageUrl: "/Giganti.jpeg",
  },
  {
    id: 2,
    title: "SEMI DETACHED FLAT",
    slug: "Urban Oasis - Life in the Heart of the City",
    status: "for Sale",
    location: "LUGBE:EL-SALEM ESTATE",
    description: `2 UNITS OF WELL SPACIOUS AND NEAT 3 BEDROOM SEMI DETACHED  FLAT IN A CALM AND SERENE ENVIRONMENT
LOCATION: LUGBE:EL-SALEM ESTATE...Read More`,
    price: "₦50 MILLION ",
    imageUrl: "/2Units.jpeg",
  },
  {
    id: 3,
    title: "Fully detached duplex",
    slug: "Newly Built Units",
    location: "ASOKORO",
    status: "for Sale",
    description:
      "units of 6- Bedrooms Fully detached duplex with 2 bedrooms Guest charlet and a self contain Bq available for sale at ASOKORO... Read More",
    price: "N1.6 BILLION",
    imageUrl: "/DUPLEX.png",
  },
];

const PropertyDetails = ({ params }: { params: { id: string } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const propParams = useParams();

  const propertyId = parseInt(params.id, 10);
  const property = properties.find((p) => p.id === propertyId);

  return (
    <div className="w-full h-full bg-neutral-950 text-white">
      <Header />
      <div className="container mx-auto px-4 py-8 lg:px-[3.5rem]">
        <header className="w-full h-full flex flex-col justify-start items-start gap-x-2">
          <div className="w-full h-full flex flex-col gap-y-2 justify-start items-start gap-x-2 lg:gap-x-[2rem]">
            {/* <h1 className="text-3xl lg:text-center lg:w-full">
              {property ? property.title : "Property not found"}
            </h1> */}
            <p className="text-sm w-fit h-full flex justify-start items-center gap-x-2 p-[0.35rem] px-[0.65rem] rounded-full border border-neutral-800">
              <IoLocationSharp size={16} className="text-gray-200" />
              {property ? property.location : "Location"}
            </p>
          </div>
        </header>

        <ImageGallery property={property} />
        {/* <PropertyInfo property={property} /> */}
        {/* <PricingDetails property={property} /> */}
        <InquiryForm property={property} />
      </div>
      <Footer />
      <SocialLinks />
    </div>
  );
};

export default PropertyDetails;
