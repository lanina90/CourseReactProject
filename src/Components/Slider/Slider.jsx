import React, {useMemo} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import {useDevice} from "../../hooks/useDevice";
import 'swiper/swiper-bundle.min.css';
import Typography from "@mui/material/Typography";

SwiperCore.use([Navigation]);

const Slider = ({settings, slide, sliderData,title}) => {
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
    <div>
      {title && <Typography variant={"h4"} component={"h2"} style={{padding: "15px 0"}}>{title}</Typography>}
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
    </div>
  );
};

export default Slider;