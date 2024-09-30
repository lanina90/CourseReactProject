import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import styles from "./styles.module.scss";
import {setReview} from "../../../redux/slices/reviewsSlice";
import Button from "../../Buttons/Button/Button";
import {useDispatch} from "react-redux";

const ReviewForm = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const movieId = localStorage.getItem('movieId');

  const submitReviewHandler = (value) => {
    if (value) {
      dispatch(setReview({id: movieId, text: value}));
      setValue('');
    }
  }

  return (
    <>
      <textarea
        className={styles["reviews-input"]}
        name="review"
        id="review"
        cols="30"
        rows="10"
        placeholder={"Leave your review"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={()=> submitReviewHandler(value)}>Send</Button>
    </>
  );
};

export default ReviewForm;