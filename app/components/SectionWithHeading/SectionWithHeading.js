import React from 'react';
import styles from './SectionWithHeading.module.css';

const SectionWithHeading = ({ title, level = 2, className, children }) => {
  const HeadingTag = `h${level}`;

  return (
    <div className={styles.wrapper}>
      <HeadingTag className={className}>{title}</HeadingTag>
      {children}
    </div>
  );
};

export default SectionWithHeading;
