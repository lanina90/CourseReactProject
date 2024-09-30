import React, {memo} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import style from './HomeLayout.module.scss';
import SliderItem from '../SliderItems/SliderItem';
import {useSelector} from "react-redux";
import {useDevice} from "../../hooks/useDevice";

const TrendingNowSection = () => {
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);
  const {isMobile, isTablet, isLaptop} = useDevice()


  return (
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      navigation slidesPerView={isMobile ? 2 : (isTablet || isLaptop) ? 3 : 5}
      spaceBetween={10}>
      {
        trendingMovies?.map((movie) =>
          <SwiperSlide key={movie.id}>
            <NavLink
              to={`/movie/${encodeURIComponent(movie.title.replace(/[\s:]/g, '-').toLowerCase())}`}
              onClick={() => localStorage.setItem('movieId', movie.id )}
              className={style.swiperSlide}>
              <SliderItem
                title={movie.title}
                img={movie.poster_path}
                rating={(movie.vote_average * 10).toFixed(1)}
                displayAsPercentage={true}
                canvasShow={true}
                movieId={movie.id}
                showActionBadge={true}
              />
            </NavLink>
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

export default memo(TrendingNowSection);