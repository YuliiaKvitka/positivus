import Banner from '../banner/Banner'
import styles from './Services.module.scss'

const Services = () => {
    return (
        <div className={styles.services}>
                <ul className={`${styles.services__list} grid grid--2`}>

                    <li className={`services__item`}>
                        <article className={styles.service_card}>
                            <div className={styles.service_card__body}>
                                <h3 className={styles.service_card__title}>
                                    <span className={`puddle-bg 
                                    `}>Search engine</span>
                                    <span className={`puddle-bg`}>optimization</span>
                                </h3>
                                <a href="/" className={styles.service_card__link}>
                                    <span className={styles.service_card__link_icon_wrapper}>
                                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66"/>
                                    </svg>
                                    </span>
                                    <span className={styles.service_card__link_label}>Link more</span>
                                </a>
                            </div>
                            <img src="/assets/services/service1.svg" alt="" className={styles.service_card__image} loading='lazy' width={210} height={170}/>

                        </article>
                    </li>

                    <li className={`services__item `}>
                        <article className={`${styles.service_card} ${styles.service_card__accent_bg}`}>
                            <div className={styles.service_card__body}>
                                <h3 className={styles.service_card__title}>
                                    <span className={`puddle-bg puddle-bg__light`}>Pay-per-click</span>
                                    <span className={`puddle-bg puddle-bg__light`}>advertising</span>
                                </h3>
                                <a href="/" className={styles.service_card__link}>
                                    <span className={styles.service_card__link_icon_wrapper}>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66"/>
                                    </svg>
                                    </span>
                                    <span className={styles.service_card__link_label}>Link more</span>
                                </a>
                            </div>
                            <img src="/assets/services/service2.svg" alt="" className={styles.service_card__image} loading='lazy' width={210} height={170}/>

                        </article>
                    </li>

                    <li className={`services__item`}>
                        <article className={`${styles.service_card} ${styles.service_card__dark_bg}`}>
                            <div className={styles.service_card__body}>
                                <h3 className={styles.service_card__title}>
                                    <span className={`puddle-bg puddle-bg__light`}>Social Media</span>
                                    <span className={`puddle-bg puddle-bg__light`}>Marketing</span>
                                </h3>
                                <a href="/" className={`${styles.service_card__link} ${styles.service_card__link__light}`}>
                                    <span className={styles.service_card__link_icon_wrapper}>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66"/>
                                    </svg>
                                    </span>
                                    <span className={styles.service_card__link_label}>Link more</span>
                                </a>
                            </div>
                            <img src="/assets/services/service3.svg" alt="" className={styles.service_card__image} loading='lazy' width={210} height={170}/>

                        </article>
                    </li>

                    <li className={`services__item`}>
                        <article className={styles.service_card}>
                            <div className={styles.service_card__body}>
                                <h3 className={styles.service_card__title}>
                                    <span className={`puddle-bg`}>Email</span>
                                    <span className={`puddle-bg`}>Marketing</span>
                                </h3>
                                <a href="/" className={styles.service_card__link}>
                                    <span className={styles.service_card__link_icon_wrapper}>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66"/>
                                    </svg>
                                    </span>
                                    <span className={styles.service_card__link_label}>Link more</span>
                                </a>
                            </div>
                            <img src="/assets/services/service4.svg" alt="" className={styles.service_card__image} loading='lazy' width={210} height={170}/>

                        </article>
                    </li>

                    <li className={`services__item`}>
                        <article className={`${styles.service_card} ${styles.service_card__accent_bg} `}>
                            <div className={styles.service_card__body}>
                                <h3 className={styles.service_card__title}>
                                    <span className={`puddle-bg puddle-bg__light`}>Content</span>
                                    <span className={`puddle-bg puddle-bg__light`}>Creation</span>
                                </h3>
                                <a href="/" className={styles.service_card__link}>
                                    <span className={styles.service_card__link_icon_wrapper}>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66"/>
                                    </svg>
                                    </span>
                                    <span className={styles.service_card__link_label}>Link more</span>
                                </a>
                            </div>
                            <img src="/assets/services/service5.svg" alt="" className={styles.service_card__image} loading='lazy' width={210} height={170}/>

                        </article>
                    </li>

                    <li className={`services__item`}>
                        <article className={`${styles.service_card} ${styles.service_card__dark_bg}`}>
                            <div className={styles.service_card__body}>
                                <h3 className={styles.service_card__title}>
                                    <span className={`puddle-bg`}>Analytics and </span>
                                    <span className={`puddle-bg`}>Tracking</span>
                                </h3>
                                <a href="/" className={`${styles.service_card__link} ${styles.service_card__link__light}`}>
                                    <span className={styles.service_card__link_icon_wrapper}>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.25 13.701C0.532561 14.1152 0.286748 15.0326 0.700962 15.75C1.11518 16.4674 2.03256 16.7133 2.75 16.299L1.25 13.701ZM20.7694 5.38823C20.9838 4.58803 20.5089 3.76552 19.7087 3.55111L6.66874 0.0570541C5.86854 -0.157359 5.04603 0.317515 4.83162 1.11771C4.61721 1.91791 5.09208 2.74042 5.89228 2.95483L17.4834 6.06066L14.3776 17.6518C14.1631 18.452 14.638 19.2745 15.4382 19.4889C16.2384 19.7033 17.0609 19.2284 17.2753 18.4282L20.7694 5.38823ZM2.75 16.299L20.0705 6.29904L18.5705 3.70096L1.25 13.701L2.75 16.299Z" fill="#B9FF66"/>
                                    </svg>
                                    </span>
                                    <span className={styles.service_card__link_label}>Link more</span>
                                </a>
                            </div>
                            <img src="/assets/services/service6.svg" alt="" className={styles.service_card__image} loading='lazy' width={210} height={170}/>

                        </article>
                    </li>
                </ul>

                  {/* ------------------Banner ------------------------- */}
                <Banner/>
        </div>
    )
}

export default Services
