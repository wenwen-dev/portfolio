import React from 'react';
import styles from './Footer.module.css';
import Menu from '../Menu/Menu';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p>Designed and Built by Wenwen Wang</p>
      <Menu />
    </div>
  );
};

export default Footer;
