import React, {useEffect, useState} from 'react';
import './Layout.scss';
import {Outlet} from 'react-router';
import ScrollButton from '../Components/Buttons/ScrollButton/ScrollButton';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../Loader/Loader';
import {loaderAction} from '../Loader/loaderAction';
import Navigations from '../Components/Navigation/Navigations';
import {useWindowWidth} from "../hooks/useWindowWidth";
import {useFetchMovies} from "../hooks/useFetchMovies";
import Header from "../Components/Header/Header/Header";
import RightSidebar from "../Components/RightSideBar/RightSidebar";
import {fetchUserData} from "../redux/slices/userSlice";
import {useAuth} from "../hooks/useAuth";
import {useDevice} from "../hooks/useDevice";

const Layout = () => {
  const {isLaptop, isDesktop} = useDevice();
  const [showButton, setShowButton] = useState(false);
  const popMovie = useSelector((state) => state.movies.popularMovie);
  const loading = useSelector((store) => store.loading);

  const fetchMovies = useFetchMovies('popularMovie')
  const dispatch = useDispatch();
  const {id} = useAuth();
  const getPopMovies = () => fetchMovies('popularMovie')

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (id) {
      dispatch(fetchUserData(id));
    }
  }, [id]);


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
      {<Header/>}
      {(isLaptop || isDesktop) ?
        loading ? <Loader/> : <>
          <div id={'mainContent'} className={'containerTopLayout'}>
            <Navigations/>
            <main className={'containerMain'}>
              <Outlet/>
              {showButton && <ScrollButton/>}
            </main>
            <RightSidebar/>
          </div>
        </>
        : <main className={'containerMain'}>
          <Outlet/>
        </main>
      }
    </>
  );
};

export default Layout;