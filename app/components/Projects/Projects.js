import React from 'react';
import styles from './Projects.module.css';
import Card from '../Card/Card';
import { projectPortfolio, projectComponentLibrary } from '@/data';
import { fontScript } from '@/app/fonts';

const Projects = () => {
  return (
    <div id='projects' className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <h2>
          <span className={fontScript.className}>My</span> Projects
        </h2>
        <p>
          As a junior developer, I refrain from using UI frameworks that would
          defeat the purpose of learning the craft. The sizes of my projects are
          on the smaller side at this stage, but I code with scalability and
          maintainability in mind.
        </p>
        <div className={styles.projectsContainer}>
          <Card project={projectPortfolio} />
          <Card project={projectComponentLibrary} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
