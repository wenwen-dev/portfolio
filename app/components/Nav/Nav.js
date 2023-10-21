import React from 'react';
import styles from './Nav.module.css';
import { fontBody } from '@/app/fonts';
import Link from 'next/link';

const Nav = ({ links }) => {
  return (
    <ul className={`${styles.nav} ${fontBody.className}`}>
      {links.map(link => (
        <li key={link.label} className={styles.links}>
          <Link href={link.href} className={styles.link}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
