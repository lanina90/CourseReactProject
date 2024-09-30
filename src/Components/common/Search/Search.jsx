import React, {useEffect, useState} from 'react';
import styles from "./styles.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {CiSearch} from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import classNames from "classnames";
import {NavLink} from "react-router-dom";
import {setSearch} from "../../../redux/slices/searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.discover);
  const [searchValue, setSearchValue] = useState('');
  const [moviesFounded, setMoviesFounded] = useState([])

  useEffect(() => {
    if (searchValue.length > 2) {
      const moviesFilter = movies.filter((item) => item.original_title.toLowerCase().includes(searchValue.toLowerCase()));
      setMoviesFounded(moviesFilter)
    }
  }, [searchValue]);

  const resultClickHandler = (id) => {
    localStorage.setItem('movieId', id);
    dispatch(setSearch(false));
  }

  return (
    <div className={styles['search']}>
      <label htmlFor="search" className={styles['search-label']}>
        <div className={classNames(styles['search-label-icon'], styles['search-label-icon-search'])}>
          <CiSearch size={20}/>
        </div>
        {searchValue.length === 0 && <div className={classNames(styles['search-label-icon'], styles['search-label-icon-cursor'])}></div>}
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e)=> setSearchValue(e.target.value)}
          className={styles['search-input']}
        />
        <div className={classNames(styles['search-label-icon'], styles['search-label-icon-close'])}>
          <IoMdClose size={20}/>
        </div>
      </label>
      {moviesFounded.map((item) => (
        <NavLink
          className={styles['search-result']}
          to={`/movie/${encodeURIComponent(item.title.replace(/[\s:]/g, '-').toLowerCase())}`}
          key={item.id}
          onClick={() => resultClickHandler(item.id)}
        >
          <div>
            {item.title}, {item.release_date.slice(0, 4)}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Search;