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

const properties = [
  {
    id: 1,
    title: "GIGANTIC AND LUXURIOUS OFFICE COMPLEX FOR SALE",
    slug: "Coastal Escapes - Where Waves Beckon",
    location: "DURUMI",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
    price: "₦25 BILLION",
    imageUrl: "/prop1.png",
  },
  {
    id: 2,
    title:
      "2  UNITS OF WELL SPACIOUS AND NEAT 3 BEDROOM SEMI DETACHED  FLAT IN A CALM AND SERENE ENVIRONMENT",
    slug: "Urban Oasis - Life in the Heart of the City",
    location: "LUGBE:EL-SALEM ESTATE, PYKASSA",
    description:
      "Immerse yourself in the energy of the city. This modern apartment in the heart...",
    price: "₦50 MILLION ",
    imageUrl: "/prop2.png",
  },
  {
    id: 3,
    title: "Rustic Retreat Cottage",
    slug: "Countryside Charm - Escape to Nature's Embrace",
    location: "LAGOS",
    description:
      "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills.",
    price: "$350,000",
    imageUrl: "/prop3.png",
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
            <h1 className="text-3xl lg:text-center lg:w-full">
              {property ? property.title : "Property not found"}
            </h1>
            <p className="text-sm w-fit h-full flex justify-start items-center gap-x-2 p-[0.35rem] px-[0.65rem] rounded-full border border-neutral-800">
              <IoLocationSharp size={16} className="text-gray-200" />
              Chevron Estate
            </p>
          </div>
          <div className="text-base mt-4 lg:text-sm flex flex-col lg:flex-row lg:gap-x-[1rem] justify-start items-start gap-y-2 lg:gap-y-0 lg:mt-2">
            <div className="font-extralight">Price</div> <div>₦1,250,000</div>
          </div>
        </header>

        <ImageGallery property={property} />
        <PropertyInfo property={property} />
        <PricingDetails property={property} />
        <InquiryForm property={property} />
      </div>
      <Footer />
      <SocialLinks />
    </div>
  );
};

export default PropertyDetails;
