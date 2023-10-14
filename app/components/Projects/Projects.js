import React from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
// import yum from './../../../public/yum.png';
import project2 from './../../../public/project2.png';
import { leagueSpartan, openSans } from '@/app/fonts';

const Projects = () => {
  return (
    <div
      id='projects'
      className={`${styles.wrapper} ${leagueSpartan.className}`}
    >
      <div className={styles.maxWidthWrapper}>
        <h2>Projects</h2>
        <div className={styles.grid}>
          <div className={styles.projectWrapper}>
            <a href='/projects/one' target='_blank'>
              <div className={styles.placeholder}></div>
            </a>

            <h3>Yum - a Cuisine Wishlist</h3>
            <p>
              My very first full stack project. Built by using React (frontend),
              Node and MongoDB (backend). It allows users to log and retrieve
              cuisines and foods, and also get ideas when no idea what to have
              for dinner.
            </p>
            <p>Challenges met: state variables grew stale</p>
          </div>
          <div className={styles.projectWrapper}>
            <a href='/projects/two' target='_blank'>
              <div className={styles.placeholder}></div>

              {/* <div className={styles.imageWrapper}>
                { <Image
                  src={project2}
                  alt='project screenshot'
                  style={{
                    objectFit: 'scale-down',
                    borderRadius: '4px',
                    width: '100%',
                  }}
                /> }
              </div> */}
            </a>
            <h3>Product Feedback App</h3>
            <p>
              This is a project to practice frontend skills, incl. HTML, CSS,
              JavaScript, ReactJS, TypeScript. It's a commonly seen app to track
              product feedback from users and allows filtered views.
            </p>
            <p>Challenges met: data storage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
