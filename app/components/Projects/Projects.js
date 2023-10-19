import React from 'react';
import styles from './Projects.module.css';
import Card from '../Card/Card';
import { projectOne, projectTwo } from '@/data';
import { fontScript } from '@/app/fonts';

const Projects = () => {
  return (
    <div id='projects' className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <h2>
          <span className={fontScript.className}>My</span> Projects
        </h2>
        <p>
          As an aspiring junior web developer, I carefully and consciously
          selected each project to develop the essential skills for the role. No
          patched-up borrowed code. No libraries which would defeat the purpose
          of learning the craft. Small but{' '}
          <span>
            <em>concrete</em>
          </span>{' '}
          projects.
        </p>
        <div className={styles.projectsContainer}>
          <Card project={projectOne} />
          <Card project={projectTwo} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
