import React from 'react';
import styles from './Contact.module.css';
import Menu from '../Menu/Menu';
import { fontScript } from '@/app/fonts';
import TextInput from '@/app/TextInput/TextInput';
import Footer from '../Footer/Footer';
import Button from '../Button/Button';

const Contact = () => {
  return (
    <div className={styles.wrapper} id='contact'>
      <div className={styles.maxWidthWrapper}>
        <h2>
          Contact <span className={fontScript.className}>Me</span>
        </h2>
        <form className={styles.form}>
          <TextInput label='Name' />
          <TextInput label='Email' />
          <TextInput isTextArea={true} label='Message' />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
