

// src/components/mobileMenu/MobileMenu.jsx
import React from 'react';
import styles from './MobileMenu.module.scss';

const MobileMenu = ({ isOpen, onClose }) => {
    return (
    <dialog className={`${styles.mobile_overlay} ${isOpen ? styles.visible_mobile : ''}`} id="mobileOverlay" open={isOpen}>
        <form className={styles.mobile_overlay__close_button_wrapper} method="dialog">
        <button className={`${styles.mobile_overlay__close_button} ${styles.cross_button}`} type="button" onClick={onClose}>
            <span className={`visually_hidden`}>Close navigation menu</span>
        </button>
        </form>
        <div className={styles.mobile_overlay__body}>
            <ul className={styles.mobile_overlay__list}>
                <li className={styles.header__menu_item}>
                    <a className={styles.header__menu_link} href="/">
                        About us
                    </a>
                </li>
                <li className={styles.header__menu_item}>
                    <a className={styles.header__menu_link} href="/">
                        Services
                    </a>
                </li>
                <li className={styles.header__menu_item}>
                    <a className={styles.header__menu_link} href="/">
                        Use Cases
                    </a>
                </li>
                <li className={styles.header__menu_item}>
                    <a className={styles.header__menu_link} href="/">
                    Pricing
                    </a>
                </li>
                <li className={styles.header__menu_item}>
                    <a className={styles.header__menu_link} href="/">
                    Blog
                    </a>
                </li>
        </ul>
    </div>
    </dialog>
);
};

export default MobileMenu;
