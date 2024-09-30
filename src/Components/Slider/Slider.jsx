import React, {useMemo} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import {useDevice} from "../../hooks/useDevice";
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const Slider = ({settings, slide, sliderData}) => {
  const {isMobile, isTablet, isLaptop} = useDevice()
  if (!sliderData || !slide) return null;
  const SlideItem = slide;

  const baseSettings = useMemo(() => {
    return {
      tag: "div",
      wrapperTag: "div",
      navigation: true,
      slidesPerView: isMobile ? 2 : (isTablet || isLaptop) ? 3 : 5,
      spaceBetween: 10,
      direction: 'horizontal',
      ...settings
    };
  }, [settings, isMobile, isTablet, isLaptop]);

  return (
    <Swiper
      {...baseSettings}
      modules={[Navigation]}
    >
      {sliderData?.map((item, index) => {
        const key = item.id ?? index
        return (
          <SwiperSlide key={key}>
            <SlideItem item={item}/>
          </SwiperSlide>
        )
        }
      )}
    </Swiper>
  );
};

export default Slider;