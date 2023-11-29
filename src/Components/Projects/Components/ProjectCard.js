import React, { useState } from "react";
import { createPortal } from "react-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function ProjectCard({
  thumbnail,
  title,
  projectType,
  description,
  githubLink,
  images,
  parentRef,
}) {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => {
    setShowModal(true);
  };

  console.log(parentRef);

  const closeModal = () => {
    setShowModal(false);
    setCurrentImageIndex(0); // Reset image index when closing modal
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const transformValue = `translateX(calc(-${100 * currentImageIndex}%))`;

  return (
    <div className='project-card'>
      <p className='project-type'>{projectType}</p>
      <h2 className='project-title'>{title}</h2>
      <p className='project-description'>{description}</p>
      {thumbnail}
      <button onClick={openModal} className='card-button'>
        Learn more
      </button>
      {showModal &&
        createPortal(
          <div className='modal'>
            <button onClick={closeModal} className='close-button'>
              <IoClose className='close-icon' />
            </button>
            <p className='project-type'>{projectType}</p>
            <h2 className='project-title'>{title}</h2>
            <p className='project-description'>{description}</p>
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
          </div>,
          parentRef
        )}
    </div>
  );
}
