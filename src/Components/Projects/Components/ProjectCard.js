import React from "react";

import { IoIosLink, IoLogoGithub } from "react-icons/io";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({
  thumbnail,
  title,
  projectType,
  stack,
  hasDetails = true,
  githubUrl,
  websiteUrl,
  description,
  images,
}) {
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

      {hasDetails ? (
        <ProjectModal
          images={images}
          projectType={projectType}
          title={title}
          description={description}
          githubUrl={githubUrl}
          websiteUrl={websiteUrl}
        />
      ) : null}
    </div>
  );
}
