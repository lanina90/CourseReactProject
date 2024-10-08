import React, {useState} from 'react';
import ActionButton from '../../../Action Bar/ActionButton';
import {AiFillHeart, AiFillStar, AiOutlineDelete, AiOutlineUnorderedList} from 'react-icons/ai';
import styles from '../../UserProfile.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFavorite} from '../../../../redux/slices/favoriteSlice';
import {deleteFromWatchList} from '../../../../redux/slices/watchListSlice';
import Rating from '../../../Rating/Rating';
import {deleteRatings} from '../../../../redux/slices/userRatingsSlice';
import {handleRatingChanged, handleToggleFavorite} from '../../../../utils/helperFunctions/ActionsFn';


const ActionsComponent = ({movieId, source}) => {
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const isRated = useSelector((state) => state.ratings.isRated[movieId]);
  const isFavorite = useSelector((state) => state.favorites.isFavorite[movieId]);
  const [showRating, setShowRating] = useState(false);


  const removeButtonHandle = () => {
    if (userId) {
      if (source === 'favorites') {
        dispatch(deleteFavorite({ userId, movieId }));
      } else if (source === 'watchlist') {
        dispatch(deleteFromWatchList({ userId, movieId }));
      } else if (source === 'ratings') {
        dispatch(deleteRatings({ userId, movieId }));
      }
    } else {
      alert('User data has not loaded yet');
    }
  };
  const handleRateClick = () => {
    setShowRating(!showRating);
  };

  return (

    <div className={styles.actionBar}>
      <div className={styles.rating}>
        <ActionButton
          onClick={handleRateClick}
          icon={<AiFillStar
            size={30}
            color={isRated ? 'yellow' : null}
          />}/>
        <p>Rate It</p>
        {showRating && (
          <Rating
            onChange={(rating) => handleRatingChanged(movieId, userId, dispatch, setShowRating, rating)}
            movieId={movieId}
          />
        )}
      </div>
      <div>
        <ActionButton
          icon={<AiOutlineUnorderedList
            size={30}
          />}/>
        <p>Add to List</p>
      </div>
      <div>
        <ActionButton
          onClick={(event) => handleToggleFavorite(event, userId, movieId, isFavorite, dispatch)}
          icon={<AiFillHeart
            size={30}
            color={isFavorite ? 'red' : null}
          />}/>
        <p>Favorite</p>
      </div>
      <div>
        <ActionButton
          onClick={removeButtonHandle}
          icon={<AiOutlineDelete
            size={30}
          />}/>
        <p>Remove</p>
      </div>

    </div>
  );
};

export default ActionsComponent;