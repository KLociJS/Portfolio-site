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
  return (
    <section id='projects'>
      <div className='project-section-container'>
        <h2 className='section-header-light'>My projects</h2>
        <div className='project-container'>
          <ProjectCard
            stack='React JS'
            projectType='Solo Project'
            title='Portfolio project'
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
            githubUrl='https://github.com/KLociJS/Portfolio-site'
            images={[]}
            thumbnail={
              <img
                src={PortfolioThumbnail}
                alt='Portfolio website thumbnail'
                className='thumbnail'
              />
            }
          ></ProjectCard>
          <ProjectCard
            stack='React JS / .NET / PostgreSQL'
            projectType='Solo Project'
            title='Learning app'
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
            images={[WdnHome, WdnNote, WdnProfile]}
            githubUrl='https://github.com/KLociJS/LearningApp'
            websiteUrl='http://52.57.115.197/'
            thumbnail={
              <img
                src={LearningAppThumbnail}
                alt='Learning app website thumbnail'
                className='thumbnail'
              />
            }
          ></ProjectCard>
          <ProjectCard
            stack='React JS / .NET / PostgreSQL'
            projectType='Team Project'
            title='Eventure'
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard "
            githubUrl='https://github.com/KLociJS/Advanced-team-project'
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
