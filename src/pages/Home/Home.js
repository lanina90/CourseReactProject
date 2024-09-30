import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import style from "./styles.module.scss";
import SliderWithWatchBtn from "../../Components/Slider/SliderItems/SliderWithWatchBtn";
import {useFetchMovies} from "../../hooks/useFetchMovies";
import {useSelector} from "react-redux";
import {useDevice} from "../../hooks/useDevice";
import {Helmet} from "react-helmet";
import Slider from "../../Components/Slider/Slider";
import MovieSlide from "../../Components/Slider/Slides/MovieSlide";
import ActorSlide from "../../Components/Slider/Slides/ActorSlide";

const Banner = ({item}) => {
  const {title, id, vote_average, backdrop_path } = item;

  return (
    <NavLink
      to={`/movie/${encodeURIComponent(title?.replace(/[\s:]/g, '-').toLowerCase())}`}
      className={style["slide-hero"]}
      onClick={() => localStorage.setItem('movieId', id )}>
      <SliderWithWatchBtn
        rating={(vote_average * 10).toFixed(1)}
        displayAsPercentage={true}
        name={title}
        bg={backdrop_path}
        id={id}/>
    </NavLink>
  )
}

const Home = () => {

  const fetchMoviesByType = useFetchMovies();
  const trendingMovies = useSelector((state) => state.movies.trendingMovies);const {isMobile, isTablet, isLaptop} = useDevice()
  const popularActors = useSelector((state) => state.movies.popularActors);
  const discover = useSelector((state) => state.movies.discover);

  useEffect(() => {
    const getTrending = () => fetchMoviesByType('trendingMovies');
    const getActors = () => fetchMoviesByType('popularActors');
    const getDiscover = () => fetchMoviesByType('discover');
    const getPopMovies = () => fetchMoviesByType('popularMovie');

    getTrending();
    getActors();
    getDiscover();
    getPopMovies();

  }, []);

  return (
    <>
      <Helmet>
        <title>Latest Movie Trailers, Reviews & Overviews | Ultimate Cinema Guide</title>
      </Helmet>
      <div>
        <Slider
          settings={{
            slidesPerView: 1
          }}
          sliderData={discover}
          slide={Banner}
        />
        <h2>Trending Now </h2>
        <Slider slide={MovieSlide} sliderData={trendingMovies}/>
        <h2>Best Actors</h2>
        <Slider
          sliderData={popularActors}
          slide={ActorSlide}
        />
      </div>
    </>
  );
};

export default Home;