import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { NavLink } from 'react-router-dom';
import style from '../../pages/MoviePage/MoviePage.module.scss';
import SliderItem from '../SliderItems/SliderItem';
import {useMediaQuery} from "@mui/material";

const SimilarBlock = ({ movie }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <>
      <Swiper
          modules={[Navigation]}
          id="main"
          tag="section"
          wrapperTag="ul"
          navigation slidesPerView={isMobile ? 2 : 4}
          spaceBetween={10}>

          {movie?.similar.results.map((similar) =>
            similar.poster_path &&
            <SwiperSlide key={similar.id}>
              <NavLink to={`/movie/${encodeURIComponent(similar.title.replace(/[\s:]/g, '-').toLowerCase())}`}
                       className={style.swiperSlide}
                       onClick={() => localStorage.setItem('movieId', similar.id)}>
                <SliderItem
                  img={similar.poster_path ? similar.poster_path : similar.backdrop_path}
                  rating={(similar.vote_average * 10).toFixed(1)}
                  displayAsPercentage={true}
                  canvasShow={true}
                  movieId={similar.id}
                  showActionBadge={true}
                />
              </NavLink>
            </SwiperSlide>
          )}
        </Swiper>

    </>
  );
};

export default SimilarBlock;