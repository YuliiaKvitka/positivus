import FooterMenu from '../footerMenu/FooterMenu'
import Soc1als from '../soc1als/Soc1als'
import SubscribeForm from '../subscribeForm/SubscribeForm'
import styles from './Footer.module.scss'

// https://www.svgrepo.com/  Facebook выгрузить иконку

const Footer = () => {
    return (
        <footer className={`${styles.footer} container`}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__navigation}>
                    {/* скопировать с шапки */}
                    <a className={`${styles.footer__logo} ${styles.logo}`} href="/">
                        <img
                            className={styles.logo__image}
                            src="/assets/logo/logo_light.svg"
                            alt="Positivus"
                            width={180}
                            height={29}
                            loading="lazy"
                        />
                    </a>
                    <FooterMenu/>
                    <Soc1als/>
                </div>
                <div className={styles.footer__body}>
                    <div className={styles.footer__contacts}>
                        <h2 className={`${styles.footer__contacts_title} h4 puddle-bg`}>Contact us:</h2>
                        <address className={styles.footer__contacts_body}>
                            <p>Email: <a href='mailto:info@positivus.com'>info@positivus.com</a></p>
                            <p>Phone: <a href='tel:5555678901'>555-567-8901</a></p>
                            <p>Address: 1234 Main St<br/>
                                Moonstone City, Stardust State 12345</p>
                        </address>

                    </div>
                    <SubscribeForm/>
                </div>
                <div className={styles.footer__extra}>
                    <p className={styles.footer__copyright}>&copy; <time dateTime='2024'>2024</time> Positivus. All Rights Reserved.</p>
                    <a className={styles.footer__privasy_police_link} href='/'>Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
