import React from 'react';
import styles from './page.module.css';
import Header from '@/app/components/Header/Header';
import Contact from '@/app/components/Contact/Contact';

export const metadata = {
  title: "Wenwen's Project One",
  description: "Wenwen's projects showcasing frontend web dev skills",
};

const project1 = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <h1>Sole&Ankle</h1>
        <div className={styles.section}>
          <p>
            This is a workshop of Josh Comeau's CSS for JS Developers course.
            With each sub-task, I challenged myself to code on my own without
            looking at the solution code, then compare mine with Josh's code and
            consolidate concepts and learn good practices.
          </p>
          <p>
            Technology: Flexbox, positioned layout, styled-components,
            responsive CSS
          </p>
        </div>
        <div className={styles.section}>
          <h2>Purpose & Goal</h2>
          <p>
            This workshop, designed by Josh Comeau, was to build a mock sneaker
            store using a combination of layout modes, including Flow layout,
            Positioned layout, and Flexbox. It also features responsive CSS.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Spotlight</h2>
          <p>
            The app features responsive layout with desktop, tablet, and mobile
            breakpoints, ensuring good UX on all types of devices.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Lessons Learnt</h2>
          <p>
            1. Setting up breakpoints. Instead of hard coding breakpoints in
            multiple components, a better practice is creating a BREAKPOINTS
            object that contains breakpoints with meaningful names. This makes
            the setup easier to change in the future.
          </p>
          <p>
            2. Have accessibility in mind at all times. Use the "VisuallyHidden"
            component to add a label for icons and other non-text elements.{' '}
          </p>
        </div>
        <div className={styles.section}>
          <h2>Extra</h2>
          <p>
            I chose to take Josh's course because I'm passionate about frontend
            web development and things taught in my program did not go deep in
            this area.{' '}
          </p>
        </div>
      </main>
      <Contact />
    </div>
  );
};

export default project1;
