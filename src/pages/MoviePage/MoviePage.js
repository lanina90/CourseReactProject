import React, { useEffect, useState } from 'react';
import style from './MoviePage.module.scss';
import axios from 'axios';
import ActionBar from '../../Components/Action Bar/ActionBar';
import CustomButton from '../../Components/Buttons/Button/CustomButton';
import Loader from '../../Loader/Loader';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, setReview } from '../../redux/slices/reviewsSlice';
import MainBanner from '../../Components/MoviePage Components/MainBanner';
import OverviewSection from '../../Components/MoviePage Components/OverviewSection';
import SliderForReview from './SliderForReview';
import ModalForReviews from './ModalForReviews';
import {fetchWatchList} from "../../redux/slices/watchListSlice";
import {useAuth} from "../../hooks/useAuth";
import {fetchRatings} from "../../redux/slices/userRatingsSlice";
import Slider from "../../Components/Slider/Slider";
import ActorSlide from "../../Components/Slider/Slides/ActorSlide";
import MovieSlide from "../../Components/Slider/Slides/MovieSlide";

const MoviePage = () => {
  const {id : userId} = useAuth()
  const movieId = localStorage.getItem('movieId');
  const [movie, setMovie] = useState();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const {reviews, status} = useSelector((state) => state.reviews);
  const [openModal, setOpenModal] = useState(false);
  const ratings = useSelector((state) => state.ratings.ratings);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos,credits,similar`);
        setMovie(data);
      } catch (err) {
        alert('Something went wrong =(');
      }
    }
    dispatch(fetchReviews(movieId));
    dispatch(fetchWatchList(userId));
    dispatch(fetchRatings(userId));

    fetchMovie();
  }, [movieId, ratings]);

  const sendReviewHandler = (review) => {
    if (review) {
      dispatch(setReview({ id: movieId, text: review }));
      setValue('');
    }
  };

  if (!movie) {
    return <Loader/>;
  }

  return (
    <>
      <Helmet>
        <title>{movie.title} | Overview, Ratings and Trailer </title>
      </Helmet>
      <ActionBar movie={movie} movieId={movie.id} />
      <div className={style.wrapper}>
        <MainBanner movie={movie}/>
        <h2>Overview</h2>
        <OverviewSection movie={movie}/>
        <h2>Top Billed Cast</h2>
        <Slider sliderData={movie?.credits?.cast?.slice(0, 20)} slide={ActorSlide}/>
        <div>
        <div className={style.reviewsContainer}>
          <div className={style.headerReviews}>
            <h1>Reviews</h1>
            <CustomButton callback={handleOpen} name={'Leave review'}/>
          </div>
          <p>{`About film "${movie.original_title}"`}</p>
        </div>
        </div>

        {status === 'loading' ? <p>...Loading</p> :
          <SliderForReview  reviews={reviews}></SliderForReview>}
        <h2>Similar</h2>
        <Slider sliderData={movie?.similar?.results} slide={MovieSlide}/>
      </div>
      <ModalForReviews sendReview={sendReviewHandler} reviews={reviews} movie={movie} open={openModal} callback={handleClose} value={value} setValue={setValue} placeholder={'write your review'}></ModalForReviews>
    </>
  );
};

export default MoviePage;


