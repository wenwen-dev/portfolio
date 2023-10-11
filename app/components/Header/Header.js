import React from 'react';
import styles from './Header.module.css';
import { dancingScript } from '@/app/fonts';
import { leagueSpartan } from '@/app/fonts';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <div className={styles.logoWrapper}>
          <p className={`${styles.logo} ${dancingScript.className}`}>Wenwen</p>
          <p className={styles.dev}>.dev</p>
        </div>
        <ul className={`${styles.nav} ${leagueSpartan.className}`}>
          <li>
            <Link href='#about' className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href='#projects' className={styles.link}>
              Projects
            </Link>
          </li>
          <li>
            <Link href='#contact' className={styles.link}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
