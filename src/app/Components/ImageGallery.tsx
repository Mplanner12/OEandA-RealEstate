/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsTextarea } from "react-icons/bs";
import { FaBath } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";

// Define an interface for the property object
interface Property {
  id: number;
  title: string;
  slug: string;
  location: string;
  description: string;
  price: string;
  imageUrl: string;
}

// Update the ImageGallery component to accept the property prop
const ImageGallery: React.FC<{ property: Property | undefined }> = ({
  property,
}) => {
  return (
    <div className="mt-8 p-4 lg:p-[2.25rem] lg:pb-[3.5rem] rounded-lg bg-neutral-950">
      {/* Placeholder for image slider */}
      <div className="flex justify-center space-x-2">
        {property && (
          <div className="w-full h-full flex flex-col md:flex-row justify-between items-center">
            <div className="w-full p-[1.25rem] bg-neutral-900 rounded-lg h-full flex justify-center items-center">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
            <div className="w-full h-full flex flex-col py-[0.85rem] px-[2.25rem] justify-start items-start">
              <div className="rounded-full font-light mt-[0.4rem] text-white mb-[0.85rem] w-fit p-[0.3rem] px-[0.5rem] border lg:ml-[0.25rem] border-neutral-800 bg-neutral-900 text-xs">
                {property.slug}
              </div>
              <h3 className="w-full text-start text-lg font-bold uppercase text-white">
                {property.title}
              </h3>
              <div className="w-full h-full flex flex-col justify-start items-start mt-[2rem]">
                <h1 className="text-gray-50 text-sm font-light w-full text-start">
                  Description
                </h1>
                <p className="text-gray-400 capitalize h-[5rem] text-sm font-extralight">
                  {property.description}
                </p>
                <div className="w-full h-full flex justify-start items-center gap-x-4 mt--4 pt-4 border-t border-neutral-800">
                  <div className="w-full h-full flex flex-col justify-start items-center gap-y-2">
                    <div className="w-full h-full gap-x-2 flex justify-start items-center">
                      <IoBedSharp size={24} />
                      <p className="text-sm font-light text-neutral-400">
                        Bedrooms
                      </p>
                    </div>
                    <p className="text-lg font-semibold w-full h-full flex justify-start items-center">
                      04
                    </p>
                  </div>
                  <div className="w-full h-full flex flex-col justify-start items-center gap-y-2 pl-[0.85rem] border-l border-neutral-800">
                    <div className="w-full h-full gap-x-2 flex justify-start items-center">
                      <FaBath size={24} />
                      <p className="text-sm font-light text-neutral-400">
                        Bathrooms
                      </p>
                    </div>
                    <p className="text-lg font-semibold w-full h-full flex justify-start items-center">
                      03
                    </p>
                  </div>
                  <div className="w-full h-full flex flex-col justify-start items-center gap-y-2 pl-[0.85rem] border-l border-neutral-800">
                    <div className="w-full h-full gap-x-2 flex justify-start items-center">
                      <BsTextarea size={24} />
                      <p className="text-sm font-light text-neutral-400">
                        Area
                      </p>
                    </div>
                    <p className="text-[0.85rem] font-semibold w-full h-full flex justify-start items-center">
                      2,500 Square Feet
                    </p>
                  </div>
                </div>
                <div className="w-full h-full font-semibold flex justify-start items-center mt-[1.5rem] text-[2.5rem]">
                  {property.price}
                </div>
                <button className="w-fit px-[2.25rem] rounded-lg py-3 font-semibold mt-[2rem] bg-red-600">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Additional thumbnails can be placed here */}
      </div>
    </div>
  );
};

export default ImageGallery;
