import { ReactNode, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const ImageCarousel = ({ children }: { children: ReactNode }) => {
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
    <div className="relative flex justify-center items-center w-full h-full overflow-hidden mt-[-2rem]">
      {/* Previous Arrow */}
      <button
        onClick={prevSlide}
        className="absolute z-30 left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        <BiChevronLeft color="black" />
      </button>

      {/* Carousel Items */}
      <div className="flex justify-center items-center w-full">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-screen h-[21rem] md:h-[23rem] bg-white shadow-lg transform transition-all duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <img
              className="object-cover w-full h-full"
              src={item}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Children Container (Floating) */}
      <div className="absolute z-20 top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        {children}
      </div>

      {/* Next Arrow */}
      <button
        onClick={nextSlide}
        className="absolute z-30 right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
      >
        <BiChevronRight color="black" />
      </button>
    </div>
  );
};

export default ImageCarousel;
