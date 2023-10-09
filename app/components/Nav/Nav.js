import React from 'react';
import styles from './Nav.module.css';
import Link from '../Link/Link';

const Nav = ({}) => {
  return (
    <ul className={styles.wrapper}>
      <li className={styles.listItem}>
        <Link href='/'>About</Link>
      </li>
      <li className={styles.listItem}>
        <Link href='/'>Projects</Link>
      </li>
      <li className={styles.listItem}>
        <Link href='/'>Contact</Link>
      </li>
    </ul>
  );
};

export default Nav;
