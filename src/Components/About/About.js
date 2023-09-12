import './About.css'
import Portrait from './prfl.jpg'

export default function About() {
  return (
    <section id='about'>
        <div className='about-container'>
            <img src={Portrait} alt='Portrait of Lóránt Kiszner' className='portrait'/>
            <div>
                <h2 className='white-h2'>About me</h2>
                <p className='white-p'>I've led an unconventional life so far. I had the opportunity not to work for 8 years during which I trained dogs, learned to build and repair various things. I love nature, often exploring off-road paths. Additionally, I spent a significant portion of my time in a complex online game where our team ranked in the top 100 out of 3 million players. This experience allowed me to practice teamwork and solving complex problems, either individually or collaboratively. All of this contributed to shaping my open-minded, critical, analytical, creative, independent, and persevering personality.</p>
            </div>
        </div>
    </section>
  )
}
