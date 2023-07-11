import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import style from './Outline.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {loadUserFavorites} from "../../redux/backend/favoriteBackendSLice";
import {Swiper, SwiperSlide} from "swiper/react";


const FavoriteMovies = ({userId}) => {

    const dispatch = useDispatch();
    const {favorites, isLoading} = useSelector((state) => state.favorites);
  console.log(favorites);
  useEffect(() => {
      if(userId) {
        dispatch(loadUserFavorites(userId));
      }

    }, [userId, dispatch]);

    return (

      <section className={style.container}>
        <h3>FAVORITE MOVIES </h3>
        <Swiper
          id="main"
          tag="section"
          wrapperTag="ul"
          navigation slidesPerView={1}
          spaceBetween={10}>
          {
            favorites?.map((movie) =>
              <SwiperSlide key={movie.id}>
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.movieInfo.poster_path})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                  }}
                  className={style.wrapperBox}
                >
                  <NavLink
                    key={movie.id}
                    to={`/movie/${encodeURIComponent(movie.movieInfo.title.replace(/[\s:]/g, '-').toLowerCase())}`}
                    onClick={() => localStorage.setItem('movieId', movie.movieInfo.id)}>
                  </NavLink>
                </div>
              </SwiperSlide>
            )
          }
        </Swiper>
      </section>

    );
  }
;

export default FavoriteMovies;