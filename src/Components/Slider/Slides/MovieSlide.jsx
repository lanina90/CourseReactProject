import React from 'react';
import {NavLink} from "react-router-dom";
import SliderItem from "../SliderItems/SliderItem";
import style from "../SwiperSlide.module.scss";

const MovieSlide = ({item}) => {const {title, poster_path, vote_average, id} = item

  return (
    <NavLink
      to={`/movie/${encodeURIComponent(title?.replace(/[\s:]/g, '-').toLowerCase())}`}
      onClick={() => localStorage.setItem('movieId', id)}
      className={style.swiperSlide}>
      <SliderItem
        title={title}
        img={poster_path}
        rating={(vote_average * 10).toFixed(1)}
        displayAsPercentage={true}
        canvasShow={true}
        movieId={id}
        showActionBadge={true}
      />
    </NavLink>
  );
};

export default MovieSlide;