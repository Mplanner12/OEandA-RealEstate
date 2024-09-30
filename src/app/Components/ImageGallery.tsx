/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { BsTextarea } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaBath, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoBedSharp } from "react-icons/io5";

interface Property {
  id: number;
  title: string;
  location: string;
  status: string;
  slug: string;
  description: string;
  price: string;
  imageUrl: string;
  imageUrls: string[];
  bedroomNo?: string;
  bathroomNo?: string;
}

const ImageGallery: React.FC<{ property: Property | undefined }> = ({
  property,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (!property || !property.imageUrls || property.imageUrls.length === 0)
      return;
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % property?.imageUrls?.length
    );
  };

  const handlePrevImage = () => {
    if (!property || !property.imageUrls || property.imageUrls.length === 0) {
      return;
    }
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + property?.imageUrls?.length) %
        property?.imageUrls?.length
    );
  };

  return (
    <div className="mt-8 p-4 lg:p-[2.25rem] lg:pb-[3.5rem] rounded-lg bg-neutral-950">
      <div className="flex justify-center space-x-2">
        {property &&
          property.imageUrls.length &&
          property.imageUrls.length > 0 && (
            <div className="w-full h-full flex flex-col md:flex-row justify-between items-center">
              {/* Image Slider */}
              <div className="w-full h-full flex flex-col-reverse justify-start items-center">
                <div className="relative w-full p-[1.25rem] bg-neutral-900 rounded-lg h-full flex flex-col justify-center items-start">
                  <img
                    src={property.imageUrls[currentImageIndex]}
                    alt={property.title}
                    className="w-full h-64 object-cover rounded-md"
                  />
                  {/* Previous Button */}
                  <div className="w-full h-[4rem] flex space-x-[11rem] relative rounded-full shadow-lg top-[1rem] left-[-2rem] justify-center items-center">
                    <button
                      onClick={handlePrevImage}
                      className="absolute top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-50 hover:opacity-80 rounded-full p-2"
                    >
                      <FaArrowLeft className="text-white" />
                    </button>
                    <div className="w-fit relative left-[-2.75rem] top-[-0.35rem]">
                      _ _ _
                    </div>
                    {/* Next Button */}
                    <button
                      onClick={handleNextImage}
                      className="absolute top-1/2 transform -translate-y-1/2 bg-gray-800 opacity-50 hover:opacity-80 rounded-full p-2"
                    >
                      <FaArrowRight className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Image Thumbnails */}
                {property &&
                  property.imageUrls &&
                  Array.isArray(property.imageUrls) &&
                  property.imageUrls.length > 0 && (
                    <div className="flex w-full justify-start items-center p-3 bg-neutral-950 z-20 mt-[0.75rem] shadow-lg border-neutral-900 border rounded-xl gap-x-3">
                      {property?.imageUrls?.map((imageUrl, index) => (
                        <img
                          key={index}
                          src={imageUrl}
                          alt={`Thumbnail ${index + 1}`}
                          className={`w-36 h-24 object-cover rounded-md cursor-pointer ${
                            index === currentImageIndex
                              ? "border-2 border-red-500"
                              : ""
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  )}
              </div>

              {/* Property Details */}
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
                    {property.bedroomNo ? (
                      <div className="w-full h-full flex flex-col justify-start items-center gap-y-2">
                        <div className="w-full h-full gap-x-2 flex justify-start items-center">
                          <IoBedSharp size={24} />
                          <p className="text-sm font-light text-neutral-400">
                            Bedrooms
                          </p>
                        </div>
                        <p className="text-lg font-semibold w-full h-full flex justify-start items-center">
                          {property.bedroomNo}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
                    {property.bedroomNo ? (
                      <div className="w-full h-full flex flex-col justify-start items-center gap-y-2 pl-[0.85rem] border-l border-neutral-800">
                        <div className="w-full h-full gap-x-2 flex justify-start items-center">
                          <FaBath size={24} />
                          <p className="text-sm font-light text-neutral-400">
                            Bathrooms
                          </p>
                        </div>
                        <p className="text-lg font-semibold w-full h-full flex justify-start items-center">
                          {property.bathroomNo}
                        </p>
                      </div>
                    ) : (
                      ""
                    )}
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
      </div>
    </div>
  );
};

export default ImageGallery;
