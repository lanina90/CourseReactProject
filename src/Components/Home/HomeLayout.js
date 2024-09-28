import React, { useEffect } from 'react';
import style from './HomeLayout.module.scss';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import { Helmet } from 'react-helmet';
import MainBannerSection from './MainBannerSection';
import TrendingNowSection from './TrendingNowSection';
import BestActorsSection from './BestActorsSection';
import Search from '../Search/Search';
import {useWindowWidth} from "../../hooks/useWindowWidth";
import {useFetchMovies} from "../../hooks/useFetchMovies";
import Header from "../Header/Header/Header";
import {useDevice} from "../../hooks/useDevice";

const HomeLayout = () => {
  SwiperCore.use([Navigation]);

  const fetchMoviesByType = useFetchMovies();

  useEffect(() => {
    const getTrending = () => fetchMoviesByType('trendingMovies');
    const getActors = () => fetchMoviesByType('popularActors');
    const getDiscover = () => fetchMoviesByType('discover');
    const getPopMovies = () => fetchMoviesByType('popularMovie');

    getTrending();
    getActors();
    getDiscover();
    getPopMovies();

  }, []);

  return (
    <>
      <Helmet>
        <title>Latest Movie Trailers, Reviews & Overviews | Ultimate Cinema Guide</title>
      </Helmet>
      <div className={style.wrapper}>
        <MainBannerSection/>
        <h2>Trending Now </h2>
        <TrendingNowSection/>
        <h2>Best Actors</h2>
        <BestActorsSection/>
      </div>
    </>


  );
};

export default HomeLayout;