import React from 'react';
import styles from './TextInput.module.css';

const TextInput = ({ isTextArea = false, id, label, ...delegated }) => {
  const generatedId = React.useId();
  id = id || `${label}-${generatedId}`;

  const firstLetter = label.charAt(0).toUpperCase();
  const labelCapitalized = firstLetter + label.substring(1);

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{labelCapitalized}</label>
      {isTextArea ? (
        <textarea id={id} {...delegated}></textarea>
      ) : (
        <input id={id} {...delegated} />
      )}
    </div>
  );
};

export default TextInput;
