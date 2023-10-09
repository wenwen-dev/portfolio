import React from 'react';
import styles from './About.module.css';
const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <h2>About Me</h2>
        <div className={styles.content}>
          <p>
            English was the first language I learnt that opened up a whole new
            world to me. Coding was the second, and it connects me to an amazing
            world of creating amazing stuff. After working a few years, I
            decided to enter this amazing world.
          </p>
          <p>
            I'm currently a computer science student. My interest is frontend
            web development. I love using React to build interactive, beautiful,
            and accessible applications.
          </p>
          <p>
            Besides coding, I'm a fan of wasting time to figure out how to save
            time. Productivity is my pet peeve. Continuous improvement is my
            thing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
