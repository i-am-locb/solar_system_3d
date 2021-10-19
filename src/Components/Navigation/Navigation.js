import { useDispatch, useSelector } from "react-redux";
import { zoomPlanet } from "../../Redux/Planets/planets_AC";
import { enableZoom, getPlanetsInfo } from "../../Redux/PlanetsInfo/planets_info_AC";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const planets = useSelector((state) => state.solarSystemData.planets);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.navigation}>
        {planets.map((p) => (
          <button
            className={p.zoomed ? styles.selected : styles.planet}
            onClick={() => {
              dispatch(zoomPlanet(p.englishName));
              dispatch(enableZoom());
              dispatch(getPlanetsInfo(p.englishName));
            }}
            key={p.id}
          >
            {p.englishName}
          </button>
        ))}
      </div>
    </>
  );
}
