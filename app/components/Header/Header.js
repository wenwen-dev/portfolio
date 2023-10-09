import React from 'react';
import styles from './Header.module.css';
import { dancingScript } from '@/app/fonts';
import Nav from '../Nav/Nav';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.logoWrapper}>
          <p className={`${styles.logo} ${dancingScript.className}`}>Wenwen</p>
          <p className={`${styles.dev} ${dancingScript.className}`}>.dev</p>
        </div>
        {/* <Nav /> */}
      </div>
      <Menu />
    </div>
  );
};

export default Header;
