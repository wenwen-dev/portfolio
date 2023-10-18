'use client';

import React from 'react';
import TextInput from '@/app/components/TextInput/TextInput';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextInput label='name' required type='text' />
      <TextInput label='email' required type='email' />
      <TextInput
        isTextArea={true}
        label='message'
        minLength={5}
        maxLength={100}
      />
      <Button>Send</Button>
    </form>
  );
};

export default ContactForm;
