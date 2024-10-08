import React, {useEffect, useState} from 'react';
import ActionButton from './ActionButton';
import { AiFillHeart, AiFillStar, AiOutlinePlaySquare, AiOutlineUnorderedList } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import styles from './ActionBar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Rating from '../Rating/Rating';
import MoviePlayerModal from '../../pages/MoviePage/components/MoviePlayerModal/MoviePlayerModal';
import {handleRatingChanged, handleToggleFavorite, handleToggleWatchList} from '../../utils/helperFunctions/ActionsFn';
import {useAuth} from "../../hooks/useAuth";


const ActionBar = ({ movieId, movie }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => state.favorites.isFavorite[movieId]);
  const isListed = useSelector((state) => state.watchList.isListed[movieId]);
  const isRated =useSelector((state) => state.ratings.isRated[movieId]);
  const userId = useSelector((state) => state.user.id);
  const [showRating, setShowRating] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleRateClick = () => {
    setShowRating(!showRating);
  };
  const handlePlayerClick = () => {
    setIsPlayerOpen(!isPlayerOpen);
  };

  return (
    <div className={styles.actionBar}>
      <div>
        <ActionButton icon={<AiOutlineUnorderedList
          size={30}
          data-tooltip-id="list"
          data-tooltip-content="Add to list"
        />}
        />
      </div>
      <div>
        <ActionButton
          onClick={(event) => handleToggleFavorite(event, userId, movieId, isFavorite, dispatch)}
          icon={<AiFillHeart
            size={30}
            data-tooltip-id="like"
            data-tooltip-content="Mark as favorite"
            color={isFavorite ? 'red' : null}
          />}/>
      </div>
      <div>
        <ActionButton
          onClick={(event) => handleToggleWatchList(event, userId, movieId, isListed, dispatch)}
          icon={<BsFillBookmarkFill
            size={25}
            color={isListed ? 'red' : null}
            data-tooltip-id="watchlist"
            data-tooltip-content="Add to your watchlist"
          />}/>
      </div>
      <div className={styles.ratingButton}>
        <ActionButton
          onClick={handleRateClick}
          className={styles.rating}
          icon={<AiFillStar
            size={30}
            color={isRated ? 'yellow' : null}
            data-tooltip-id="rate"
            data-tooltip-content="Rate it"
          />}/>
        {showRating &&  <Rating
          onChange={(rating) => handleRatingChanged(movieId, userId, dispatch, setShowRating, rating)}
          movieId={movieId}

        />}
      </div>

       <ActionButton
         onClick={handlePlayerClick}
         icon={<AiOutlinePlaySquare
           size={25}
           color={isPlayerOpen ? 'red' : null}
           data-tooltip-id="player"
           data-tooltip-content="Watch the trailer"
         />}/>
       {isPlayerOpen &&  <MoviePlayerModal
         movie={movie}
         isPlayerOpen={isPlayerOpen}
         setIsPlayerOpen={setIsPlayerOpen}
       />}
      <Tooltip
        id="list"
        className={styles.tooltip}
        place="bottom"/>
      <Tooltip
        id="like"
        className={styles.tooltip}
        place="bottom"/>
      <Tooltip
        id="watchlist"
        className={styles.tooltip}
        place="bottom"/>
      <Tooltip
        id="rate"
        className={styles.tooltip}
        place="bottom"/>
      <Tooltip
        id="player"
        className={styles.tooltip}
        place="bottom"/>
    </div>
  );
};

export default ActionBar;