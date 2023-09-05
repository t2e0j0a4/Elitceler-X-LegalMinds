import styles from "./Navbar.module.css";
import Logo from "../../assets/NavLogo.png";
import { useState } from 'react'
import { GoMail } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const { app__navbar, nav__center, nav__logo, nav__menu, menu__links, icon__links, btn__cta, nav__smscreen, selected, scaleupcenter } = styles;

  const [ menuToggle, setMenuToggle ] = useState<boolean>(false);

  const location = useLocation();

  return (
    <nav className={app__navbar}>
      <div className={nav__center}>

        {/* Logo */}
        <div className={nav__logo}>
          <img src={Logo} alt="Legal Minds" />
        </div>

        {/* Navigations */}
        <div className={`${nav__menu} ${menuToggle && scaleupcenter}`}>
          
          {/* Links */}
          <div className={menu__links}>
            <Link to="/" onClick={() => {setMenuToggle(false)}} className={`${location.pathname === '/' && selected}`}>Home</Link>
            <a href="/" onClick={() => {setMenuToggle(false)}} target='_blank' rel='noopener noreferrer'>Instagram</a>
            <a href="/" onClick={() => {setMenuToggle(false)}} target='_blank' rel='noopener noreferrer'>Twitter</a>
            <a href="/" onClick={() => {setMenuToggle(false)}} target='_blank' rel='noopener noreferrer'>Facebook</a>
          </div>

          {/* Icon Links */}
          <div className={icon__links}>
            <a href="/" target='_blank' rel='noopener noreferrer'><SlLocationPin/></a>
            <a href="/" target='_blank' rel='noopener noreferrer'><GoMail/></a>
          </div>

          {/* Constultation Button */}
          <Link to='/consultation' className={btn__cta}>Book a Consultation</Link>

        </div>

        {/* Small Screen Menu Options */}
        <div className={nav__smscreen}>
          <button type='button' onClick={() => {setMenuToggle(!menuToggle)}}>
            {
              !menuToggle ? <HiOutlineMenu fontSize={28} color="#232323"/> : <IoCloseOutline fontSize={28} color="#232323"/>
            }
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar