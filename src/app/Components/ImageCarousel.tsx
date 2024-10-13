import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    "AATC EXTERIOR 01.png",
    "AATC EXTERIOR 04.png",
    "AATC EXTERIOR 02.png",
    "AATC EXTERIOR 05.png",
    "AATC EXTERIOR 03.png",
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative flex justify-center items-center w-full h-[30rem] bg-teal-700 overflow-hidden mt-[-2rem]">
      {/* Previous Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        <BiChevronLeft color="black" />
      </button>

      {/* Carousel Items */}
      <div className="flex justify-center items-center gap-x-4">
        {items.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className={`w-[23rem] h-[23rem] bg-white shadow-lg rounded-lg transform transition-all duration-500 ${
              index === currentIndex
                ? "scale-110 rotate-0"
                : index === (currentIndex - 1 + items.length) % items.length
                ? "rotate-6"
                : "rotate-[-6deg]"
            }`}
          >
            <img className="object-cover w-full h-full" src={item} />
          </div>
        ))}
      </div>

      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        <BiChevronRight color="black" />
      </button>
    </div>
  );
};

export default ImageCarousel;
