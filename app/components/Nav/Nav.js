import React from 'react';
import styles from './Nav.module.css';
import { fontBody } from '@/app/fonts';
import Link from 'next/link';

const Nav = () => {
  return (
    <ul className={`${styles.nav} ${fontBody.className}`}>
      <li className={styles.links}>
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
  );
};

export default Nav;
