import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import profileImg from '../../../public/profile.png';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <div className={styles.intro}>
          <h1>Hi there, I'm Wenwen.</h1>
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
            <li className={styles.listItem}>mongoDB</li>
            <li className={styles.listItem}>Agile</li>
            <li className={styles.listItem}>C++</li>
          </ul>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={profileImg}
            alt='profile-photo'
            width={260}
            height={260}
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;