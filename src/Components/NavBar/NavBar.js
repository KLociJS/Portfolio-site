import { useState } from 'react'
import './NavBar.css'

// Icons
import { SlMenu } from 'react-icons/sl'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <SlMenu className='menu-icon' onClick={()=>setIsOpen(s=>!s)}/>
        <nav className={`nav-bar ${isOpen ? 'open' : ''}`}>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
          <a href='#featured'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
    </>
  )
}
