import React from 'react';
import Link from 'next/link';
import styles from './Logo.module.css';
import { fontBody, fontLogo } from '@/app/fonts';

const Logo = () => {
  return (
    <div className={`${styles.wrapper} ${fontLogo.className}`}>
      <Link href='/' className={styles.link}>
        Wenwen
        <span className={`${styles.dev} ${fontBody.className}`}>.dev</span>
      </Link>
    </div>
  );
};

export default Logo;
