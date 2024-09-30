import React from 'react';
import styles from "../SwiperSlide.module.scss"

const ReviewSlide = ({item}) => {

  const {user, text, date} = item
  return (
    <div className={styles['review-slide']}>
      <p className={styles['review-slide-name']}>{user}</p>
      <p className={styles['review-slide-content']}>{text}</p>
      <p className={styles['review-slide-date']}>{date}</p>
    </div>
  );
};

export default ReviewSlide;