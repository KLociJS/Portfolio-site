import './Landing.css'
import Image from './dev.png'

// Icons
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoReact, BiLogoNodejs, BiLogoMongodb, BiLogoPostgresql, BiLogoJavascript } from 'react-icons/bi'
import { SiDotnet } from 'react-icons/si'
import { useEffect, useState } from 'react'

function textWriter(text, setText, isLast, setRunCounter){
  const textArr = text.split('')
  const iterations = new Array(text.length*2).fill('_')
  iterations.forEach((_,i) => {
    if(i<textArr.length){
      setTimeout(()=>{
        setText(prev=>`${prev}${textArr[i]}`)
      },i*100)
    } else{  
      setTimeout(()=>{
        setText(prev=>prev.substring(0,prev.length-1))
        if(isLast && iterations.length-1 === i){
          setTimeout(() => {
            setRunCounter(c=>c+1)
          }, 300);
        }
      },i*100+1000)
    }
  });
}

export default function Landing() {

  const [text,setText] = useState('')
  const [runCounter, setRunCounter] = useState(0)

  useEffect(()=>{
    const listOfDescriptions = ['a Full-stack developer.', 'a problem solver.', 'a critical thinker.', 'a team player.']
    let totalTimeout = 0
    let timers = []
    listOfDescriptions.forEach((description,i)=>{
      let timer = setTimeout(()=>{
        textWriter(description, setText, i===listOfDescriptions.length-1, setRunCounter)
      },totalTimeout)
      timers.push(timer)
      totalTimeout += description.length*200+1000
    })

    return ()=>{
      timers.forEach(timer=>clearTimeout(timer))
    }

  },[runCounter])

  return (
    <section className='landing'>
      <div className='landing-container'>
        <div>
          <h1 className='landing-h1'>Welcome,</h1>
          <h2 className='landing-h2'>My name is Lóránt Kiszner.</h2>
          <p className='landing-p'>I'm {text ? text : ''}|</p>
          <div className='contact-icons'>
            <a href='https://www.linkedin.com/in/lorantkiszner/' rel="noopener noreferrer" target="_blank">
              <BsLinkedin className='linkedin-logo'/>
            </a>
            <a href='https://github.com/KLociJS' rel="noopener noreferrer" target="_blank">
              <BsGithub className='github-logo' />
            </a>
            <a href="mailto: kisznerlorant21@gmail.com">
              <BiLogoGmail className='mail-logo' />
            </a>
          </div>
        </div>
        <div>
          <img src={Image} alt='Developer working on laptop' className='developer-img'/>
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
  )
}
