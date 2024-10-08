import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchMovies } from '../../redux/slices/movieSlice';
import styles from '../Pages.module.scss';
import MovieBlock from '../../Components/MovieBlock/MovieBlock';
import { Helmet } from 'react-helmet';


const PopularMoviesPage = () => {


  const dataMovies = useSelector((state) => state.movies.popularMovie);

  const dispatch = useDispatch();
  useEffect(() => {
    const getPopMovies = async () => {
      dispatch(fetchMovies({ type: 'popularMovie' }));
    };
    if (dataMovies.length < 2) {
      getPopMovies();
    }
  }, [dataMovies.length]);

  return (

    <>
      <Helmet>
        <title>Top Trending Movies of 2023: Comprehensive Guide to the Most-Watched Films</title>
      </Helmet>

      <div className={styles.container}>
        <h1>Popular Movies</h1>
        <div className={styles.wrapper}>
          {
            dataMovies?.map((film) =>
              <NavLink
                to={`/movie/${encodeURIComponent(film.title.replace(/[\s:]/g, '-').toLowerCase())}`}
                onClick={() => localStorage.setItem('movieId', film.id)}
                key={film.id}
              >
                <MovieBlock
                  image={`https://image.tmdb.org/t/p/w300/${film.poster_path}`}
                  title={film.title}
                  rating={(film.vote_average * 10).toFixed(1)}
                  displayAsPercentage={true}
                  canvasShow={true}
                />
              </NavLink>
            )
          }
        </div>
      </div>
    </>
  );
};


export default PopularMoviesPage;