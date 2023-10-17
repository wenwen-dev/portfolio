import React from 'react';
import styles from './Contact.module.css';
import Menu from '../Menu/Menu';
import { fontScript } from '@/app/fonts';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div className={styles.wrapper} id='contact'>
      <div className={styles.maxWidthWrapper}>
        <h2>
          Contact <span className={fontScript.className}>Me</span>
        </h2>
        <div className={styles.lowerWrapper}>
          <div className={styles.getInTouch}>
            <p>
              I'd love to discuss how I can potentially add value to your team,
              and/or hear about amazing stuff you are working on. Let's connect!
            </p>
            <Menu />
          </div>
          {/* <ContactForm /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
