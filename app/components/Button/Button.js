import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

const Button = ({ href, children }) => {
  return (
    <div className={styles.wrapper}>
      <Link href={href} target='_blank'>
        <button>{children}</button>
      </Link>
    </div>
  );
};

export default Button;
