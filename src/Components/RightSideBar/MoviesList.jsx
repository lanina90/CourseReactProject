import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./styles.module.scss";
import CircleRating from "../common/CircleRating/CircleRating";

const MoviesList = ({items, title}) => {

  return (
    <>
      <h3 className={style['movie-title']}>{title}</h3>
      {items && items.slice(0, 2).map((movie) =>
        <NavLink
          key={movie.id}
          to={`/movie/${encodeURIComponent(movie.title.replace(/[\s:]/g, '-').toLowerCase())}`}
          onClick={() => localStorage.setItem('movieId', movie.id)}>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
            className={style['movie-content']}
          >
            <div className={style['movie-content-info']}>
              <h3>{movie.original_title}</h3>
              <CircleRating
                rating={movie.vote_average * 10}
                displayAsPercentage={true}
                size={50}/>
            </div>
          </div>
        </NavLink>)}
    </>
  );
};

export default MoviesList;