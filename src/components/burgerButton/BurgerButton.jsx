
// src/components/burgerButton/BurgerButton.jsx
import React from 'react';
import styles from './BurgerButton.module.scss';

const BurgerButton = ({ onClick, isOpen }) => {
  return (
    <button className={`${styles.button__burger_menu} ${styles.burger_button} visible_mobile`} type="button" onClick={onClick}>
      <span className={`visually_hidden`}>{isOpen ? 'Close navigation menu' : 'Open navigation menu'}</span>
    </button>
  );
};

export default BurgerButton;


