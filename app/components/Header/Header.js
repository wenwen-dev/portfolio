import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { fontLogo, fontBody } from '@/app/fonts';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <div className={styles.logoWrapper}>
          <Link href='/' className={styles.link}>
            <p className={`${styles.logo} ${fontLogo.className}`}>Wenwen</p>
            <p className={styles.dev}>.dev</p>
          </Link>
        </div>
        <ul className={`${styles.nav} ${fontBody.className}`}>
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
