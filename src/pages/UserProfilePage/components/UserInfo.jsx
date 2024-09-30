import React from 'react';
import styles from "../styles.module.scss";
import Avatar from "react-avatar";
import CircleRating from "../../../Components/common/CircleRating/CircleRating";
import {useAuth} from "../../../hooks/useAuth";
import {useSelector} from "react-redux";

const UserInfo = ({favorites, watchList}) => {
  const {userName, date} = useAuth();
  const ratings = useSelector((state) => state.ratings.ratings);
  const totalRating = ratings.reduce((sum, rating) => sum + (rating.rating * 2), 0);
  const averageRating = totalRating / ratings.length;

  const formatDate = (dateStr) => {
    const dateParts = dateStr.split('.');
    const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return dateObject.toLocaleDateString('en-US', options);
  };

  return (
    <div className={styles["user-profile-header"]}>
      <div className={styles["user-profile-info"]}>
        <Avatar className={styles["user-profile-info-avatar"]} name={userName} size={100} round={true}/>
        <div className={styles["user-profile-info-main"]}>
          <p className={styles["user-profile-info-name"]}>{userName}</p>
          <p className={styles["user-profile-info-membership"]}>Member since {date && formatDate(date)}</p>
        </div>
      </div>
      <div className={styles["user-profile-info-stats"]}>
        <div className={styles["user-profile-info-stats-box"]}>
          <h3>Total Ratings</h3>
          <div className={styles["user-profile-info-stats-rating"]}>
            <CircleRating
              rating={isNaN(averageRating) ? 0 : averageRating * 10}
              size={70}
              displayAsPercentage={true}
            />
            <p>{ratings.length > 0 ? ratings.length : 0}</p>
          </div>
        </div>
        <div className={styles["user-profile-info-stats-box"]}>
          <h3>Favorite Movies</h3>
          <p>{favorites.length > 0 ? favorites.length : 0}</p>
        </div>
        <div className={styles["user-profile-info-stats-box"]}>
          <h3>WatchList</h3>
          <p>{watchList.length > 0 ? watchList.length : 0}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;