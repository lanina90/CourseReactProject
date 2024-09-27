import React, {useEffect, useState} from 'react';
import './Layout.scss';
import {Outlet} from 'react-router';
import Search from '../Components/Search/Search';
import PopularMovies from '../Components/Outline/PopularMovies/PopularMovies';
import FavoriteMovies from '../Components/Outline/FavoriteMovies/FavoriteMovies';
import ScrollButton from '../Components/Buttons/ScrollButton/ScrollButton';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../Loader/Loader';
import {loaderAction} from '../Loader/loaderAction';
import CustomizedSwitches from '../Components/Buttons/SwitchButton/switchThemeBtn';
import Navigations from '../Components/Navigation/Navigations';
import {useWindowWidth} from "../hooks/useWindowWidth";
import {useFetchMovies} from "../hooks/useFetchMovies";
import MobileHeader from "../Components/Header/MobileHeader/MobileHeader";
import RightSidebar from "../Components/RightSideBar/RightSidebar";

const Layout = () => {

  const [showButton, setShowButton] = useState(false);
  const popMovie = useSelector((state) => state.movies.popularMovie);
  const loading = useSelector((store) => store.loading);

  const fetchMovies = useFetchMovies('popularMovie')
  const dispatch = useDispatch();

  const getPopMovies = () => fetchMovies('popularMovie')

  const windowWidth = useWindowWidth();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    getPopMovies();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  if (popMovie.length > 1) {
    setTimeout(() => {
      dispatch(loaderAction());
    }, 2000);
  }

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <>
      {windowWidth < 768 && <MobileHeader/>}
      {windowWidth >= 768 ?
        loading ? <Loader></Loader> : <>
          <section id={'mainContent'} className={'containerTopLayout'}>
            <Navigations/>
            <main className={'containerMain'}>
              <Outlet/>
              {showButton && <ScrollButton/>}
            </main>
            {windowWidth > 1280 &&
             <RightSidebar/>
            }
          </section>
        </>
        : <main className={'containerMain'}>
          <Outlet/>
        </main>}
    </>
  );
};

export default Layout;