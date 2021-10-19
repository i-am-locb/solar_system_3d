import React from "react";
import { useDispatch } from "react-redux";
import { toggleConfirm } from "../../Redux/Confirm/confirm_AC";
import { getPlanets } from "../../Redux/Planets/planets_AC";
import styles from "./Warning.module.css";

export default function Warning(props) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.warning}>
        <div className={styles.warningBlock}>
          <h1 className={styles.h1}>Warning</h1>
          <p className={styles.text}>Don't use mobile traffic!</p>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(toggleConfirm());
              dispatch(getPlanets());
            }}
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
}
