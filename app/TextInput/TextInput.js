import React from 'react';
import styles from './TextInput.module.css';

const TextInput = ({ isTextArea = false, id, label }) => {
  id = 1;
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      {isTextArea ? <textarea></textarea> : <input type='text' id />}
    </div>
  );
};

export default TextInput;
