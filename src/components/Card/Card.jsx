import style from "./Card.module.scss";

export function Card({ title, text, alt, children, imgClick, imageSrc }) {


  const capitalizeFirstLetter = (string) => 
    string.charAt(0).toLocaleUpperCase('da-DK') + string.slice(1);


  return (
    <div className={style.cardStyling}>
      <div className={style.imageContainer}>
      {imageSrc && <img src={imageSrc} alt={alt} onClick={imgClick} />}
      </div>
      <article>
      <h5>{title && capitalizeFirstLetter(title)}</h5>
      <p>{text && text}</p>
      {children}
      </article>
    </div>
  );
}
