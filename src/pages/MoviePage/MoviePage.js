import React, {useEffect, useState} from 'react';
import style from './MoviePage.module.scss';
import axios from 'axios';
import ActionBar from '../../Components/Action Bar/ActionBar';
import Loader from '../../Loader/Loader';
import {Helmet} from 'react-helmet';
import MainBanner from './components/MainBanner';
import OverviewSection from './components/OverviewSection';
import Slider from "../../Components/Slider/Slider";
import ActorSlide from "../../Components/Slider/Slides/ActorSlide";
import MovieSlide from "../../Components/Slider/Slides/MovieSlide";
import Typography from "@mui/material/Typography";
import Reviews from "../../Components/Reviews/Reviews";

const MoviePage = () => {
  const movieId = localStorage.getItem('movieId');
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,credits,similar`);
        setMovie(data);
      } catch (err) {
        alert('Something went wrong =(');
      }
    }

    fetchMovie();

  }, [movieId]);

  if (!movie) {
    return <Loader/>;
  }

  return (
    <>
      <Helmet>
        <title>{movie.title} | Overview, Ratings and Trailer </title>
      </Helmet>
      <ActionBar movie={movie} movieId={movie.id}/>
      <div className={style.wrapper}>
        <MainBanner movie={movie}/>
        <OverviewSection movie={movie}/>
        <Typography variant="h4" component="h2">Top Billed Cast</Typography>
        <Slider sliderData={movie?.credits?.cast?.slice(0, 20)} slide={ActorSlide}/>
        <Reviews/>
        {movie?.similar?.results.length > 1 &&
          <>
            <h2>Similar</h2>
            <Slider sliderData={movie?.similar?.results} slide={MovieSlide}/>
          </>
        }
      </div>
    </>
  );
};

export default MoviePage;


