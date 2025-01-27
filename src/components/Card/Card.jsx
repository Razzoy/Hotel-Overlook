import style from "./Card.module.scss";

export function Card({ title, text, img, alt, children, imgClick, imageSrc }) {
  return (
    <div className={style.cardStyling}>
      {imageSrc && <img src={imageSrc} alt={alt} onClick={imgClick} />}
      <div className={style.cardArticle}>
        <h5>{title && title}</h5>
        <p>{text && text}</p>
        {children}
      </div>
    </div>
  );
}
