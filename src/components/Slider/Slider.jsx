import { useEffect, useState } from "react";
import style from './Slider.module.scss'

export function Slider({headerTitle}) {
  const images = [
    "/images/frankfurt-skyline-germany.jpg",
    "/images/harbour-tromso.jpg",
    "/images/city-houses-reykjavik.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={style.sliderContainer}>
      <img src={images[currentIndex]} alt="" />
      <div className={style.sliderHeader}>
        <h1>{headerTitle}</h1>
        <span></span>
      </div>
    </div>
  );
}
