
import styles from './FooterMenu.module.scss'

const FooterMenu = () => {
   return (
    <nav className={styles.footer__menu}>
                        <ul className={styles.footer__menu_list}>

                            <li className={styles.footer__menu_item}>
                                <a href="" className={styles.footer__menu_link}>About us</a>
                            </li>

                            <li className={styles.footer__menu_item}>
                                <a href="" className={styles.footer__menu_link}>Services</a>
                            </li>

                            <li className={styles.footer__menu_item}>
                                <a href="" className={styles.footer__menu_link}>Use Cases</a>
                            </li>

                            <li className={styles.footer__menu_item}>
                                <a href="" className={styles.footer__menu_link}>Pricing</a>
                            </li>

                            <li className={styles.footer__menu_item}>
                                <a href="" className={styles.footer__menu_link}>Blog</a>
                            </li>

                        </ul>
                    </nav>
    )
}

export default FooterMenu
