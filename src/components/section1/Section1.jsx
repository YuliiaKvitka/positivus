import Partners from '../partners/Partners'
import styles from './Section1.module.scss'
import './../../styles/blocks/_section.scss'


const Section1 = () => {
  return (
    <section className={`section section--hidden-x container`}>
        <div className={`section__body`}>
            <div className={styles.hero}>
                <div className={styles.hero__main}>
                    <div className={styles.hero__body}>
                        <h1 className={styles.hero__title}>Navigating the digital landscape for success</h1>
                        <div className={styles.hero__description}>
                            <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                        </div>
                        <button className={`${styles.hero__button} button` } type='button'>Book a consultation</button>
                    </div>
                    <img src="/assets/hero/heroImg.svg" alt="" className={styles.hero__image} width={600} height={515} loading='lazy'/>
                </div>
                <Partners/>
            </div>
    </div>
    </section>
)
}

export default Section1
