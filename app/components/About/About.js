import React from 'react';
import styles from './About.module.css';
import { leagueSpartan, dancingScript } from '@/app/fonts';

const About = () => {
  return (
    <div className={styles.wrapper} id='about'>
      <div className={styles.maxWidthWrapper}>
        <h2 className={dancingScript.className}>
          A Little <span className={leagueSpartan.className}>About</span> Me
        </h2>
        <div className={`${leagueSpartan.className} ${styles.content}`}>
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
              That was such a hard question to answer, because an honest reply -
              "Because learning new stuff would make me happy" - would sound
              ridiculous and disrespectful to him.
            </p>
            <p>
              My family eventually came to peace with my decision. And I'm now
              having the best time of my life learning and building stuff with
              ReactJS stack every day. I've indeed picked the best field because
              the more I learn, the more I realise I don't know!
            </p>
          </div>
          <div className={styles.right}>
            <p>
              Continuous learning and improvement is buried deep in my DNA.
              Looking back, I made most of my big life decisions based on
              whether there's an opportunity for me to learn: moving to the big
              city Beijing to learn English, studying in the UK to learn
              intercutural communication, transferring to another function at
              Apple to learn a new business...
            </p>
            <p>
              This unyielding passion for learning and growth have helped me
              (and is still helping me) stay curious and grow stronger against
              challenges and setbacks, and it's what I hope to bring to the
              team.
            </p>
            <p>
              When I'm not in a staring contest with my computer, I like playing
              fetch with my dog Potato and exploring Richmond's cuisine heaven
              (lifetime Hei Hei Rice Roll fan).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
