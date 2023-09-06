import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from "./Consultation.module.css";
import { consultationServices } from '../../constants';

const Consultation = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const service = queryParams.get('service')?.replaceAll('-',' ');
  const freeConsultation = queryParams.get('serviceType');

  const { app__consult, consult__section1, section1__center, consult__section2, section2__center, section2__form, form__inputs } = styles;

  const [serviceInfo, setServiceInfo] = useState<string>('');

  useEffect(() => {
    consultationServices.forEach((item) => {
      if (item.service === service) {
        console.log(item.service, service);
        setServiceInfo(item.information);
      }
    })
  }, [service]);

  return (
    <main className={app__consult}>

      {/* Section 1 - Service/Normal Info */}

      <section className={consult__section1}>
        <div className={section1__center}>
          <h1>{service ? service + ' Consultation' : `Book a ${freeConsultation ? 'Free' : 'Service'} Consultation`}</h1>
          <p>{service ? serviceInfo : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint voluptatem facilis ex quaerat obcaecati quisquam unde ut ipsum debitis culpa eos fugiat aliquid nemo veritatis, quae magnam, veniam natus. Id.'}</p>
        </div>
      </section>

      {/* Section 1 - Service/Normal Info */}

      {/* Section 2 - Service Form */}

      <section className={consult__section2}>
        <div className={section2__center}>

          <h2>Get Consultation</h2>

          <form className={section2__form}>

            <div className={form__inputs}>
              <input required type="text" name='consult_name' placeholder='Enter your Name*' />
              <input required type="email" name='consult_email' placeholder='Enter your Email*' />
              {
                service ? (
                  <input required type="text" readOnly name='consult_service' value={service}/>
                ) : (
                  <select required name="consult_service">
                    {
                      consultationServices.map((item) => {
                        return (
                          <option key={item.id} value={item.service.replaceAll('-',' ')}>{item.service.replaceAll('-',' ')}</option>
                        )
                      })
                    }
                  </select>
                )
              }
              <textarea name="consult_message" placeholder='Write about your Consultation'></textarea>
            </div>

            <button type='submit'>Submit</button>

          </form>

        </div>
      </section>

      {/* Section 2 - Service Form */}

    </main>
  )
}

export default Consultation