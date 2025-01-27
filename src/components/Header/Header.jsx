import { NavBar } from "../NavBar/NavBar"
import style from "./Header.module.scss"

export function Header() {
  return (
    <div className={style.headerContainer}>
      <img src="src/assets/hotel-overlook-logo.png" alt="Hotel Overlook Logo" />
      <NavBar />
    </div>
  )
}