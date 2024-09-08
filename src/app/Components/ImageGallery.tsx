/* eslint-disable @next/next/no-img-element */
import React from "react";

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
    <div className="mt-8 p-4 lg:p-[2.25rem] lg:pb-[3.5rem] rounded-lg bg-neutral-900">
      {/* Placeholder for image slider */}
      <div className="flex justify-center space-x-2">
        {property && (
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-64 object-cover rounded-md"
          />
        )}
        {/* Additional thumbnails can be placed here */}
      </div>
    </div>
  );
};

export default ImageGallery;
