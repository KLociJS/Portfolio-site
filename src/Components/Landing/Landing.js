//Assets
import Image from "../../Assets/dev.png";
import "./Landing.css";

//Hooks
import useTypeAnimation from "../../Hooks/useTypeAnimation";

// Icons
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoGmail,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
} from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiDotnet } from "react-icons/si";

export default function Landing() {
  const [text] = useTypeAnimation();

  return (
    <section className='landing'>
      <div className='landing-container'>
        <div>
          <h1 className='landing-h1'>Hello,</h1>
          <h2 className='landing-h2'>My name is Lóránt Kiszner.</h2>
          <p className='landing-p'>I'm {text ? text : ""}|</p>
          <div className='contact-icons'>
            <a
              href='https://www.linkedin.com/in/lorantkiszner/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <BsLinkedin className='linkedin-logo' />
            </a>
            <a
              href='https://github.com/KLociJS'
              rel='noopener noreferrer'
              target='_blank'
            >
              <BsGithub className='github-logo' />
            </a>
            <a href='mailto: kisznerlorant21@gmail.com'>
              <BiLogoGmail className='mail-logo' />
            </a>
          </div>
        </div>
        <div>
          <img
            src={Image}
            alt='Developer working on laptop'
            className='developer-img'
          />
          <div className='icon-container'>
            <AiFillHtml5 className='html-logo' />
            <BiLogoCss3 className='css-logo' />
            <BiLogoJavascript className='js-logo' />
            <BiLogoReact className='react-logo' />
            <BiLogoNodejs className='node-logo' />
            <BiLogoMongodb className='mongo-logo' />
            <SiDotnet className='dotnet-logo' />
            <BiLogoPostgresql className='postgresql-logo' />
          </div>
        </div>
      </div>
    </section>
  );
}
