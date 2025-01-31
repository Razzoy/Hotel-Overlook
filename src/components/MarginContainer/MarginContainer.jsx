import style from './MarginContainer.module.scss'


export function MarginContainer({children, border, margin, height}) {

    const s = {
        ...(border && { borderRight: border}),
        ...(margin && {margin}),
        ...(height && {height}),
    }


  return (
    <div className={style.marginContainer} style={s}>
        {children}
    </div>
  )
}
