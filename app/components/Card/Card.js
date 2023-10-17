import React from 'react';
import styles from './Card.module.css';
import Button from '../Button/Button';
import Link from 'next/link';

const Card = ({ project }) => {
  // const delegatedStyles = className;

  return (
    <div className={styles.wrapper}>
      <Link className={styles.imageWrapper} href={project.href}>
        <img
          className={styles.image}
          src={project.imgSrc}
          alt={project.imgAlt}
        />
      </Link>
      <div className={styles.projectDescription}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Button href={project.href}>Details</Button>
      </div>
    </div>
  );
};

export default Card;
