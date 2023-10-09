import React from 'react';
import styles from './Link.module.css';

const Link = ({ href, children }) => {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
};

export default Link;