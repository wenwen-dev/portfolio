import React from 'react';
import styles from './page.module.css';
import Header from '@/app/components/Header/Header';
import SectionWithHeading from '@/app/components/SectionWithHeading/SectionWithHeading';
import { fontHeading } from '@/app/fonts';
import Contact from '@/app/components/Contact/Contact';
import Footer from '@/app/components/Footer/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Wenwen's Project One",
  description: "Wenwen's projects showcasing frontend web dev skills",
};

const Project1 = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={`${fontHeading.className} ${styles.main}`}>
        <SectionWithHeading
          level={1}
          title='Portfolio Website'
          className={fontHeading.className}
        >
          <p>
            My portfolio website that I designed and built from scratch. It
            features an easy-to-maintain component architecture, responsive
            design, accessibility, and my own design tokens.
          </p>
          <p>Tech stack: ReactJS, CSS Module, Figma</p>
          <div>
            <Link href='https://github.com/wenwen-dev/portfolio'>See code</Link>
          </div>
          <SectionWithHeading
            level={2}
            title='Goals and Purpose'
            className={fontHeading.className}
          >
            <p>This site is to introduce myself to potential employers.</p>
          </SectionWithHeading>
          <SectionWithHeading level={2} title='Spotlight'>
            <p>Spotlight...</p>
          </SectionWithHeading>
          <SectionWithHeading level={2} title='Lessons Learnt'>
            <p>Lessons I learnt...</p>
          </SectionWithHeading>
          <SectionWithHeading level={2} title="What's next">
            <p>After this, I plan to practice the related skills ...</p>
          </SectionWithHeading>
        </SectionWithHeading>
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Project1;
