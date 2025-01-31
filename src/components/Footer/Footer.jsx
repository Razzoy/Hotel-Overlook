import style from "./Footer.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { NavBar } from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div className={style.footerContainer}>
      <p>© 2021 hotel Overlook. Alle rettigheder forbeholdt.</p>
      <div className={style.footerIcons}>
        <FaTwitterSquare />
        <FaFacebook />
      </div>
      <ul>
        <li>
          <NavLink to="/" className={style.footerLink}>
            Forside
          </NavLink>
        </li>
        <li>
          <NavLink to="/destination" className={style.footerLink}>
            Hoteller & Destinationer
          </NavLink>
        </li>
        <li>
          <NavLink to="/rooms" className={style.footerLink}>
            Værelser
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservation" className={style.footerLink}>
            Reservation
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={style.footerLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
