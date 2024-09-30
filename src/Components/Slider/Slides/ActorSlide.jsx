import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../SwiperSlide.module.scss";
import SliderItem from "../SliderItems/SliderItem";

const ActorSlide = ({item}) => {
  const {name, id, profile_path, popularity, character}  = item;

  const title = character ? `${name} as ${character} ` : name

  return (
    <div>
      <NavLink
        to={`/person/${name?.replace(/\s/g, '-')}`}
        className={style.swiperSlide}
        onClick={() => localStorage.setItem('actorId', id)}
      >
        <SliderItem
          title={title}
          img={profile_path}
          rating={popularity.toFixed(1)}
          displayAsPercentage={false}
          canvasShow={false}
        />
      </NavLink>
    </div>
  );
};

export default ActorSlide;