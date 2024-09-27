import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import style from './HomeLayout.module.scss';
import SliderWithWatchBtn from '../SliderItems/SliderWithWatchBtn';
import {useWindowWidth} from "../../hooks/useWindowWidth";
import {useSelector} from "react-redux";

const MainBannerSection = () => {
  const discover = useSelector((state) => state.movies.discover);
  const windowWidth = useWindowWidth();

  return (
    <>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation slidesPerView={1}
        spaceBetween={10}>

        {discover?.map((movie) =>
          <SwiperSlide key={movie.id}>
            <NavLink
              to={`/movie/${encodeURIComponent(movie.title.replace(/[\s:]/g, '-').toLowerCase())}`}
              className={style.swiperSlideMain}
              onClick={() => localStorage.setItem('movieId', movie.id )}>

              <SliderWithWatchBtn
                windowWidth={windowWidth}
                rating={(movie.vote_average * 10).toFixed(1)}
                displayAsPercentage={true}
                name={movie.title}
                bg={movie.backdrop_path}
                id={movie.id}/>
            </NavLink>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
};

export default MainBannerSection;