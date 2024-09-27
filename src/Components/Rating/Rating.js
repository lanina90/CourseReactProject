import React, { useEffect, useState } from 'react';
import ReactStars from 'react-rating-stars-component/dist/react-stars';
import styles from './styles.module.scss';
import {useSelector} from 'react-redux';
import {useWindowWidth} from "../../hooks/useWindowWidth";


const Rating = ({ movieId, onChange }) => {

  const windowWidth = useWindowWidth();
  const {ratings}  = useSelector((state) => state.ratings);

  const userRatingForThisMovie = ratings?.find(
    (rating) => parseInt(rating.movieId) === parseInt(movieId)
  )?.rating || 0;


  return (
    <div className={styles.stars}>
      {windowWidth >= 360 && windowWidth < 768 ?  <ReactStars
          count={5}
          onChange={onChange}
          value={userRatingForThisMovie}
          size={25}
          isHalf={true}
          emptyIcon={<i className="far fa-star" style={{ color: 'white' }}></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        /> :
        <ReactStars
          count={5}
          onChange={onChange}
          value={userRatingForThisMovie}
          size={44}
          isHalf={true}
          emptyIcon={<i className="far fa-star" style={{ color: 'white' }}></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        /> }

    </div>
  );
};

export default Rating;