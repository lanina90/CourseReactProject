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
import Search from "../../common/Search/Search";
import { MdOutlineSearchOff } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../../redux/slices/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const search = useSelector((state) => state.search.search);
  const { userName, isAuth, logout} = useAuth();
  const {isMobile, isTablet} = useDevice();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const searchToggleHandler = () => {
    dispatch(setSearch(!search))
  }

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
          { search ? <MdOutlineSearchOff size={34} onClick={searchToggleHandler} /> : <GrSearch size={30} onClick={searchToggleHandler}/>}

        </div>
        {
          (!isMobile && !isTablet) &&  <SwitchButton/>
        }
      </div>
      {search &&  <Search searchToggleHandler={searchToggleHandler} /> }
    </header>
  );
};

export default Header;