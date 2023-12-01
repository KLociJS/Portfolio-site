import { useState } from "react";
import "./NavBar.css";

// Icons
import { IoIosMenu, IoMdClose } from "react-icons/io";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((s) => !s);
  };
  return (
    <>
      <div className='nav-container'>
        {isOpen ? (
          <IoMdClose className='menu-icon' onClick={toggleMenu} />
        ) : (
          <IoIosMenu className='menu-icon' onClick={toggleMenu} />
        )}
      </div>
      <nav className={`nav-bar ${isOpen ? "open" : ""}`}>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
    </>
  );
}
