import React, { useState } from 'react'
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import About from "../../assets/homeAbout.svg";
import { homeShowSeaches, homeServicesMenu, homeFAQ, homeTestimonials, homeTeam } from '../../constants';
import { MdKeyboardArrowDown } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = () => {

  const { app__home, home__section1, section1__center, section1__subhead, section1__services, some__popular, section1__cta, home__section2, section2__center, section2__main, section2__about, home__section4, section4__center, why__us, services, all__services, each__service, home__section5, section5__center, all__faqs, each__faq, faq__question, faq__answer, open__answer, home__section6, section6__center, section6__main, each__testimonial, testimonial__detail, testimonial__review, home__section7, section7__center, section7__main, each__member, member__details, member__socials, home__section8, section8__center, section8__main } = styles;

  const [ currentFAQ, setCurrentFAQ ] = useState<number>(1);

  return (
    <main className={app__home}>

      {/* Section 1 - Search Service */}

      <section className={home__section1}>
        <div className={section1__center}>

          <div className={section1__subhead}>
            <h2>Tag Line Here</h2>
            <p>Any Other Sentence</p>
          </div>

          <div className={section1__services}>
            <h3>Popular Services</h3>
            <div className={some__popular}>
              {
                homeShowSeaches.map((item) => {
                  return (
                    <Link key={item.id} to={`${item.queryName}`} className='service__show'>{item.service}</Link>
                  )
                })
              }
            </div>
          </div>

          <div className={section1__cta}>
            <Link to='/consultation?serviceType=free'>Book a Free Consultation</Link>
            <a href="#services">Our Services</a>
          </div>

        </div>
      </section>

      {/* Section 1 - Search Service */}

      {/* Section 2 - About Us */}

      <section className={home__section2}>
        <div className={section2__center}>

          <h2>About Us</h2>

          <div className={section2__main}>
            <img src={About} alt="Legal Minds" />
            <div className={section2__about}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Section 2 - About Us */}

      {/* Section 3 - Our Trusted Partners */}

      {/* Adding Soon... */}

      {/* Section 3 - Our Trusted Partners */}

      {/* Section 4 - Why Us & Our Services */}

      <section className={home__section4}>
        <div className={section4__center}>

          {/* Why Us ? */}
          <div className={why__us}>

            <h2>Why Us ?</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          {/* Services */}
          <div className={services} id='services'>

            <h2>Our Services</h2>

            <div className={all__services}>
              {
                homeServicesMenu.map((item) => {
                  return (
                    <Link className={each__service} key={item.id} to={`${item.queryName}`}>
                      <img src={item.icon} alt={item.service} />
                      <p>{item.service}</p>
                    </Link>
                  )
                })
              }
            </div>
          </div>

        </div>
      </section>

      {/* Section 4 - Why Us & Our Services */}

      {/* Section 5 - FAQ's */}

      <section className={home__section5}>
        <div className={section5__center}>
          
          <h2>FAQ's</h2>
          
          <div className={all__faqs}>
            {
              homeFAQ?.map((item) => {
                return (
                  <div key={item.id} className={each__faq}>

                    <div className={`${faq__question} ${currentFAQ === item.id && open__answer}`} onClick={() => {setCurrentFAQ(item.id === currentFAQ ? 0 : item.id)}}>
                      <p>{item.id}. {item.query}</p>
                      <button onClick={() => {setCurrentFAQ(item.id)}} className={`${currentFAQ === item.id && open__answer}`} type='button'><MdKeyboardArrowDown fontSize={26} color={`${currentFAQ === item.id ? '#FFFFFF' : '#232323'}`} /></button>
                    </div>

                    <div className={`${faq__answer} ${currentFAQ === item.id && open__answer}`}>
                      <p>{item.answer}</p>
                    </div>

                  </div>
                )
              })
            }
          </div>

        </div>
      </section>

      {/* Section 5 - FAQ's */}

      {/* Section 6 - Testimonials */}

      <section className={home__section6}>
        <div className={section6__center}>

          <h2>Testimonials</h2>

          <div className={section6__main}>
            {
              homeTestimonials?.map((item) => {
                return (
                  <div key={item.id} className={each__testimonial}>

                    <div className={testimonial__detail}>
                      <img src={item.image} alt={item.name}/>
                      <p>{item.name}</p>
                      <p>{item.role}</p>
                    </div>

                    <div className={testimonial__review}>
                      <p><ImQuotesLeft fontSize={26} color={item.quoteColor}/>&nbsp;&nbsp;{item.review}</p>
                    </div>

                  </div>
                )
              })
            }
          </div>

        </div>
      </section>

      {/* Section 6 - Testimonials */}

      {/* Section 7 - Our Team */}

      <section className={home__section7}>
        <div className={section7__center}>

          <h2>Our Team</h2>

          <div className={section7__main}>
            {
              homeTeam.map((member) => {
                return (
                  <div key={member.id} className={each__member}>
                    <img src={member.image} alt={member.name} />
                    <div className={member__details}>
                      <h5>{member.name}</h5>
                      <p>{member.role}</p>
                      <div className={member__socials}>
                        <a href={member.links[0]} target='_blank' rel='noopener noreferrer'>
                          <FaTwitter fontSize={20} color='#121212'/>
                        </a>
                        <a href={member.links[1]} target='_blank' rel='noopener noreferrer'>
                          <FaLinkedin fontSize={20} color='#121212'/>
                        </a>
                        <a href={member.links[2]} target='_blank' rel='noopener noreferrer'>
                          <BiLogoGmail fontSize={20} color='#121212'/>
                        </a>
                      </div>
                    </div>
                  </div>
                  )
                })
            }
          </div>

        </div>
      </section>

      {/* Section 7 - Our Team */}

      {/* Section 8 - Subscribe to Newsletter */}

      <section className={home__section8}>
        <div className={section8__center}>

          <h2>Subscribe Now</h2>

          <form className={section8__main}>
            <input type="text" placeholder='Eg: johndoe@gmail.com' />
            <button type='submit'>Subscribe Now</button>
          </form>

        </div>
      </section>

      {/* Section 8 - Subscribe to Newsletter */}

    </main>
  )
}

export default Home