import style from "./Hero.module.scss";

export function Hero({src, alt}) {

  
  return (
    <div className={style.heroStyling}>
      <img src={src} alt={alt} />
    </div>
  );
}