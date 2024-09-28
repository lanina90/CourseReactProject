import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./Navigations.module.scss"
import {navigationLinks} from "../../constants/navigationLinks";
import {useAuth} from "../../hooks/useAuth";
import {BiLogIn, BiLogOut} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {useDevice} from "../../hooks/useDevice";

const Navigations = () => {
  const {userName, isAuth, logout} = useAuth();
  const {isLaptop, isDesktop} = useDevice();

  return (
    <nav className={styles['navigation']}>
      <div className={styles['navigation-container']}>
        <p>menu</p>
        <div className={styles['navigation-wrapper']}>
          {navigationLinks.menu.map(({to, label, icon}) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) =>
                styles['navigation-link'] + (isActive ? ` ${styles['navigation-link-active']}` : "")
              }
            > {icon}{label}</NavLink>
          ))}
        </div>
        <p>popular genres</p>
        <div className={styles['navigation-wrapper']}>
          {navigationLinks.genders.map(({to, label, icon}) => (
            <NavLink
              key={label}
              className={({ isActive }) =>
                styles['navigation-link'] + (isActive ? ` ${styles['navigation-link-active']}` : "")
              }
              to={to}
            > {icon}{label}</NavLink>
          ))}
        </div>
        {
          (isLaptop || isDesktop) &&
          <>
            <p>Profile</p>
            {
              isAuth ?
                <div className={styles['navigation-wrapper']}>
                  <NavLink
                    to="/auth"
                    onClick={logout}
                    className={styles['navigation-link']}
                  >
                    <BiLogOut size={24} />Logout</NavLink>
                  <NavLink
                    to={`/u/${userName}`}
                    className={styles['navigation-link']}
                  >
                    <CgProfile size={23}/>View Profile</NavLink>
                </div>
                :
                <div className={styles['navigation-wrapper']}>
                  <NavLink
                    to="/auth"
                    className={styles['navigation-link']}
                  >
                    <BiLogIn size={24}/>Login</NavLink>
                </div>
            }
          </>
        }
      </div>

    </nav>
  );
};

export default Navigations;