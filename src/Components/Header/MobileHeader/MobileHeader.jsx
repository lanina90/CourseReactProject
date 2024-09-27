import React, {useEffect, useState} from 'react';
import Search from "../../Search/Search";
import styles from "./styles.module.scss";
import {BsFilm} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import { MdClose } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";
import Navigations from "../../Navigation/Navigations";
import classNames from "classnames";


const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <div className={styles.header}>
      <div className={styles['header-burger']} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MdClose size={35}/> : <CiMenuFries size={35}/>}
        <div className={classNames(styles['header-menu'], {[styles['header-menu-open']]: isOpen})}>
          <Navigations/>
        </div>
      </div>
      <NavLink to="/"><BsFilm size={30} color={"whitesmoke"}/></NavLink>
      <div>
        <Search/>
        <div>
          logout
        </div>
        <div>
          profile
        </div>

      </div>

    </div>
  );
};

export default MobileHeader;