import React from "react";
import { createPortal } from "react-dom";
import { IoIosLink, IoLogoGithub, IoMdOpen } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import useModal from "../../../Hooks/useModal";
import ImageSlider from "./ImageSlider";

export default function ProjectModal({
  images,
  projectType,
  title,
  description,
  githubUrl,
  websiteUrl,
}) {
  const { showModal, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal} className='card-learn-more-button'>
        Learn more <IoMdOpen className='card-icon' />
      </button>

      {showModal
        ? createPortal(
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

                {websiteUrl ? (
                  <a href={websiteUrl} target='_blank' rel='noreferrer'>
                    <IoIosLink className='preview-icon' />
                  </a>
                ) : null}
              </div>

              <ImageSlider images={images} />
            </div>,
            document.body
          )
        : null}
    </>
  );
}
