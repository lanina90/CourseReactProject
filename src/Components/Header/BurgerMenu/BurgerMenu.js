import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './BurgerMenu.module.scss';
import { useAuth } from '../../../hooks/useAuth';
import Navigations from "../../Navigation/Navigations";


const BurgerMenu = ({ items }) => {

  const [modal, setModal] = useState(false);
  const [styleModal, setStyleModal] = useState();
  const [isActive, setIsActive] = useState(false);
  const { id } = useAuth();

  useEffect(() => {
    if (modal === false) {
      setStyleModal({
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        zIndex: '1001',
        top: 0,
      });
    } else {
      setStyleModal({
        backgroundColor: '#7c1d1d',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        zIndex: '1001',

      });
    }
    }, [modal,id]);


  const changeActive = () => {
    document.body.classList.toggle('lock');
    setIsActive(!isActive);
  };

  return (
    <div className={style.container}>
      <div className={`${style.headerBurger} ${isActive ? style.active : null}`} onClick={changeActive}>
        <span></span>
        <div className={style.menu}>
          <ul className={style.items} style={styleModal}>
            <NavLink to={'/'}>Home</NavLink>
            {/*<Navigations/>*/}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;