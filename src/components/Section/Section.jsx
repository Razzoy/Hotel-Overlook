import style from "./Section.module.scss"

export function Section({ title, children }) {
  return (
    <div className={style.Section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
