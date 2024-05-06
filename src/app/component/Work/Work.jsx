import React from "react";
import styles from "./Work.module.css";
import "../../globals.css";
export default function Work() {
  return (
    <section className={styles.work}>
      <div className={styles.wrapper}>
        <h2>work</h2>
        <div className={styles.court} id="js-hover">
          <div className={`${styles.cray} ${styles.court1}`}>
            <a href="#" className={styles.court1}>
              Snace
            </a>
          </div>
          <div className={`${styles.cray} ${styles.court10}`}>
            <a href="#">Snace</a>
          </div>
          <div className={`${styles.cray} ${styles.court2}`}>
            <a href="#">模写コーディング</a>
          </div>
          <div className={`${styles.cray} ${styles.court9}`}>
            <a href="#">模写コーディング</a>
          </div>
          <div className={`${styles.cray} ${styles.court3}`}>
            <a href="#">This Website</a>
          </div>
          <div className={`${styles.cray} ${styles.court6}`}>
            <a href="#">this Website</a>
          </div>
          <div className={`${styles.cray} ${styles.court4}`}>
            <a href="#">特訓（避けゲー）</a>
          </div>
          <div className={`${styles.cray} ${styles.court8}`}>
            <a href="#">特訓（避けゲー）</a>
          </div>
          <div className={`${styles.cray} ${styles.court5}`}>
            <a href="#">単振動</a>
          </div>
          <div className={`${styles.cray} ${styles.court7}`}>
            <a href="#">単振動</a>
          </div>
        </div>
      </div>
    </section>
  );
}
