import React from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { PiLinkedinLogo } from 'react-icons/pi';
import { CiDark } from 'react-icons/ci';
import { TbSunLow } from 'react-icons/tb';
import { MdOutlineEmail } from 'react-icons/md';

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <Link href='mailto:wenwen.wangwen@gmail.com' target='_blank'>
        <MdOutlineEmail size={35} />
      </Link>
      <Link href='https://github.com/wenwen-dev' target='_blank'>
        <AiFillGithub size={35} />
      </Link>
      <a href='https://www.linkedin.com/in/wang-wen-wenwen/' target='_blank'>
        <PiLinkedinLogo size={35} />
      </a>

      {/* <CiDark size={30} opacity={0.8} /> */}
      {/* <TbSunLow size={30} opacity={0.8} /> */}
    </div>
  );
};

export default Menu;
