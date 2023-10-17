import React from 'react';
import styles from './Project.module.css';
import Card from '../Card/Card';

const Project = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Project;
