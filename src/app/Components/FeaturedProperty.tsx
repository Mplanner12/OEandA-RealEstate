/* eslint-disable @next/next/no-img-element */
import React from "react";

const properties = [
  {
    id: 1,
    title: "Seaside Serenity Villa",
    slug: "Coastal Escapes - Where Waves Beckon",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
    price: "$1,250,000",
    imageUrl: "/prop1.png",
  },
  {
    id: 2,
    title: "Metropolitan Haven",
    slug: "Urban Oasis - Life in the Heart of the City",
    description:
      "Immerse yourself in the energy of the city. This modern apartment in the heart...",
    price: "$650,000",
    imageUrl: "/prop2.png",
  },
  {
    id: 3,
    title: "Rustic Retreat Cottage",
    slug: "Countryside Charm - Escape to Nature's Embrace",
    description:
      "Find tranquility in the countryside. This charming cottage is nestled amidst rolling hills.",
    price: "$350,000",
    imageUrl: "/prop3.png",
  },
];

interface FeaturedPropertiesProps {
  searchTerm: string;
}

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  searchTerm,
}) => {
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lg:px-[2rem] mt-[5rem]">
      <div className="mt-0 md:mt-0 md:w-full md:pl-12 p-[1.5rem] flex flex-col justify-start items-start">
        <img
          className="hidden md:inline my-[0.15rem]"
          src="/AbstractDesign.png"
          alt=""
        />
        <div className="w-full flex justify-between items-center">
          <div className="w-full h-full">
            <h2 className="text-[2.25rem] md:text-[2.5rem] font-bold mt-3 md:mt-2">
              Featured Properties
            </h2>
            <p className="text-neutral-400 text-sm mt-4 lg:w-[60rem]">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through OE&A. Click &quot;View Details&quot; for more
              information.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-[3rem]">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="border border-gray-900 p-5 rounded-md"
          >
            <img
              src={property.imageUrl}
              alt={property.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4 w-full flex flex-col justify-start items-start">
              <div className="rounded-full font-light mt-[0.4rem] mb-[0.85rem] w-fit p-[0.3rem] px-[0.5rem] border lg:ml-[0.25rem] border-neutral-800 bg-neutral-900 text-xs">
                {property.slug}
              </div>
              <h3 className="text-lg font-bold">{property.title}</h3>
              <p className="text-gray-400 text-sm font-extralight">
                {property.description}
              </p>
              <div className="w-full flex justify-between items-center mt-4">
                <div className="font-semibold w-[58%] h-full flex flex-col justify-start items-start">
                  <p className="text-gray-400 text-xs font-light">Price</p>
                  <p className="text-gray-200 text-lg">{property.price}</p>
                </div>
                <button className="mt-2 w-full text-white text-xs bg-red-700 p-[0.25rem] py-[0.85rem] rounded-md">
                  View Property Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
