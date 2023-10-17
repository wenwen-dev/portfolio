import React from 'react';
import styles from './Hero.module.css';
import profileImg from '../../../public/profile.png';
import { fontHeading } from '@/app/fonts';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <div className={styles.intro}>
          <h1 className={fontHeading.className}>
            Hi there, I'm <span>Wenwen</span>.
          </h1>
          <p>
            I love building interactive, accessible, and responsive web
            applications.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>HTML</li>
            <li className={styles.listItem}>CSS</li>
            <li className={styles.listItem}>JavaScript</li>
            <li className={styles.listItem}>React.js</li>
            <li className={styles.listItem}>Git</li>
            <li className={styles.listItem}>Next.js</li>

            <li className={styles.listItem}>Agile</li>
            <li className={styles.listItem}>C++</li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <img src='/profile.png' alt='profile-photo' />
        </div>
      </div>
    </div>
  );
};

export default Main;
