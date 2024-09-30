import React from 'react';
import CircleRating from '../../common/CircleRating/CircleRating';
import { useNavigate } from 'react-router';
import styles from '../../Buttons/Button/CustomButton.module.scss';
import {useDevice} from "../../../hooks/useDevice";

const SliderWithWatchBtn = ({ name, category, id, bg, rating, displayAsPercentage }) => {
  const navigate = useNavigate();

  const { isMobile, isTablet} = useDevice();

  const watchOnClickHandler = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), 
        rgba(0,0,0,0)), url(https://image.tmdb.org/t/p/original${bg})`
      }}>
      <div className="userScore">
        <CircleRating
          rating={rating}
          displayAsPercentage={displayAsPercentage}
          size={(isMobile || isTablet) ? 60 : 30}/>
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{category}</h3>
        <button
          className={styles.link}
          onClick={watchOnClickHandler}>
          More
        </button>
      </div>
    </div>
  );
};

export default SliderWithWatchBtn;
