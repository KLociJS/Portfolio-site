import React from "react";

export default function ProjectCard({children, title, githubLink}) {
  return (
    <div className='project-card'>
        {children}
        <h2>{title}</h2>
        <a href={githubLink} rel="noopener noreferrer" target="_blank" className='card-button'>Github</a>
    </div>
  )
}
