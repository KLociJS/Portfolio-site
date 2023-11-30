import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useImageSlider from "../../../Hooks/useImageSlider";

export default function ImageSlider({ images }) {
  const { currentImageIndex, prevSlide, nextSlide, transformValue } =
    useImageSlider(images.length);

  return (
    <div className='slider-wrapper'>
      <div className='slider' style={{ transform: transformValue }}>
        {images.map((image, index) => (
          <div className='slide'>
            <img
              key={index}
              src={image}
              alt={`Project ${index}`}
              className='modal-image'
            />
          </div>
        ))}
      </div>

      {currentImageIndex > 0 ? (
        <button
          onClick={prevSlide}
          disabled={currentImageIndex === 0}
          className='prev-button'
        >
          <IoIosArrowBack className='prev-icon' />
        </button>
      ) : null}

      {currentImageIndex < images.length - 1 ? (
        <button
          onClick={nextSlide}
          disabled={currentImageIndex + 1 === images.length}
          className='next-button'
        >
          <IoIosArrowForward className='next-icon' />
        </button>
      ) : null}
    </div>
  );
}
