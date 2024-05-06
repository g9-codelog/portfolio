"use client";
import React from "react";
import Image from "next/image";
import localImage from "./header_.jpg";
import titleLogo from "./title.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.imageBox}>
        <Image src={localImage} quality={100} />
        <h1 className={styles.mainTitle}>
          <Image src={titleLogo} />
        </h1>
      </div>
      {/* <div className={styles.stringsRow}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.stringsColumn}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
    </header>
  );
}
