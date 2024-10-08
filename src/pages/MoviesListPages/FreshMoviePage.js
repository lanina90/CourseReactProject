import React, { useEffect, useState } from 'react';
import MovieBlock from '../../Components/MovieBlock/MovieBlock';
import axios from 'axios';
import styles from '../Pages.module.scss';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const FreshMoviePage = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,credits,similar`);
        setMovies(data);
      } catch (err) {
        alert('Error');
      }
    }

    fetchMovie();
  }, []);

  return (
    <>
      <Helmet>
        <title>Newest Movies of 2023: Discover the Latest Cinema Releases</title>
      </Helmet>
      <div className={styles.container}>
        <h1>Fresh movies</h1>
        <div className={styles.wrapper}>
          {
            movies?.results.map((movie) =>
              <NavLink
                to={`/movie/${encodeURIComponent(movie.title.replace(/[\s:]/g, '-').toLowerCase())}`}
                onClick={() => localStorage.setItem('movieId', movie.id)}
                key={movie.id}
              >
                <MovieBlock
                  image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  title={movie.title}
                  rating={(movie.vote_average * 10).toFixed(1)}
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

export default FreshMoviePage;