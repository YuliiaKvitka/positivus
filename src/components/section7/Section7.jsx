//src/components/section7/Section7.jsx
'use client'
import { useState } from 'react';
import styles from './Section7.module.scss'
import Radio from '../radio/Radio';

const Section7 = () => {

    const [requestType, setRequestType] = useState('Say Hi');

  const handleRadioChange = (event) => {
    setRequestType(event.target.value);
    };
    
return (
    <section className={`section  container`}>
        <header className={`section__header`}>
            <h2 className={`section__title puddle-bg`}>Contact Us</h2>
            <div className={`section__description`}>
                <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
            </div>
        </header>
        <div className={`section__body`}>
            <div className={styles.contact_us}>
                <form action="" className={styles.contact_us__form}>
                    <fieldset className={`${styles.contact_us__request_types} ${styles.radios}`}>
                        <legend className={`${styles.radios__title} visually_hidden`}>Request type</legend>

                        <Radio title='Say Hi' requestType={requestType} handleRadioChange={handleRadioChange} />

                        <Radio title='Get a Quote' requestType={requestType} handleRadioChange={handleRadioChange} />


                    </fieldset>


                    <div className={styles.contact_us__body}>

                        <div className={`${styles.contact_us__field} ${styles.field}`}>
                            <label className={styles.field__label} htmlFor="name">Name</label>
                            <input type="text" className={styles.field__input} id='name' name='name' placeholder='Name'/>
                        </div>

                        <div className={`${styles.contact_us__field} ${styles.field}`}>
                            <label className={styles.field__label} htmlFor="email">Email*</label>
                            <input type="text" className={styles.field__input} id='email' name='email' placeholder='Email' required/>
                        </div>

                        <div className={`${styles.contact_us__field} ${styles.field}`}>
                            <label className={styles.field__label} htmlFor="message">Message*</label>
                            <textarea type="text" className={`${styles.field__input} ${styles.field__input_textarea}`} id='message' name='message' placeholder='Message' required></textarea>
                        </div>

                    </div>

                    <button className={`${styles.contact_us__button} button`} type='submit'>Send Message</button>

                </form>
            </div>
        </div>
    
    </section>
)
}

export default Section7
