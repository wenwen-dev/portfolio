import React from 'react';
import styles from './Main.module.css';
import Image from 'next/image';
import profileImg from '../../../public/profile.png';
import Link from '../Link/Link';

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <div className={styles.intro}>
          <h1>Hi, I'm Wenwen.</h1>
          <p>
            The first hour of my every day is reserved for building stuff with
            ReactJS.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>HTML</li>
            <li className={styles.listItem}>CSS</li>
            <li className={styles.listItem}>JavaScript</li>
            <li className={styles.listItem}>ReactJS</li>
            <li className={styles.listItem}>mongoDB</li>
            <li className={styles.listItem}>Git</li>
            <li className={styles.listItem}>Agile</li>
            <li className={styles.listItem}>C++</li>
            <li className={styles.listItem}>Java</li>
          </ul>
          <button className={styles.btn}>
            <a href='https://github.com/wenwen-dev' target='_blank'>
              GitHub
            </a>
          </button>
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
