import styles from "./Navbar.module.css";
import Logo from "../../assets/NavLogo.png";
import React, { useState } from 'react'
import { GoMail } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const { app__navbar, nav__center, nav__logo, nav__menu, menu__links, icon__links, nav__smscreen, selected, menu__open } = styles;

  const [ menuToggle, setMenuToggle ] = useState<boolean>(false);

  const location = useLocation();

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (window.scrollY > 200) {
        setMenuToggle(false);
      }
    }, 0);

    return () => {clearInterval(interval);}
  }, []);

  return (
    <nav className={app__navbar}>
      <div className={nav__center}>

        {/* Logo */}
        <div className={nav__logo}>
          <Link to='/'><img src={Logo} alt="Legal Minds"/></Link>
        </div>

        {/* Navigations */}
        <div className={`${nav__menu} ${menuToggle && menu__open}`}>
          
          {/* Links */}
          <div className={menu__links}>
            <Link to="/" onClick={() => {setMenuToggle(false)}} className={`${location.pathname === '/' && selected}`}>Home</Link>
            <a href="/" onClick={() => {setMenuToggle(false)}} target='_blank' rel='noopener noreferrer'>Instagram</a>
            <a href="/" onClick={() => {setMenuToggle(false)}} target='_blank' rel='noopener noreferrer'>Twitter</a>
            <a href="/" onClick={() => {setMenuToggle(false)}} target='_blank' rel='noopener noreferrer'>Facebook</a>
          </div>

          {/* Icon Links */}
          <div className={icon__links}>
            <a title="Location" href="https://goo.gl/maps/p1uknr6jHMYVia1D6" target='_blank' rel='noopener noreferrer'><SlLocationPin aria-label="Location"/></a>
            <a title="Mail" href="mailto: indianleagalminds@gmail.com" target='_blank' rel='noopener noreferrer'><GoMail aria-label="Mail"/></a>
          </div>

        </div>

        {/* Small Screen Menu Options */}
        <div className={nav__smscreen}>
          <button aria-label="Menu" type='button' className={`${menuToggle && menu__open}`} onClick={() => {setMenuToggle(!menuToggle)}}>
            <HiOutlineMenu fontSize={28} color={`${menuToggle ? '999999' : '#232323'}`}/>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar

// btn__cta