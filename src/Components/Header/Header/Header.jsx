import React, { useEffect, useState} from 'react';
import styles from "./styles.module.scss";
import {BsFilm} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {MdClose} from "react-icons/md";
import {CiMenuFries} from "react-icons/ci";
import Navigations from "../../Navigation/Navigations";
import classNames from "classnames";
import {useAuth} from "../../../hooks/useAuth";
import {BiLogIn, BiLogOut} from "react-icons/bi";
import { GrSearch } from "react-icons/gr";
import {useDevice} from "../../../hooks/useDevice";
import SwitchButton from "../../Buttons/SwitchButton/SwitchButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userName, isAuth, logout} = useAuth();
  const {isMobile, isTablet} = useDevice();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <header className={styles.header}>
      {(isMobile || isTablet) &&
        <div className={styles['header-burger']} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdClose size={35}/> : <CiMenuFries size={35}/>}
          <div className={classNames(styles['header-menu'], {[styles['header-menu-open']]: isOpen})}>
            <Navigations/>
          </div>
        </div>
      }
      <NavLink to="/" className={styles['header-logo']}><BsFilm size={30} color={"whitesmoke"}/></NavLink>
      <div className={styles['header-actions']}>
        <div className={styles['header-actions-wrapper']}>
          {
            isAuth ?
              <>
                <NavLink
                  to="/auth"
                  onClick={logout}
                  className={styles['header-actions-wrapper-link']}
                >
                  <BiLogOut size={36}/></NavLink>
                <NavLink
                  to={`/u/${userName}`}
                  className={styles['header-actions-wrapper-link']}
                >
                  <div className={styles['header-actions-wrapper-link-profile']}>
                    {userName?.slice(0, 1)}</div></NavLink>
              </>
              :
                <NavLink
                  to="/auth"
                  className={styles['header-actions-wrapper-link']}
                >
                  <BiLogIn size={36}/>
                </NavLink>
          }
        </div>
        <div className={styles['header-search']}>
          <GrSearch size={30}/>
        </div>
        <SwitchButton/>
      </div>

    </header>
  );
};

export default Header;