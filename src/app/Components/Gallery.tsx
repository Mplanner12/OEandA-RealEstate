import React from "react";

const Gallery = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-[2rem] md:p-[4rem] my-[1.5rem] mb-[4.5rem] md:px-[6rem]">
      <div className="z-30 p-[2rem] text-black w-full h-full flex flex-col justify-start items-center ">
        <h1 className="text-[2.5rem] font-bold">Gallery</h1>
        <p className="text-center text-[0.8rem] py-[1rem] w-full md:w-[32%]">
          AATC is a premier, purpose-built commercial property located in the
          heart of Abuja’s Central Business District.
        </p>
      </div>
      <div className="z-20 mx-auto object-contain rounded-lg mb-[4rem] lg:mb-[1rem] border-3 border-teal-700 w-full lg:h-[35rem] lg:py-[0rem] bg-teal-700 lg:flex justify-center items-center">
        <video
          className="w-full lg:w-full h-full rounded-lg flex justify-center object-cover items-center"
          src="/Hvideo1.mp4"
          controls
          muted
          autoPlay
        />
      </div>
    </div>
  );
};

export default Gallery;
