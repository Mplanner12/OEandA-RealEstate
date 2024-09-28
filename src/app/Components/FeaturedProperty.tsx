/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

const properties = [
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

interface FeaturedPropertiesProps {
  searchTerm: string;
  showViewMoreButton?: boolean;
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  searchTerm,
  showViewMoreButton = false,
}) => {
  // const filteredProperties = properties.filter((property) =>
  //   property.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProperties = properties.filter((property) => {
    // Apply search term filter
    const matchesSearch = property.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // Apply property type filter
    if (selectedFilter === "all") {
      return matchesSearch; // Show all if "all" is selected
    } else {
      return matchesSearch && property.status.toLowerCase() === selectedFilter;
    }
  });

  return (
    <div className="bg-neutral-950 w-full lg:px-[5rem] mt-[0.5rem] py-[3rem] pb-[6rem] lg:mt-[5rem]">
      <div className="mt-0 md:mt-0 w-full md:pl-12 p-[1.5rem] flex flex-col justify-start items-start">
        <img
          className="inline  my-[0.15rem]"
          src="/AbstractDesign.png"
          alt=""
        />
        <div className="w-full h-full flex justify-between items-center mb-[2rem]">
          <div className="w-full h-full">
            <h2 className="text-[2.25rem] text-white md:text-[2.5rem] font-bold mt-3 md:mt-2">
              Featured Properties
            </h2>
            <p className="text-neutral-400 text-sm mt-4 lg:w-[60rem]">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through OE&A. Click &quot;View Details&quot; for more
              information.
            </p>
          </div>
          {showViewMoreButton && (
            <Link
              href="/Properties"
              className="w-[19rem] md:block bg-neutral-950 flex justify-center items-center text-white py-3 px-4 rounded-lg shadow-lg mr-4"
            >
              View more properties
            </Link>
          )}
        </div>
        <div className="flex space-x-2 mr-4">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-2xl text-sm font-medium ${
              selectedFilter === "all"
                ? "bg-red-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            All Properties
          </button>
          <button
            onClick={() => setSelectedFilter("for rent")}
            className={`px-4 py-2 rounded-2xl text-sm font-medium ${
              selectedFilter === "for rent"
                ? "bg-red-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            For Rent
          </button>
          <button
            onClick={() => setSelectedFilter("for sale")}
            className={`px-4 py-2 rounded-2xl text-sm font-medium ${
              selectedFilter === "for sale"
                ? "bg-red-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            For Sale
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-[3rem] px-2 py-4 lg:py-0">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="border w-full h-full flex flex-col justify-start items-start border-gray-900 p-5 rounded-lg"
          >
            <div className="w-full h-full flex flex-col justify-start items-start">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4 w-full flex flex-col justify-start items-start">
                <div className="rounded-full font-light mt-[0.4rem] text-white mb-[0.85rem] w-fit p-[0.3rem] px-[0.5rem] border lg:ml-[0.25rem] border-neutral-800 bg-neutral-900 text-xs">
                  {property.slug}
                </div>
                <h3 className="text-lg font-bold uppercase text-white h-[3.85rem]">
                  {property.title}
                </h3>
                <p className="text-gray-400 capitalize h-[5rem] text-sm font-extralight">
                  {property.description}
                </p>
                <div className="w-full flex justify-between gap-x-2 items-center mt-4">
                  <div className="font-semibold w-[58%] h-full flex flex-col justify-start items-start">
                    <p className="text-gray-400 text-xs font-light">Price</p>
                    <p className="text-gray-200 text-lg">{property.price}</p>
                  </div>
                  <Link
                    href={`/property/${property.id}`}
                    className="mt-2 w-full flex justify-center items-center text-white text-xs bg-red-700 py-[0.85rem] rounded-md"
                  >
                    View Property Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
