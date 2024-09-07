import React, { useState } from "react";

const PropertyDetails = ({ params }: { params: { id: string } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold">Serenity Villa</h1>
          <p className="text-sm">Chevron Estate</p>
          <p className="text-xl font-semibold mt-2">Price: ₦1,250,000</p>
        </header>

        <div className="mt-8">
          {/* Image Gallery */}
          <div className="flex justify-center space-x-2">
            <img
              src="/path-to-main-image.jpg"
              alt="Main"
              className="w-full h-64 object-cover rounded-md"
            />
            {/* Additional thumbnails can be placed here */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-8">
          <div className="md:w-2/3">
            <h2 className="text-xl font-bold">Description</h2>
            <p>
              Discover your own piece of paradise with the Serenity Villa. With
              an open floor plan, breathtaking ocean views from every room, and
              direct access to a pristine sandy beach, this property is the
              epitome of coastal living.
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-xl font-bold">Key Features and Amenities</h2>
            <ul>
              <li>Expansive oceanfront terrace for outdoor entertaining</li>
              <li>
                Master suite with a spa-inspired bathroom and ocean-facing
                balcony
              </li>
              <li>Private garage and ample storage space</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Comprehensive Pricing Details</h2>
          <div className="flex flex-col md:flex-row justify-between">
            {/* Pricing details here */}
            <div>
              <h3 className="font-bold">Listing Price</h3>
              <p>₦1,250,000</p>
            </div>
            <div>
              <h3 className="font-bold">Additional Fees</h3>
              <p>Property Transfer Tax: ₦25,000</p>
              <p>Legal Fees: ₦3,000</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">
            Inquire About Seaside Serenity Villa
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 bg-gray-800 rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 bg-gray-800 rounded-md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-gray-800 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 bg-gray-800 rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 p-2 rounded-md"
            >
              Send Your Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
