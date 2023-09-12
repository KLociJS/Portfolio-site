import ProjectCard from './Components/ProjectCard'
import PortfolioThumbnail from './images/portfolio.png'
import LearningAppThumbnail from './images/learning.png'
import EventureThumbnail from './images/calendar.png'
import './Projects.css'


export default function Projects() {
  return (
    <section id='featured'>
        <div className='project-section-container'>
            <h2 className='section-header-light'>My projects</h2>
            <div className='project-container'>
                <ProjectCard title='Portfolio project' githubLink='https://github.com/KLociJS/Portfolio-site'>
                    <img 
                        src={PortfolioThumbnail} 
                        alt='Portfolio website thumbnail' 
                        className='thumbnail'
                    />
                </ProjectCard>
                <ProjectCard title='Learning app' githubLink='https://github.com/KLociJS/LearningApp'>
                    <img 
                        src={LearningAppThumbnail} 
                        alt='Learning app website thumbnail' 
                        className='thumbnail'
                    />
                </ProjectCard>
                <ProjectCard title='Eventure' githubLink='https://github.com/KLociJS/Advanced-team-project'>
                    <img 
                        src={EventureThumbnail} 
                        alt='Eventure website thumbnail' 
                        className='thumbnail'
                    />
                </ProjectCard>
            </div>
        </div>
    </section>
  )
}
