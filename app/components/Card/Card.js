import React from 'react';
import styles from './Card.module.css';
import Button from '../Button/Button';
import Link from 'next/link';
import Image from 'next/image';

const Card = ({ project }) => {
  return (
    <div className={styles.wrapper}>
      <Link
        href={project.href}
        target='_blank'
        style={{ position: 'relative' }}
      >
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
        <Link href={project.href} target='_blank' className={styles.link}>
          <h3>{project.title}</h3>
        </Link>
        <p>{project.description}</p>
        <Button href={project.href}>Details</Button>
      </div>
    </div>
  );
};

export default Card;
