import styles from './Section5.module.scss'

const Section5 = () => {
return (
    <section className={`section  container`}>
        <header className={`section__header`}>
            <h2 className={`section__title puddle-bg`}>Team</h2>
            <div className={`section__description`}>
                <p>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
            </div>
        </header>
        <div className={`section__body`}>
            <div className={styles.team}>
                <ul className={`${styles.team__list} grid grid--3`}>

                    <li className={styles.team__item}>
                        <article className={styles.team_card}>
                            <header className={styles.team_card__header}>
                                <img src="/assets/team/1.svg" alt="" className={styles.team_card__image} width={100} height={100} loading='lazy' />
                                <div className={styles.team_card__info}>
                                    <h3 className={`${styles.team_card__name} h4`}>John Smith</h3>
                                    <p className={styles.team_card__post}>CEO and Founder</p>
                                </div>
                                <a href="/" className={styles.team_card__link} target='_blank'>
                                    <span className={`visually_hidden`}>LinkedIn</span>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66" />
                                    <path d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z" fill="#B9FF66" />
                                    <path d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z" fill="#B9FF66" />
                                    </svg>
                                </a>
                            </header>
                            <div className={styles.team_card__body}>
                                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                            </div>
                        </article>
                    </li>

                    <li className={styles.team__item}>
                        <article className={styles.team_card}>
                            <header className={styles.team_card__header}>
                                <img src="/assets/team/2.svg" alt="" className={styles.team_card__image} width={100} height={100} loading='lazy' />
                                <div className={styles.team_card__info}>
                                    <h3 className={`${styles.team_card__name} h4`}>Jane Doe</h3>
                                    <p className={styles.team_card__post}>Director of Operations</p>
                                </div>
                                <a href="/" className={styles.team_card__link} target='_blank'>
                                    <span className={`visually_hidden`}>LinkedIn</span>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66" />
                                    <path d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z" fill="#B9FF66" />
                                    <path d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z" fill="#B9FF66" />
                                    </svg>
                                </a>
                            </header>
                            <div className={styles.team_card__body}>
                                <p>7+ years of experience in project management and team leadership. Strong organizational and communication skills</p>
                            </div>
                        </article>
                    </li>

                    <li className={styles.team__item}>
                        <article className={styles.team_card}>
                            <header className={styles.team_card__header}>
                                <img src="/assets/team/3.svg" alt="" className={styles.team_card__image} width={100} height={100} loading='lazy' />
                                <div className={styles.team_card__info}>
                                    <h3 className={`${styles.team_card__name} h4`}>Michael Brown</h3>
                                    <p className={styles.team_card__post}>Senior SEO Specialist</p>
                                </div>
                                <a href="/" className={styles.team_card__link} target='_blank'>
                                    <span className={`visually_hidden`}>LinkedIn</span>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66" />
                                    <path d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z" fill="#B9FF66" />
                                    <path d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z" fill="#B9FF66" />
                                    </svg>
                                </a>
                            </header>
                            <div className={styles.team_card__body}>
                                <p>5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization</p>
                            </div>
                        </article>
                    </li>

                    <li className={styles.team__item}>
                        <article className={styles.team_card}>
                            <header className={styles.team_card__header}>
                                <img src="/assets/team/4.svg" alt="" className={styles.team_card__image} width={100} height={100} loading='lazy' />
                                <div className={styles.team_card__info}>
                                    <h3 className={`${styles.team_card__name} h4`}>Emily Johnson</h3>
                                    <p className={styles.team_card__post}>PPC Manager</p>
                                </div>
                                <a href="/" className={styles.team_card__link} target='_blank'>
                                    <span className={`visually_hidden`}>LinkedIn</span>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66" />
                                    <path d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z" fill="#B9FF66" />
                                    <path d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z" fill="#B9FF66" />
                                    </svg>
                                </a>
                            </header>
                            <div className={styles.team_card__body}>
                                <p>3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis</p>
                            </div>
                        </article>
                    </li>

                    <li className={styles.team__item}>
                        <article className={styles.team_card}>
                            <header className={styles.team_card__header}>
                                <img src="/assets/team/5.svg" alt="" className={styles.team_card__image} width={100} height={100} loading='lazy' />
                                <div className={styles.team_card__info}>
                                    <h3 className={`${styles.team_card__name} h4`}>Brian Williams</h3>
                                    <p className={styles.team_card__post}>Social Media Specialist</p>
                                </div>
                                <a href="/" className={styles.team_card__link} target='_blank'>
                                    <span className={`visually_hidden`}>LinkedIn</span>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66" />
                                    <path d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z" fill="#B9FF66" />
                                    <path d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z" fill="#B9FF66" />
                                    </svg>
                                </a>
                            </header>
                            <div className={styles.team_card__body}>
                                <p>4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement</p>
                            </div>
                        </article>
                    </li>

                    <li className={styles.team__item}>
                        <article className={styles.team_card}>
                            <header className={styles.team_card__header}>
                                <img src="/assets/team/6.svg" alt="" className={styles.team_card__image} width={100} height={100} loading='lazy' />
                                <div className={styles.team_card__info}>
                                    <h3 className={`${styles.team_card__name} h4`}>Sarah Kim</h3>
                                    <p className={styles.team_card__post}>Content Creator</p>
                                </div>
                                <a href="/" className={styles.team_card__link} target='_blank'>
                                    <span className={`visually_hidden`}>LinkedIn</span>
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.317757 17H3.81308V5.68438H0.317757V17Z" fill="#B9FF66" />
                                    <path d="M0 2.07188C0 3.1875 0.900311 4.09062 2.06542 4.09062C3.17757 4.09062 4.07788 3.1875 4.07788 2.07188C4.07788 0.95625 3.17757 0 2.06542 0C0.900311 0 0 0.95625 0 2.07188Z" fill="#B9FF66" />
                                    <path d="M13.4517 17H17V10.7844C17 7.75625 16.3115 5.36562 12.7632 5.36562C11.0685 5.36562 9.90343 6.32188 9.42679 7.225H9.37383V5.68438H6.03738V17H9.53271V11.4219C9.53271 9.93437 9.79751 8.5 11.6511 8.5C13.4517 8.5 13.4517 10.2 13.4517 11.475V17Z" fill="#B9FF66" />
                                    </svg>
                                </a>
                            </header>
                            <div className={styles.team_card__body}>
                                <p>10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                            </div>
                        </article>
                    </li>
                </ul>
                <button className={`${ styles.team__button} button`} type='button'>See all team</button>
            </div>
        </div>
    
    </section>
)
}

export default Section5
