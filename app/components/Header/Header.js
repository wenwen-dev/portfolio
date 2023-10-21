import React from 'react';
import styles from './Header.module.css';
import { fontLogo, fontBody } from '@/app/fonts';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

const Header = ({ nav }) => {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <Nav links={nav} />
    </header>
  );
};

export default Header;
