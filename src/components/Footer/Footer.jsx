import style from "./Footer.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { NavBar } from "../NavBar/NavBar";

export function Footer() {
  return (
    <div className={style.footerContainer}>
      <p>© 2021 hotel Overlook. Alle rettigheder forbeholdt.</p>
      <div className={style.footerIcons}>
        <FaTwitterSquare />
        <FaFacebook />
      </div>
      <NavBar />
    </div>
  );
}
