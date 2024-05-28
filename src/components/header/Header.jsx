
'use client'
// src/components/header/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.scss';
import BurgerButton from '../burgerButton/BurgerButton';
import MobileMenu from '../mobileMenu/MobileMenu';
import Menu from '../menu/Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.header__inner} container`}>
        <a className={`${styles.header__logo} ${styles.logo}`} href="/">
          <img
            className={styles.logo__image}
            src="/assets/logo/logo.svg"
            alt="Positivus"
            width={220}
            height={36}
            loading="lazy"
          />
        </a>
        <nav className={`${styles.header__menu} hidden_mobile`}>
         <Menu/>
        </nav>

        <button className={`${styles.header__button} button button--transparent hidden_mobile`} type="button">
          Request a quote
        </button>
        <BurgerButton onClick={handleMenuToggle} isOpen={isMenuOpen} />
        <MobileMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
      </div>
    </header>
  );
};

export default Header;
