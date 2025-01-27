import style from "./Wrapper.module.scss"

export function Wrapper ({children}){
  return (
      <>
      <div className={style.wrapperStyle}>
          {children}
      </div>
      </>
  )
}