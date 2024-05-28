import styles from './Section4.module.scss'

const Section4 = () => {
  return (
    <section className={`section  container`}>
      <header className={`section__header`}>
          <h2 className={`section__title puddle-bg`}>Our Working Process</h2>
        <div className={`section__description`}>
          <p>Step-by-Step Guide to Achieving<br/> Your Business Goals</p>
        </div>
      </header>
      <div className="section__body">
        <div className={styles.process}>
          <ol className={styles.process__list}>

            <li className={styles.process__item}>
              <details className={styles.process__accordion} open>
                <summary className={styles.process__accordion_header}>
                  <h3 className={styles.process__accordion_title}>Consultation</h3>
                  <span className={styles.process__accordion_indicator}></span>
                </summary>
                <div className={styles.process__accordion_body}>
                  <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                </div>
              </details>
            </li>

            <li className={styles.process__item}>
              <details className={styles.process__accordion}>
                <summary className={styles.process__accordion_header}>
                  <h3 className={styles.process__accordion_title}>Research and Strategy Development</h3>
                  <span className={styles.process__accordion_indicator}></span>
                </summary>
                <div className={styles.process__accordion_body}>
                  <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                </div>
              </details>
            </li>

            <li className={styles.process__item}>
              <details className={styles.process__accordion}>
                <summary className={styles.process__accordion_header}>
                  <h3 className={styles.process__accordion_title}>Implementation</h3>
                  <span className={styles.process__accordion_indicator}></span>
                </summary>
                <div className={styles.process__accordion_body}>
                  <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                </div>
              </details>
            </li>

            <li className={styles.process__item}>
              <details className={styles.process__accordion}>
                <summary className={styles.process__accordion_header}>
                  <h3 className={styles.process__accordion_title}>Monitoring and Optimization</h3>
                  <span className={styles.process__accordion_indicator}></span>
                </summary>
                <div className={styles.process__accordion_body}>
                  <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                </div>
              </details>
            </li>

            <li className={styles.process__item}>
              <details className={styles.process__accordion}>
                <summary className={styles.process__accordion_header}>
                  <h3 className={styles.process__accordion_title}>Reporting and Communication</h3>
                  <span className={styles.process__accordion_indicator}></span>
                </summary>
                <div className={styles.process__accordion_body}>
                  <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                </div>
              </details>
            </li>

            <li className={styles.process__item}>
              <details className={styles.process__accordion}>
                <summary className={styles.process__accordion_header}>
                  <h3 className={styles.process__accordion_title}>Continual Improvement</h3>
                  <span className={styles.process__accordion_indicator}></span>
                </summary>
                <div className={styles.process__accordion_body}>
                  <p>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                </div>
              </details>
            </li>

          </ol>
        </div>
      </div>
      
    </section>
  )
}

export default Section4
