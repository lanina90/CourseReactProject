import {useEffect, useState} from "react";

export const useDevice = () => {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isDesktop: false
  });

  useEffect(() => {
    const windowWidth = window.innerWidth;

    const setDeviceType = () => {
      if (windowWidth < 768) {
        setDevice({ isMobile: true, isTablet: false, isLaptop: false, isDesktop: false });
      } else if (windowWidth >= 768 && windowWidth < 1024) {
        setDevice({ isMobile: false, isTablet: true, isLaptop: false, isDesktop: false });
      } else if (windowWidth >= 1024 && windowWidth < 1280) {
        setDevice({ isMobile: false, isTablet: false, isLaptop: true, isDesktop: false });
      } else if (windowWidth >= 1280) {
        setDevice({ isMobile: false, isTablet: false, isLaptop: false, isDesktop: true });
      }
    }
    setDeviceType();

    window.addEventListener('resize', setDeviceType);

    return () => {
      window.removeEventListener('resize', setDeviceType);
    }
  }, []);

  return {...device}


}