import styles from './Menu.module.scss'

const Menu = () => {
  return (
     <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <a className={styles.menu_link} href="/">
                About us
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.hmenu_link} href="/">
                Services
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.menu_link} href="/">
                Use Cases
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.menu_link} href="/">
                Pricing
              </a>
            </li>
            <li className={styles.menu_item}>
              <a className={styles.menu_link} href="/">
                Blog
              </a>
            </li>
          </ul>
  )
}

export default Menu
