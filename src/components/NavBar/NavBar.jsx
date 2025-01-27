import { NavLink } from "react-router-dom"
import style from "./NavBar.module.scss"

export function NavBar() {
  return (
      <ul className={style.navBarContainer}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Forside</NavLink></li>
        <li><NavLink to="/destination" className={({ isActive }) => isActive ? "active" : ""}>Hoteller & Destinationer</NavLink></li>
        <li><NavLink to="/rooms" className={({ isActive }) => isActive ? "active" : ""}>Værelser</NavLink></li>
        <li><NavLink to="/reservation" className={({ isActive }) => isActive ? "active" : ""}>Reservation</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink></li>
      </ul>
  )
}