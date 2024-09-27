import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Link } from 'react-scroll';
import styles from "./styles.module.scss"

const ScrollButton = () => {
  return (
    <>
      <Link to={'mainContent'} smooth={true} duration={500} >
        <AiOutlineArrowUp size={80} className={styles.arrow}></AiOutlineArrowUp>
      </Link>
    </>
  );
};

export default ScrollButton;