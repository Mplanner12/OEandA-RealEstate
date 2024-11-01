import React from "react";

const Gallery = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center p-[2rem] md:p-[4rem] my-[1.5rem] mb-[4.5rem] md:px-[6rem]">
      <div className="z-30 lg:p-[2rem] md:w-fit text-center text-black w-full h-full flex flex-col justify-start items-center ">
        <h1 className="text-[2.5rem] font-bold"> Abuja-AATC Full View Tour</h1>
        {/* <p className="text-center text-[0.8rem] py-[1rem] w-full md:w-[32%]">
          AATC is a premier, purpose-built commercial property located in the
          heart of Abuja’s Central Business District.
        </p> */}
      </div>
      <div className="z-20 mx-auto mt-[2.75rem] object-contain rounded-lg mb-[4rem] lg:mb-[1rem] border-3 border-teal-700 w-full lg:h-[35rem] lg:py-[0rem] bg-teal-700 lg:flex justify-center items-center">
        {/* <video
          className="w-full lg:w-full h-full rounded-lg flex justify-center object-cover items-center"
          src="/GVideo.mp4"
          controls
          muted
          autoPlay
        /> */}
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/VFgPHZVSn6o"
          title="AATC INTERIOR AND EXTERIOR   FLYTHROUGH VIDEO"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Gallery;
