import React, {useEffect, useState} from 'react';
import styles from '../UserProfile.module.scss';
import {useSelector} from 'react-redux';
import FilmComponent from "./FilmComponent/FilmComponent";
import UserInfo from "../../../pages/UserProfilePage/components/UserInfo";

const UserProfileComponent = () => {
  const favorites = useSelector((state) => state.favorites.favorites);
  const watchList = useSelector((state) => state.watchList.watchList);
  const [latestFavoriteMovie, setLatestFavoriteMovie] = useState([]);
  const [latestFromWatchList, setLatestFromWatchList] = useState([]);

  useEffect(() => {
    const favoritesCopy = [...favorites]
    const latestFavoriteMovie = favoritesCopy.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt))
    setLatestFavoriteMovie(latestFavoriteMovie)

    const watchListCopy = [...watchList]
    const latestFromWatchList = watchListCopy.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt))
    setLatestFromWatchList(latestFromWatchList)

  }, [favorites, watchList]);

  return (
    <div className={styles.profile}>
      <UserInfo favorites={favorites} watchList={watchList}/>

      <div className={styles.pageInfo}>
        <h2>Latest Favorite Movies</h2>
        {latestFavoriteMovie && latestFavoriteMovie.length > 0  ?
          <FilmComponent
            image={latestFavoriteMovie[0].movieInfo.backdrop_path ?? latestFavoriteMovie[0].movieInfo.poster_path}
            rating={latestFavoriteMovie[0].movieInfo.vote_average * 10}
            title={latestFavoriteMovie[0].movieInfo.title}
            overview={latestFavoriteMovie[0].movieInfo.overview}
            release={latestFavoriteMovie[0].movieInfo.release_date}
            id={latestFavoriteMovie[0].movieInfo.id}
            source={'favorites'}
          /> :
          <p>There are no movies on your list.</p>
        }
        <h2>Upcoming From Watchlist</h2>
        {latestFromWatchList && latestFromWatchList.length > 0  ?
          <FilmComponent
            image={latestFromWatchList[0].movieInfo.backdrop_path ?? latestFromWatchList[0].movieInfo.poster_path}
            rating={latestFromWatchList[0].movieInfo.vote_average * 10}
            title={latestFromWatchList[0].movieInfo.title}
            overview={latestFromWatchList[0].movieInfo.overview}
            release={latestFromWatchList[0].movieInfo.release_date}
            id={latestFromWatchList[0].movieInfo.id}
            source={'watchlist'}
          /> :
          <p>There are no movies on your watchlist.</p>
        }
      </div>
    </div>
  );
};

export default UserProfileComponent;