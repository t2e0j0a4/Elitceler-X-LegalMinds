import { useState, useEffect, useRef } from 'react'
import styles from "./Home.module.css";
import About from "../../assets/homeAbout.svg";
import Hero from "../../assets/Hero.jpeg";

// React Icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

// Constants
import { homeShowSeaches, homeServicesMenu, homeFAQ, homeTeam } from '../../constants';

// React Calendly
import { PopupButton } from "react-calendly";
import { Link } from 'react-router-dom';


const Home = () => {

  const { app__home, home__section1, section1__overlay, section1__center, section1__subhead, section1__services, some__popular, section1__cta, service__icon, home__section2, section2__center, section2__main, img__load, img__loaded, section2__about, home__section4, section4__center, why__us, services, all__services, each__service, home__section5, section5__center, all__faqs, each__faq, faq__question, faq__answer, open__answer, home__section7, section7__center, section7__main, each__member, member__details, member__socials } = styles;

  // Image Loading
  const imgAboutRef = useRef<HTMLImageElement>(null);
  const [aboutImgLoaded, setAboutImageLoaded] = useState<boolean>(false);
  const imgHeroRef = useRef<HTMLImageElement>(null);
  const [heroImgLoaded, setHeroImageLoaded] = useState<boolean>(false);

  const [ currentFAQ, setCurrentFAQ ] = useState<number>(1);

  useEffect(() => {
    document.title = 'Home | LegalMinds';
  }, []);

  useEffect(() => {
    imgAboutRef.current?.complete && setAboutImageLoaded(true);
    imgHeroRef.current?.complete && setHeroImageLoaded(true);
  }, [imgAboutRef, imgHeroRef]);


  return (
    <main className={app__home}>

      {/* Section 1 - Search Service */}

      <section className={home__section1}>
        <img src={Hero} className={`${heroImgLoaded && img__loaded}`} alt="Banner" ref={imgHeroRef} onLoad={() => {setHeroImageLoaded(true)}} />
        <div className={section1__overlay}/>
        <div className={section1__center}>

          <div className={section1__subhead}>
            <h2>Welcome to Legal Minds</h2>
            <p>We believe in the power of justice to transform lives. As a dedicated team of legal professionals, we are committed to providing exceptional legal services tailored to meet your unique needs.</p>
          </div>

          <div className={section1__services}>
            <h3>Popular Services</h3>
            <div className={some__popular}>
              {
                homeShowSeaches.map((item) => {
                  return (
                    <Link to={item.queryName} key={item.id} className='service__show'>{item.service}</Link>
                  )
                })
              }
            </div>
          </div>

          <div className={section1__cta}>
            <PopupButton url="https://calendly.com/indianlegalminds/free-service-consultation" rootElement={document.querySelector('#root') as HTMLElement} text="Book a Free Consultation"/>
            <a href="#services">Our Services <BiChevronDown aria-label="Down" fontSize={18} className={service__icon}/></a>
          </div>

        </div>

      </section>

      {/* Section 1 - Search Service */}

      {/* Section 2 - About Us */}

      <section className={home__section2}>
        <div className={section2__center}>

          <h2>About Us</h2>

          <div className={section2__main}>
            <div className={img__load}>
              <img src={About} className={`${aboutImgLoaded && img__loaded}`} alt="Legal Minds" ref={imgAboutRef} onLoad={() => {setAboutImageLoaded(true)}} />
            </div>
            <div className={section2__about}>
              <p>1. Legal minds are a group of advocates and auditors. Proficientness, experience, creativity, and integrity are the personas that we bring to every matter we handle. Through our knowledge, experience, and expertise, we offer our clients the most efficient, strategic, and cost-effective representation in everything from the simplest to the most complex civil litigation.</p>
              <p>2. We ranked it highly for its client-satisfaction ethos. The firm takes great pride in its client servicing approach focused on clarity, accessibility, high responsiveness, and business-oriented legal advice.</p>
              <p>3. We represent clients in all Indian and international courts in a wide variety of matters, including criminal, civil, and corporate litigation, taxation, immigration, property title verification, legal opinion, product liability, construction defect, breach of contract, professional liability, employment litigation, insurance coverage, and paralegal trainings for developmental organizations and civil society.</p>
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

            <p>Legal Minds is your partner in navigating the legal landscape, providing expert advice and practical solutions for your unique needs.</p>
          </div>

          {/* Services */}
          <div className={services} id='services'>

            <h2>Our Services</h2>

            <div className={all__services}>
              {
                homeServicesMenu.map((item) => {
                  return (
                    <Link to={item.queryName} aria-label={item.service} className={each__service} key={item.id}>
                      <img src={item.icon} alt={item.service} />
                      <p aria-hidden>{item.service}</p>
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

                    <button type='button' tabIndex={0} aria-label={`${item.id}. ${item.query}`} className={`${faq__question} ${currentFAQ === item.id && open__answer}`} onClick={() => {setCurrentFAQ(item.id === currentFAQ ? 0 : item.id)}}>
                      <p>{item.id}. {item.query}</p>
                      <span aria-hidden className={`${currentFAQ === item.id && open__answer}`}><MdKeyboardArrowDown fontSize={26} color={`${currentFAQ === item.id ? '#FFFFFF' : '#232323'}`} aria-hidden /></span>
                    </button>

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

      {/* <section className={home__section6}>
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
      </section> */}

      {/* Section 6 - Testimonials */}

      {/* Section 7 - Our Team */}

      <section className={home__section7}>
        <div className={section7__center}>

          <h2>Founder</h2>

          <div className={section7__main}>
            {
              homeTeam.map((member) => {
                return (
                  <div key={member.id} className={each__member}>
                    <img src={member.image} alt={member.name} />
                    <div className={member__details}>
                      <p>{member.name}</p>
                      <div className={member__socials}>
                        <a href={member.links[0]} title='Twitter' target='_blank' rel='noopener noreferrer'>
                          <FaTwitter aria-label='Twitter' fontSize={20} color='#121212'/>
                        </a>
                        <a href={member.links[1]} title='Linkedin' target='_blank' rel='noopener noreferrer'>
                          <FaLinkedin aria-label='Linkedin' fontSize={20} color='#121212'/>
                        </a>
                        <a href={`mailto: ${member.links[2]}`} title='Gmail' target='_blank' rel='noopener noreferrer'>
                          <BiLogoGmail aria-label='Gmail' fontSize={20} color='#121212'/>
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

      {/* <section className={home__section8}>
        <div className={section8__center}>

          <h2>Subscribe Now</h2>

          <form className={section8__main}>
            <input type="text" placeholder='Eg: johndoe@gmail.com' />
            <button type='submit'>Subscribe Now</button>
          </form>

        </div>
      </section> */}

      {/* Section 8 - Subscribe to Newsletter */}

    </main>
  )
}

export default Home

// home__section8, section8__center, section8__main
// home__section6, section6__center, section6__main, each__testimonial, testimonial__detail, testimonial__review
// section1__stats, stats
