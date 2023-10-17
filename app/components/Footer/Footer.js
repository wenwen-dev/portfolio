import React from 'react';
import styles from './Footer.module.css';
import Menu from '../Menu/Menu';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <p>Designed and Built by &copy;Wenwen Wang</p>
      {/* <p>© 2023-present Wenwen Wang. All Rights Reserved.</p> */}
      {/* <Menu /> */}
    </footer>
  );
};

export default Footer;
