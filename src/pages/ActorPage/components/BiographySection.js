import React, {useState} from 'react';
import style from '../ActorPage.module.scss';
import Button from "../../../Components/Buttons/Button/Button";
import Slider from "../../../Components/Slider/Slider";
import MovieSlide from "../../../Components/Slider/Slides/MovieSlide";

const BiographySection = ({ actors }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  let words = [];
  let displayedWords = [];

  if (actors && actors.biography) {
    words = actors.biography.split(' ');
    displayedWords = isExpanded ? words : words.slice(0, 100);
  }

  return (
    <>
      <h1>{actors?.name}</h1>
      <div className={style.biography}>
        <p>{displayedWords.join(' ')}</p>
        {words.length > 100 && (
          <Button  onClick={handleReadMoreClick}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </Button>
        )}
      </div>
      <div className={style.knowFor}>
        <h2>Known For</h2>
        <Slider sliderData={actors?.movie_credits?.cast} slide={MovieSlide}/>
      </div>
    </>
  );
};

export default BiographySection;