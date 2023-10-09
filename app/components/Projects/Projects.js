import React from 'react';
import styles from './Projects.module.css';
import Project from '../Project/Project';

const Projects = ({ projects }) => {
  return (
    <ul>
      {projects.map(project => (
        <Project title={project.title} description={project.description} />
      ))}
    </ul>
  );
};

export default Projects;
