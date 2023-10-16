import React from 'react';
import styles from './Contact.module.css';
import Menu from '../Menu/Menu';

const Contact = () => {
  return (
    <div className={styles.wrapper} id='contact'>
      <div className={styles.maxWidthWrapper}>
        <p>Designed and Built by Wenwen Wang</p>
        <Menu />
      </div>
    </div>
  );
};

export default Contact;
