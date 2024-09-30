import React, {useEffect} from 'react';
import ReviewForm from "./ReviewForm/ReviewForm";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {fetchReviews} from "../../redux/slices/reviewsSlice";
import ReviewSlide from "../Slider/Slides/ReviewSlide";
import Slider from "../Slider/Slider";

const Reviews = () => {
  const {reviews, status} = useSelector((state) => state.reviews);
  const movieId = localStorage.getItem('movieId');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews(movieId));
  }, [movieId]);

  return (
    <div>
      <Typography variant="h4" component="h2">Reviews</Typography>
      <ReviewForm/>
      {
        status === 'loading'
          ? <p>...Loading</p>
          : reviews?.length > 0
            ? <Slider sliderData={reviews} slide={ReviewSlide} settings={{slidesPerView : 1}}/>
            : null
      }
    </div>
  );
};

export default Reviews;