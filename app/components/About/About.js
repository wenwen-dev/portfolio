import React from 'react';
import styles from './About.module.css';
import { fontBody, fontScript } from '@/app/fonts';

const About = () => {
  return (
    <div className={styles.wrapper} id='about'>
      <div className={styles.maxWidthWrapper}>
        <h2 className={fontScript.className}>
          A Little <span className={fontBody.className}>About</span> Me
        </h2>
        <div className={`${fontBody.className} ${styles.content}`}>
          <div className={styles.left}>
            <p>
              When I told my parents that I was quitting my job at Apple and
              going back to school to learn computer science, in Canada, a
              country 10 thousands kilometers away, my dad asked me with utter
              confusion: "What on earth do you have against living a{' '}
              <em>comfortable</em> life and having a job people are so envious
              about?"
            </p>
            <p>
              That was one of the hardest conversations I've ever had, because
              we were essentially discussing how our core values are different
              (continuous learning and improvement vs. job security, taking on
              challenges vs. staying in the comfort zone).
            </p>
            <p>
              My family eventually came to peace with my decision. And I'm now
              having the best time of my life learning and building stuff with
              ReactJS stack every day. I've indeed picked the best field because
              the more I learn, the more I realise I don't know!
            </p>
          </div>
          <div className={styles.right}>
            {/* <p>
              Continuous learning and improvement is buried deep in my DNA.
              Looking back, I made most of my big life decisions based on
              whether there's an opportunity for me to learn: moving to the big
              city Beijing to learn English, studying in the UK to learn
              intercutural communication, transferring to another function at
              Apple to learn a new business...
            </p> */}
            <p>
              This unyielding passion for learning and growth has been helping
              me to stay curious and grow stronger against challenges and
              setbacks. I'm a firm believer in "productive failure" and it's one
              of the assets that I hope to bring to the team.
            </p>
            <p>
              My favourite part of the day is the first hour. I reserve 7-8am of
              every day for building cool stuff with React.js, rain or shine. So
              no matter how chaotic (or peaceful) the rest of my day gets, I'll
              feel content knowing I've completed the most important task and
              have gotten a bit better at building web apps.
            </p>
            <p>
              When I'm not in a staring contest with my computer, I like playing
              fetch with my dog Tato and exploring Richmond's cuisine heaven
              (lifetime Hei Hei Rice Roll fan).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
