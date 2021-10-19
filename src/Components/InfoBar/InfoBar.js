import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./InfoBar.module.css";

export default function InfoBar() {
  const text = useSelector((state) => state.planetInfo.text);
  const zoomed = useSelector((state) => state.planetInfo.zoomed);
  const link = useSelector((state) => state.planetInfo.link);
  const title = useSelector((state) => state.planetInfo.title);
  if (zoomed) {
    return (
      <>
        <div className={styles.bar}>
          <h1>{title}</h1>
          <div
            className={styles.infoBar}
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <a href={link} target="_blank">Read more...</a>
        </div>
      </>
    );
  }
  if (!zoomed) {
    return <div></div>;
  }
}
