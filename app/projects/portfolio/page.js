import React from 'react';
import styles from './page.module.css';
import Header from '@/app/components/Header/Header';
import SectionWithHeading from '@/app/components/SectionWithHeading/SectionWithHeading';
import { fontHeading } from '@/app/fonts';
import Contact from '@/app/components/Contact/Contact';
import Footer from '@/app/components/Footer/Footer';
import Link from 'next/link';

export const metadata = {
  title: "Wenwen's Project - Portfolio Website",
  description: "Wenwen's portfolio website showcasing web dev skills",
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
            Portfolio website that I designed and built from scratch. It
            features an easy-to-maintain component architecture, responsive
            design, accessibility, and my own design tokens.
          </p>
          <p>Tech stack: ReactJS, CSS Module, NextJS, Figma</p>
          <div>
            <Link
              href='https://github.com/wenwen-dev/portfolio'
              target='_blank'
            >
              See code
            </Link>
          </div>
          <SectionWithHeading
            level={2}
            title='Goals and Purpose'
            className={fontHeading.className}
          >
            <p>
              Originally, this website was solely where I planned to showcase my
              projects - atomic and bare bones. As I worked on it, it naturally
              asked to be more: what's my design system, are my components
              reusable, are there any enjoyable interactive surprises for the
              user?
            </p>
            <p>
              It has evolved to serve 2 main purposes now. It is a personal
              brand with my own design. It also shows the readers who I am and
              what I value through both words and code: simplicity,
              responsiveness, accessibility, and clarity.
            </p>
          </SectionWithHeading>
          <SectionWithHeading level={2} title='Spotlight'>
            <p>
              I chose different CSS layout modes for different purposes and
              concerns. For example, I used CSS Grid to display projects grid,
              so that content of each cell can be easily aligned in the same
              way, producing a clear and symmetric look.
            </p>
          </SectionWithHeading>
          <SectionWithHeading level={2} title='Lessons Learnt'>
            <p>
              One of the biggest bumps I ran into was a mysterious gap between
              the right edge of the content and the edge of the screen on really
              small devices. I identified the element causing it by deleting
              (and restoring) them in DOM. The root cause was that instead of a
              range, I set a specific width on the image wrapper in the hero, so
              even though the image was responsive, its parent was not, which
              made the issue emerge when the screen size is smaller than that
              value.
            </p>
            <p>
              Another big learning is to have scalability in mind right from the
              start. I hard coded my Nav thinking it was safe to do so
              considering I will only be navigating between sections on the same
              page. And later on when I decided to create new routes, the Nav
              stopped being reusable. This also made me realise having my own
              component library could be potentially a time and effort saving
              idea.
            </p>
          </SectionWithHeading>
          <SectionWithHeading level={2} title="What's next">
            <p>
              I plan to add a Sprinkle component which can place sprinkling
              stars on elements of choosing, to create delightful surprises to
              the user. I also plan to enable a form submission modal in Contact
              Me, so the user can choose another form to contact me, and also
              for me to practice building an accessible modal from scratch.
            </p>
          </SectionWithHeading>
        </SectionWithHeading>
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Project1;
