import Portrait from "../../Assets/prfl.jpg";
import useObserveSection from "../../Hooks/useObserveSection";
import "./About.css";

export default function About() {
  const [aboutRef, visibleElement] = useObserveSection();

  const isVisible = visibleElement?.target === aboutRef.current;

  return (
    <section
      id='about'
      ref={aboutRef}
      className={`${isVisible ? "visible" : ""}`}
    >
      <div className='about-container'>
        <div className='portrait-container'>
          <img
            src={Portrait}
            alt='Portrait of Lóránt Kiszner'
            className='portrait'
          />
        </div>
        <div className='intro-container'>
          <h2 className='white-h2'>About me</h2>
          <p className='white-p'>
            A web developer passionate about efficiency and the art of
            problem-solving. For over two years, I've immersed myself in the
            world of web development, driven by a fascination with understanding
            how things work. I'm an avid observer, seeking to unravel
            complexities without judgment, and I'm continually inspired by the
            innovative solutions people have crafted.
          </p>
          <p className='white-p'>
            My goal is to contribute my own groundbreaking solutions someday.
            Efficiency is my mantra, whether it's streamlining code or
            optimizing daily routines. I believe in working smarter to achieve
            exceptional results. I'm a firm believer in the power of teamwork,
            and I'm always looking for new opportunities to collaborate with
            others.
          </p>
        </div>
      </div>
    </section>
  );
}
