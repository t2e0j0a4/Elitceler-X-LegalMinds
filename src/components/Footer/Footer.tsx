import React from 'react'
import styles from "./Footer.module.css";
import FootLogo from "../../assets/FootLogo.png";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { MdCall, MdMail, MdLocationPin } from "react-icons/md";

const Footer = () => {

  const { app__footer, footer__center, footer__side1, socials, footer__side2, side2__main, copyright } = styles;

  return (
    <footer className={app__footer}>
      <div className={footer__center}>

        {/* Side 1 - Logo */}
        <div className={footer__side1}>
          <img src={FootLogo} alt='LegalMinds' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum velit voluptatibus modi doloribus hic adipisci illo quasi, molestiae perferendis quaerat.</p>
          <div className={socials}>
            <a href="/" target='_blank' title='Facebook' rel='noopener noreferrer'><BsFacebook aria-label='Facebook' fontSize={26} color='#FFF'/></a>
            <a href="/" target='_blank' title='Twitter' rel='noopener noreferrer'><BsTwitter aria-label='Twitter' fontSize={26} color='#FFF'/></a>
            <a href="/" target='_blank' title='LinkedIn' rel='noopener noreferrer'><BsLinkedin aria-label='Linkedin' fontSize={26} color='#FFF'/></a>
          </div>
        </div>

        {/* Side 2 - Contact Us */}
        <div className={footer__side2}>
          <h3>Office Info</h3>
          <ul className={side2__main}>
            <li>
              <MdCall aria-label='Call' fontSize={24} color='#FFF'/>
              <a title='Call' href="tel: 919866333316" target='_blank' rel='noopener noreferrer'>+91 9866333316</a>
            </li>
            <li>
              <MdMail aria-label="Mail" fontSize={24} color='#FFF'/>
              <a title='Mail' href="mailto: indianleagalminds@gmail.com" target='_blank' rel='noopener noreferrer'>indianleagalminds@gmail.com</a>
            </li>
            <li>
              <MdLocationPin aria-label='Location' fontSize={24} color='#FFF'/>
              <a title='Location' href="https://goo.gl/maps/p1uknr6jHMYVia1D6" target='_blank' rel='noopener noreferrer'>#6-1-69/6, SR Apt. Saifabad, Hyderabad-4, Telangana, India</a>
            </li>
          </ul>
        </div>

      </div>

      <div className={copyright}>
        <p>Copyright &copy; 2023, Legal Minds. All Rights Reserved</p>
      </div>

    </footer>
  )
}

export default Footer