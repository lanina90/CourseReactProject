import React from 'react';
import style from '../MoviePage.module.scss';
import CircleRating from '../../../Components/common/CircleRating/CircleRating';
import {useDevice} from "../../../hooks/useDevice";
import Typography from "@mui/material/Typography";

const OverviewSection = ({ movie }) => {
  const {isMobile, isTablet} = useDevice();

  return (
    <section>
      <Typography variant="h4" component="h2">Overview</Typography>
      <div className={style.overview}>
        <div className={style.rating}>

          {(isMobile || isTablet) ? <CircleRating
              rating={movie.vote_average * 10}
              size={90}
              displayAsPercentage={true}
            /> :
            <CircleRating
              rating={movie.vote_average * 10}
              size={110}
              displayAsPercentage={true}
            />}
        </div>
        <div className={style.about}>
          <p>{movie.overview}
          </p>
        </div>
        <div className={style.data}>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Original Language:</strong> {movie.original_language.toUpperCase()}</p>
          <p><strong>Budget:</strong> $ {movie.budget}</p>
          <p><strong>Revenue:</strong> $ {movie.revenue}</p>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;