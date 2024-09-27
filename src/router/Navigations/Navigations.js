import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {BsFilm} from 'react-icons/bs';
import styles from "./Navigations.module.scss"
import {navigationLinks} from "../../constants/navigationLinks";
import {useDispatch} from "react-redux";
import {useAuth} from "../../hooks/useAuth";
import {loadData} from "../../utils/helperFunctions/loadUserDataFromFB";
import {getAuth, signOut} from "firebase/auth";
import {removeUser} from "../../redux/slices/userSlice";
import {BiLogIn, BiLogOut} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {useScreenWidth} from "../../hooks/useScreenWidth";

const Navigations = () => {
  const dispatch = useDispatch();
  const {isAuth, isAdmin} = useAuth();
  const {id} = useAuth();
  const [userData, setUserData] = useState(null);
  const userName = userData && userData.userName;
  const [linkExpended, setLinkExpended] = useState(true);
  const screenWidth = useScreenWidth()

  useEffect(() => {
    if (id) loadData({setUserData, id});
  }, [id]);

  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(removeUser());
      setUserData(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLinksDropdown = () => {
    if (screenWidth > 1280) return null

    setLinkExpended(!linkExpended)

  }

  return (
    <nav className={styles['navigation']}>
      <NavLink to="/" className={styles['navigation-title']}><BsFilm size={30}/><h1>MovieMagic</h1></NavLink>
      <p>menu</p>
      <div className={styles['navigation-wrapper']}>
        {navigationLinks.menu.map(({to, label, icon}) => (
          <NavLink key={label} className={styles['navigation-link']} to={to}> {icon}{label}</NavLink>
        ))}
      </div>
      <p>popular genres</p>
      <div className={styles['navigation-wrapper']}>
        {navigationLinks.genders.map(({to, label, icon}) => (
          <NavLink key={label} className={styles['navigation-link']} to={to}> {icon}{label}</NavLink>
        ))}
      </div>
      <p>Profile</p>
      {
        isAuth ?
          <div className={styles['navigation-wrapper']}>
            <NavLink
              to="/auth"
              onClick={logout}
              className={styles['navigation-link']}
              style={{cursor: 'pointer'}}
            >
              <BiLogOut size={25} color={'#E30914'}/>Logout</NavLink>
            <NavLink
              to={`/u/${userName}`}
              className={styles['navigation-link']}
              style={{cursor: 'pointer'}}
            >
              <CgProfile size={25} color={'#E30914'}/>View Profile</NavLink>
          </div>
          :
          <div className={styles['navigation-wrapper']}>
            <NavLink
              to="/auth"
              className={styles['navigation-link']}
              style={{cursor: 'pointer'}}
            >
              <BiLogIn size={25} color={'#E30914'}/>Login</NavLink>
          </div>
      }
    </nav>
  );
};

export default Navigations;