import { useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import style from "./Header.module.scss";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={style.headerContainer}>
      <img src="src/assets/hotel-overlook-logo.png" alt="Hotel Overlook Logo" />

      <div className={`${style.hidden} ${isActive ? style.active : ""}`}>
        <NavBar activeClass={"active"} />
      </div>
      
      <div
        className={`${style.burgerContainer} ${isActive ? style.active : ""}`}
        onClick={toggleMenu}
      >
        <span className={style.burger}></span>
        <span className={style.burger}></span>
        <span className={style.burger}></span>
      </div>
    </div>
  );
}
