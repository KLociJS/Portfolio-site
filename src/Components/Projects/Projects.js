import ProjectCard from "./Components/ProjectCard";
import "./Projects.css";

// Thumbnails
import PortfolioThumbnail from "../../Assets/portfolio-thumbnail.png";
import LearningAppThumbnail from "../../Assets/wdn-thumbnail.png";

// WDN images
import WdnHome from "../../Assets/wdn-home.png";
import WdnNote from "../../Assets/wdn-note.png";
import WdnProfile from "../../Assets/wdn-profile.png";

// Eventure images
import EventureCreate from "../../Assets/eventure-create.png";
import EventureDashboard from "../../Assets/eventure-dashboard.png";
import EventureEvents from "../../Assets/eventure-events.png";
import useObserveSection from "../../Hooks/useObserveSection";

export default function Projects() {
  const [projectsRef, visibleElements] = useObserveSection();
  const isVisible = visibleElements.find((e) => e.target.id === "projects");

  return (
    <section
      id='projects'
      className={`${isVisible ? "visible" : ""}`}
      ref={projectsRef}
    >
      <div className='project-section-container'>
        <h2 className='section-header-light'>projects</h2>
        <div className='project-container'>
          <ProjectCard
            stack='React JS'
            projectType='Solo Project'
            title='Portfolio project'
            description='A web app developed with React js. Showcasing my projects and skills.'
            githubUrl='https://github.com/KLociJS/Portfolio-site'
            images={[]}
            hasDetails={false}
            thumbnail={
              <img
                src={PortfolioThumbnail}
                alt='Portfolio website thumbnail'
                className='thumbnail'
              />
            }
          ></ProjectCard>
          <ProjectCard
            stack='React JS / .NET / PostgreSQL / Docker'
            projectType='Solo Project'
            title='Web Dev Notes'
            description="A web app developed with React js, ASP.NET Web api, PostgreSQL. A role based app, with user, author, moderator and admin roles. It's a note taking app for web developers. You can create, edit, delete notes, organize and also share them with other users."
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
            stack='React JS / .NET / PostgreSQL / Docker'
            projectType='Team Project'
            title='Eventure'
            description='A web app developed with React js, ASP.NET Web api, PostgreSQL. Its an event management app. You can create, edit, delete events and join them. Developed by a team of 3 applying agile methodology.'
            images={[EventureEvents, EventureDashboard, EventureCreate]}
            githubUrl='https://github.com/KLociJS/Advanced-team-project'
            thumbnail={
              <img
                src={EventureEvents}
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
