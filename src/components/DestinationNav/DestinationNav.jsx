import { NavLink } from "react-router-dom";
import { useGet } from "../../hooks/useGet";
import style from "./DestinationNav.module.scss";

export function DestinationNav() {
  const { data, isLoading, error } = useGet(
    "http://localhost:4000/destinations"
  );
  

  return (
    <div className={style.destNavContainer}>
      <ul>
        {!isLoading &&
          data?.map((country) => {
            return (
              <>
                <li key={country.id} className={style.listStyle}>
                  <NavLink
                    
                    to={`/destinations/${country.slug}`}
                  >
                    {country.name}
                  </NavLink>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
}
