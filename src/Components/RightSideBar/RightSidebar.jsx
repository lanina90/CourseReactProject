import React, {useEffect} from 'react';
import styles from "./styles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import MoviesList from "./MoviesList";
import {fetchFavorites} from "../../redux/slices/favoriteSlice";
import CustomButton from "../Buttons/Button/CustomButton";

const RightSidebar = () => {
  const userId = useSelector((state) => state.user.id);
  const favorites = useSelector((state) => state.favorites.favorites);
  const isLoading = useSelector((state) => state.favorites.isLoading);
  const popMovie = useSelector((state) => state.movies.popularMovie);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading === 'idle' && userId) {
      dispatch(fetchFavorites(userId));
    }
  }, [userId, isLoading, favorites]);

  return (
    <aside className={styles.sidebar}>
      <div className={styles["sidebar-wrapper"]}>
        <div className={styles["sidebar-wrapper-item"]}>
          <MoviesList items={popMovie} title='POPULAR MOVIES'/>
          <CustomButton name={'More'} path={'popMovies'}></CustomButton>
        </div>
        <div className={styles["sidebar-wrapper-item"]}>
          <MoviesList items={favorites} title='favorites'/>
          {
            favorites.length === 0 ?
              <p>You haven&apos;t any favourite movies yet...</p>
              :  <CustomButton name={'More'} path={'/u/favorites'}></CustomButton>
          }
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;