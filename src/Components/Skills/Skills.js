import SkillBar from './Components/SkillBar'
import './Skills.css'

export default function Skills() {
  return (
    <section id='skills'>
        <div className='skills-container'>
            <h1 className='section-header-dark'>Skills</h1>
            <div className='skills-content'>
                <div className='skills-text-container'>
                    <h2 className='skills-heading'>My developer journey</h2>
                    <p className='skills-description'>I started learning web-development on my own in 2022 january. In this period of time I dived deep into javascript also learned CSS3 and HTML5. At this point I started to think algorithmically. In 2022 october I joined codecool's full-stack online 10 month course. During codecool I practiced teamwork in agile scrum methodology and learned backend programming and git version controll while I kept learning in my own interest.</p>    
                </div>
                <div className='skill-bars'>
                    <SkillBar tech='JavaScript' percentage={90}/>
                    <SkillBar tech='React' percentage={90}/>
                    <SkillBar tech='CSS' percentage={80}/>
                    <SkillBar tech='ASP.NET' percentage={80}/>
                    <SkillBar tech='Git' percentage={70}/>
                    <SkillBar tech='Scrum' percentage={70}/>
                    <SkillBar tech='HTML' percentage={60}/>
                    <SkillBar tech='Figma' percentage={60}/>
                    <SkillBar tech='Express' percentage={60}/>
                    <SkillBar tech='MongoDB' percentage={60}/>
                    <SkillBar tech='PostgreSQL' percentage={50}/>
                </div>
            </div>
        </div>
    </section>
  )
}
