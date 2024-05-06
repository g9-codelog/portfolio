"use client";
import React, { useState } from "react";
import styles from "./About.module.css";

export default function () {
  const textDatas = [
    {
      id: "Tennis",
      class: styles.tennis,
      backgroundColor: "#fefefe",
      text: "私はテニスが好きです。大学時代には体育会のテニス部に所属してました。",
    },
    {
      id: "Game",
      class: styles.game,
      backgroundColor: "rgba(219, 3, 219, 0712",
      text: "ゲームをこよなく愛しています。毎日ゲームをするほどです。",
    },
    {
      id: "Program",
      class: styles.program,
      backgroundColor: "yellow",
      text: "初心者からプログラミングを独学で始めました。Web制作などをできるようになることが目標です。",
    },
    {
      id: "Teacher",
      class: styles.teacher,
      backgroundColor: "rgba(0, 132, 255, 0836)",
      text: "私立高校で物理を教えています。日々子供たちの成長に触れられるのが楽しいです。",
    },
  ];

  const [showNum, setShowNum] = useState(null);

  return (
    <section className={styles.about}>
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>about</h2>
        <ul className={styles.aboutContents}>
          {textDatas.map((textData, id) => {
            return (
              <li
                key={textData.id}
                style={{ backgroundColor: `${textData.backgroundColor}` }}
              >
                <button onClick={() => setShowNum(id)}>{textData.id}</button>
              </li>
            );
          })}
        </ul>
        <div className={styles.aboutText}>
          {showNum !== null ? (
            <p className={textDatas[showNum].class}>
              {textDatas[showNum].text}
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </section>
  );
}
