import React, {useEffect, useState} from 'react';
import styles from "./styles.module.scss"
import Search from "../Search/Search";
import CustomizedSwitches from "../Buttons/SwitchButton/switchThemeBtn";
import PopularMovies from "../Outline/PopularMovies/PopularMovies";
import FavoriteMovies from "../Outline/FavoriteMovies/FavoriteMovies";
import {useSelector} from "react-redux";

const RightSidebar = () => {
  const userId = useSelector((state) => state.user.id);
  const favorites = useSelector((state) => state.favorites.favorites);
  const isLoading = useSelector((state) => state.favorites.isLoading);

  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.querySelector(':root');

    const components = ['body-background', 'components-background', 'text-color', 'btn-color-hover', 'color-header', 'color-input'];
    components.forEach((component) => {
      root.style.setProperty(
        `--${component}-default`,
        `var(--${component}-${theme})`,
      );
    });
  }, [theme]);


  return (
    <aside className={styles.container}>
      <div className={styles["container-wrapper"]}>
        <Search/>
        <CustomizedSwitches callback={changeTheme}></CustomizedSwitches>
        <PopularMovies/>
        <FavoriteMovies
          userId={userId}
          favorites={favorites}
          isLoading={isLoading}
        />
      </div>
    </aside>
  );
};

export default RightSidebar;