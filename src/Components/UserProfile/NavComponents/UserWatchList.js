import React, { useEffect } from 'react';
import NavComponentsHeader from './NavComponentsHeader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWatchList } from '../../../redux/slices/watchListSlice';
import styles from '../UserProfile.module.scss';
import FilmComponent from './FilmComponent/FilmComponent';
import NoInfoComponent from './NoInfoComponent';

const UserWatchList = () => {

  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const watchList = useSelector((state) => state.watchList.watchList);
  const error = useSelector((state) => state.watchList.error);
  const isLoading = useSelector((state) => state.watchList.isLoading);


  useEffect(() => {
    if (isLoading === 'idle' && userId) {
      dispatch(fetchWatchList(userId));
    }

  }, [isLoading, userId]);


  return (
    <>
      <NavComponentsHeader
        title={'My Watchlist'}
        showFilters={true}
      />
      <section className={styles.pageInfo}>
        {watchList.length === 0 ? <NoInfoComponent/> :
        <>
          {isLoading === 'loading' && <div>Loading...</div>}
          {isLoading === 'succeeded' && (
            <div>
              {watchList.map((film) => (
                film.movieInfo &&
                <div key={film.movieId}>
                  <FilmComponent
                    image={film.movieInfo.backdrop_path}
                    rating={film.movieInfo.vote_average * 10}
                    title={film.movieInfo.title}
                    overview={film.movieInfo.overview}
                    release={film.movieInfo.release_date}
                    id={film.movieInfo.id}
                  />
                </div>
              ))}
            </div>
          )}
          {isLoading === 'failed' && <div>Error: {error}</div>}</>}
      </section>

    </>
  );
};

export default UserWatchList;