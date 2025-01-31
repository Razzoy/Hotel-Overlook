import { NavLink, useParams } from "react-router-dom";
import style from "./BreadCrumb.module.scss";

export function BreadCrumb() {
  const { destinations, country, city, hotel, room } = useParams();

  return (
    <div className={style.breadContainer}>
      <NavLink to="/">Hotel Overlook</NavLink>
      <span> &gt; </span>
      <NavLink to="/destinations">Hoteller & Destinations</NavLink>
      {country && (
        <>
          <span> &gt; </span>
          <NavLink to={`/destinations/${country}`}>{country}</NavLink>
        </>
      )}
      {city && (
        <>
          <span> &gt; </span>
          <NavLink to={`/destinations/${country}/${city}`}>{city}</NavLink>
        </>
      )}
      {hotel && (
        <>
          <span> &gt; </span>
          <NavLink to={`/destinations/${country}/${city}/${hotel}`}>
            {hotel}
          </NavLink>
        </>
      )}
      {room && (
        <>
          <span> &gt; </span>
          <NavLink to={`/destinations/${country}/${city}/${hotel}/${room}`}>
            {room}
          </NavLink>
        </>
      )}
    </div>
  );
}
