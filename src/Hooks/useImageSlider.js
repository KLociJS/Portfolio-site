import { useState } from "react";

export default function useImageSlider(imagesLength) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imagesLength - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imagesLength - 1 ? 0 : prevIndex + 1
    );
  };

  const transformValue = `translateX(calc(-${100 * currentImageIndex}%))`;

  return {
    currentImageIndex,
    prevSlide,
    nextSlide,
    transformValue,
  };
}
