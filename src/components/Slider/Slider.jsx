import { useEffect, useState } from "react";
import style from "./Slider.module.scss";

export function Slider({ headerTitle, imageSet }) {
  const imageCollections = {
    homeImages: [
      "/images/frankfurt-skyline-germany.jpg",
      "/images/harbour-tromso.jpg",
      "/images/city-houses-reykjavik.jpg",
    ],

    destinationImage: ["/images/seljalandvoss-iceland.jpg"],
  };

  const selectedImages = imageCollections[imageSet] || imageCollections.homeImages;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedImages.length]);

  return (
    <div className={style.sliderContainer}>
      <img src={selectedImages[currentIndex]} alt="" />
      <div className={style.sliderHeader}>
        <h1>{headerTitle}</h1>
        <span></span>
      </div>
    </div>
  );
}
