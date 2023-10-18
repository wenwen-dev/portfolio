import React from 'react';
import styles from './Card.module.css';
import Button from '../Button/Button';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ project }) => {
  // const delegatedStyles = className;

  return (
    <div className={styles.wrapper}>
      <Link href={project.href} style={{ position: 'relative' }}>
        <div className={styles.imageWrapper}>
          <Image
            src={project.imgSrc}
            alt={project.imgAlt}
            fill
            sizes='100%'
            style={{
              borderRadius: '8px',
              objectFit: 'cover',
              objectPosition: 'left top',
              boxShadow:
                '0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            }}
          />
        </div>
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
