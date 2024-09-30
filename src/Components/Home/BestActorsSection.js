import React, {memo} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import style from './HomeLayout.module.scss';
import SliderItem from '../SliderItems/SliderItem';
import {useWindowWidth} from "../../hooks/useWindowWidth";
import {useSelector} from "react-redux";
import {useDevice} from "../../hooks/useDevice";

const BestActorsSection = () => {
  const popularActors = useSelector((state) => state.movies.popularActors);

  const {isMobile, isTablet, isLaptop} = useDevice()

  return (
    <Swiper
      id="main"
      tag="section"
      wrapperTag="ul"
      navigation
      slidesPerView={isMobile ? 2 : (isTablet || isLaptop) ? 3 : 5}
      spaceBetween={10}>
      {
        popularActors?.map((actor) =>
          <SwiperSlide key={actor.id}>
            <NavLink
              to={`/person/${actor.name.replace(/\s/g, '-')}`}
              className={style.swiperSlide}
              onClick={() => localStorage.setItem('actorId', actor.id)}
            >
              <SliderItem
                title={actor.name}
                img={actor.profile_path}
                rating={actor.popularity.toFixed(1)}
                displayAsPercentage={false}
                canvasShow={false}
              />
            </NavLink>
          </SwiperSlide>
        )
      }
    </Swiper>
  );
};

export default memo(BestActorsSection);