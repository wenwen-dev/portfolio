import React from 'react';
import styles from './Project.module.css';

const Project = ({ videoSrc, title, description }) => {
  return (
    <div className={styles.maxWidthWrapper}>
      <h2>{title}</h2>
      <video src={videoSrc}></video>
      <p>{description}</p>
    </div>
  );
};

export default Project;
