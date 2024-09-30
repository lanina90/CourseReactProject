import React from 'react';
import style from "./CustomButton.module.scss";

const Button = ( {children, onClick}) => {

  return (
    <button className={style.link} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;