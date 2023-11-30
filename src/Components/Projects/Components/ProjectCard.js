import React, { useState } from "react";

import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosLink,
  IoLogoGithub,
  IoMdOpen,
} from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function ProjectCard({
  thumbnail,
  title,
  projectType,
  stack,
  githubUrl,
  websiteUrl,
  description,
  images,
}) {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => {
    setShowModal(true);
  };

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
      <p className='project-stack'>{stack}</p>
      {thumbnail}

      {websiteUrl ? (
        <a
          href={websiteUrl}
          target='_blank'
          rel='noreferrer'
          className='card-live-site-button'
        >
          Website <IoIosLink className='card-icon' />
        </a>
      ) : null}

      <a
        href={githubUrl}
        target='_blank'
        rel='noreferrer'
        className='card-github-button'
      >
        GitHub <IoLogoGithub className='card-icon' />
      </a>

      <button onClick={openModal} className='card-learn-more-button'>
        Learn more <IoMdOpen className='card-icon' />
      </button>

      {showModal ? (
        <div className='modal'>
          <button onClick={closeModal} className='close-button'>
            <IoClose className='close-icon' />
          </button>

          <p className='project-type'>{projectType}</p>
          <h2 className='project-title'>{title}</h2>
          <p className='project-description'>{description}</p>
          <div>
            <a href={githubUrl} target='_blank' rel='noreferrer'>
              <IoLogoGithub className='preview-icon' />
            </a>

            <a href={websiteUrl} target='_blank' rel='noreferrer'>
              <IoIosLink className='preview-icon' />
            </a>
          </div>

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
        </div>
      ) : null}
    </div>
  );
}
