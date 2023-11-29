import { useEffect, useRef, useState } from "react";
import ProjectCard from "./Components/ProjectCard";
import "./Projects.css";

// Thumbnails
import EventureThumbnail from "./images/calendar.png";
import LearningAppThumbnail from "./images/learning.png";
import PortfolioThumbnail from "./images/portfolio.png";

// WDN images
import WdnHome from "../../Assets/wdn-home.png";
import WdnNote from "../../Assets/wdn-note.png";
import WdnProfile from "../../Assets/wdn-profile.png";

export default function Projects() {
  const projectSectionRef = useRef(null);
  const [element, setElement] = useState(null);

  useEffect(() => {
    setElement(projectSectionRef.current);
  }, []);

  return (
    <section id='projects' ref={projectSectionRef}>
      <div className='project-section-container'>
        <h2 className='section-header-light'>My projects</h2>
        <div className='project-container'>
          <ProjectCard
            parentRef={element}
            projectType='Solo Project'
            title='Portfolio project'
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
            githubLink='https://github.com/KLociJS/Portfolio-site'
            images={[WdnHome, WdnNote, WdnProfile]}
            thumbnail={
              <img
                src={PortfolioThumbnail}
                alt='Portfolio website thumbnail'
                className='thumbnail'
              />
            }
          ></ProjectCard>
          <ProjectCard
            parentRef={element}
            projectType='Solo Project'
            title='Learning app'
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
            githubLink='https://github.com/KLociJS/LearningApp'
            thumbnail={
              <img
                src={LearningAppThumbnail}
                alt='Learning app website thumbnail'
                className='thumbnail'
              />
            }
          ></ProjectCard>
          <ProjectCard
            parentRef={element}
            projectType='Team Project'
            title='Eventure'
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
            githubLink='https://github.com/KLociJS/Advanced-team-project'
            thumbnail={
              <img
                src={EventureThumbnail}
                alt='Eventure website thumbnail'
                className='thumbnail'
              />
            }
          ></ProjectCard>
        </div>
      </div>
    </section>
  );
}
