import React from 'react';
import styles from './Projects.module.css';
import Card from '../Card/Card';
import { projectOne, projectTwo } from '@/data';
import { fontScript } from '@/app/fonts';

const Projects = () => {
  // console.log(projectOne);
  return (
    <div id='projects' className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <h2>
          <span className={fontScript.className}>My</span> Projects
        </h2>
        <div className={styles.projectsContainer}>
          <Card project={projectOne} />
          <Card project={projectTwo} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
