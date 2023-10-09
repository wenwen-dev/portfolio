import React from 'react';
import styles from './Menu.module.css';
import { AiFillGithub } from 'react-icons/ai';
import { PiLinkedinLogo } from 'react-icons/pi';
import { CiDark } from 'react-icons/ci';
import { TbSunLow } from 'react-icons/tb';

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <a href='https://github.com/wenwen-dev' target='_blank'>
        <AiFillGithub size={30} opacity={0.8} />
      </a>
      <a href='https://www.linkedin.com/in/wang-wen-wenwen/' target='_blank'>
        <PiLinkedinLogo size={30} opacity={0.8} />
      </a>
      {/* <CiDark size={30} opacity={0.8} /> */}
      {/* <TbSunLow size={30} opacity={0.8} /> */}
    </div>
  );
};

export default Menu;
