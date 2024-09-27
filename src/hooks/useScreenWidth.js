import {useEffect, useState} from "react";

export const useScreenWidth = () => {
  const [screeWidth, setScreeWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreeWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);

  return screeWidth;
}