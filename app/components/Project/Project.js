import React from 'react';
import styles from './Project.module.css';
import SectionWithHeading from '../SectionWithHeading/SectionWithHeading';
import { projectDetails } from '@/data';
import { fontHeading } from '@/app/fonts';

const Project = () => {
  return (
    <div className={styles.wrapper}>
      <SectionWithHeading
        level={1}
        title={projectDetails.intro.title}
        className={fontHeading.className}
      >
        {projectDetails.intro.details}{' '}
        <SectionWithHeading
          level={2}
          title={projectDetails.goal.title}
          className={fontHeading.className}
        >
          {projectDetails.goal.details}
        </SectionWithHeading>
        <SectionWithHeading level={2} title={projectDetails.spotlight.title}>
          {projectDetails.spotlight.details}
        </SectionWithHeading>
        <SectionWithHeading level={2} title={projectDetails.lessons.title}>
          {projectDetails.lessons.details}
        </SectionWithHeading>
        <SectionWithHeading level={2} title={projectDetails.next.title}>
          {projectDetails.next.details}
        </SectionWithHeading>
      </SectionWithHeading>
    </div>
  );
};

export default Project;
