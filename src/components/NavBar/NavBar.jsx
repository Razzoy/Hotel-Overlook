import { NavLink } from "react-router-dom"
import style from "./NavBar.module.scss"

export function NavBar({activeClass}) {
  return (
      <ul className={style.navBarContainer}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? style[activeClass] : ""}>Forside</NavLink></li>
        <li><NavLink to="/destinations" className={({ isActive }) => isActive ? style[activeClass] : ""}>Hoteller & Destinationer</NavLink></li>
        <li><NavLink to="/rooms" className={({ isActive }) => isActive ? style[activeClass] : ""}>Værelser</NavLink></li>
        <li><NavLink to="/reservation" className={({ isActive }) => isActive ? style[activeClass] : ""}>Reservation</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? style[activeClass] : ""}>Login</NavLink></li>
      </ul>
  )
}