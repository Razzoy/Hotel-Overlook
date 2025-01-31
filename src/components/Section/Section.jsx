import style from "./Section.module.scss"

export function Section({ title, children }) {
  return (
    <div className={style.sectionContainer}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
