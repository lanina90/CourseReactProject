import React from 'react';
import  "./ItemCarousel.scss"

const ItemCarousel = (props) => {

  let {name,category} = props

  let url = props.bg

  return (
    <div style={{backgroundImage:`url(${url})`}} className={`item` }>
      <h3>{name}</h3>
      <h4>{category}</h4>
      <button>Watch</button>
    </div>
  );
};

export default ItemCarousel;
