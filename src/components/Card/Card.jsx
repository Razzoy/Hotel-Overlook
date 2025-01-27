import style from "./Card.module.scss"

export function Card({ title, text, img, alt, children, imgClick }) {

  let imageSrc;
  try {
    // Prøv at oprette en ny URL; hvis img er en gyldig URL, vil dette ikke kaste en fejl.
    imageSrc = new URL(img).href; 
  } catch {
    // Hvis det fejler, antager vi, at det er en lokal sti
    imageSrc = `src/assets/${img}`;
  }

  return (
    <div className={style.cardStyling}>
      {title && {title}}
      {img && <img src={imageSrc} alt={alt} onClick={imgClick}/>}
      {text && {text}}
      {children}
    </div>
  )
}