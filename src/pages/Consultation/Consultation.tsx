import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from "./Consultation.module.css";
import { consultationServices } from '../../constants';

// React-Calendly
import { InlineWidget } from "react-calendly";

const Consultation = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const service = queryParams.get('service')?.replaceAll('-',' ');

  const { app__consult, consult__section1, section1__center, consult__section2 } = styles;

  const [serviceInfo, setServiceInfo] = useState<string>('');

  useEffect(() => {
    consultationServices.forEach((item) => {
      if (item.service === service) {
        setServiceInfo(item.information);
      }
    })
  }, [service]);

  useEffect(() => {
    document.title = "Consultation | Legal Minds";
  }, []);


  return (
    <main className={app__consult}>

      {/* Section 1 - Service/Normal Info */}

      <section className={consult__section1}>
        <article className={section1__center}>
          <h1>{service + " Consultation"}</h1>
          <p>{serviceInfo ? serviceInfo : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi laborum doloribus aut similique voluptas tenetur veritatis blanditiis quasi ratione obcaecati laboriosam quam non rerum, minus suscipit debitis necessitatibus."}</p>
        </article>
      </section>

      {/* Section 1 - Service/Normal Info */}
      
      {/* Section 2 - Calendly Integration */}

      <section className={consult__section2}>
        <InlineWidget styles={{ minWidth : '320px', width : '100%', height: '700px' }}  url='https://calendly.com/indianlegalminds/service-consultation' />
      </section>

      {/* Section 2 - Calendly Integration */}

    </main>
  );
}

export default Consultation;


  // consult__section2, section2__center, section2__form, form__inputs, consult__response

  // const consultForm = useRef<HTMLFormElement | null>(null);
  // const [ showConsultFormResponse, setShowConsultFormResponse ] = useState<boolean>(false);
  // const [ consultResponse, setConsultResponse ] = useState<string>('');

  // const handleConsultForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_9vhwcvc', 'legalminds_2004', consultForm.current as HTMLFormElement, 'm3HMEpwZdRvxIANbK')
  //   .then((result) => {
  //       setShowConsultFormResponse(true);
  //       setConsultResponse('Got your Consultation, Reach you soon!');
  //       setTimeout(() => {
  //         setShowConsultFormResponse(false);
  //         setConsultResponse("");
  //         window.location.reload();
  //       }, 5000);
  //   }, (error) => {
  //       setShowConsultFormResponse(true);
  //       setConsultResponse(error.text);
  //       setTimeout(() => {
  //         setShowConsultFormResponse(false);
  //         setConsultResponse("");
  //         window.location.reload();
  //       }, 5000);
  //   });
  // };

  // {
  //   /* Section 2 - Service Form */
  // }

  // {
  //   /* <section className={consult__section2}>
  // <div className={section2__center}>
  //   <h2>Get Consultation</h2>

  //   <form className={section2__form} ref={consultForm} onSubmit={handleConsultForm}>
  //     <div className={form__inputs}>
  //       <input required type="text" name="name" placeholder="Enter your Name*"/>
  //       <input required type="email" name="email" placeholder="Enter your Email*"/>
  //       {service ? (
  //         <input required type="text" readOnly name="service" value={service}/>
  //       ) : (
  //         <select required name="service">
  //           {consultationServices.map((item) => {
  //             return (
  //               <option key={item.id} value={item.service.replaceAll("-", " ")}>
  //                 {item.service.replaceAll("-", " ")}
  //               </option>
  //             );
  //           })}
  //         </select>
  //       )}
  //       <textarea
  //         name="message"
  //         placeholder="Write about your Consultation"
  //       ></textarea>
  //     </div>
  //     {
  //       showConsultFormResponse && <p className={consult__response}>{consultResponse}</p>
  //     }
  //     <button type='submit'>Submit</button>
  //   </form>

  // </div>
  // </section> */
  // }

  // {
  //   /* Section 2 - Service Form */
  // }