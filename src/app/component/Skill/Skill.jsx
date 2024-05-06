"use client";
import React, { useState } from "react";
import styles from "./Skill.module.css";
import { DotGothic16 } from "next/font/google";
import "../../globals.css";
export const DotFont = DotGothic16({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Skill() {
  const textDatas = [
    {
      id: "HTML&CSS",
      text: "まだまだ駆け出しですがHTMLとCSSが少しできます。このサイトは1から私が作成しました。",
    },
    {
      id: "JavaScript",
      text: "JavaScriptも少しだけ勉強しました。レトロゲームの作成などもしています。",
    },
    {
      id: "physics",
      text: "物理の教員なので、高校物理の知識はあります。物理の楽しさを伝えていきたいです。",
    },
    {
      id: "Tennis",
      text: "大学では体育会の硬式庭球部に所属しました。関東甲信越体育大会で優勝しています。",
    },
    {
      id: "Game",
      text: "趣味でゲームをやっています。特にスプラトゥーン3が好きです。",
    },
  ];
  const [isShow, setIsShow] = useState({
    "HTML&CSS": false,
    JavaScript: false,
    physics: false,
    Tennis: false,
    Game: false,
    showNum: null,
  });
  function handleShow(e, number) {
    const dummyObj = isShow;
    const objKeys = Object.keys(dummyObj);
    for (let i = 0; i < objKeys.length; i++) {
      if (objKeys[i] !== "showNum") {
        dummyObj[objKeys[i]] = false;
      }
    }
    dummyObj[e] = true;
    dummyObj["showNum"] = number;
    setIsShow({ ...dummyObj });
  }
  return (
    <section className={styles.skill} id="skill">
      <div className={styles.wrapper}>
        <h2>skill</h2>
        <div className={` ${styles.gameLike} ${DotFont.className}`}>
          <div className={styles.skillText}>
            {isShow.showNum !== null ? (
              <p>{textDatas[isShow.showNum].text}</p>
            ) : (
              ""
            )}
          </div>
          <ul className={styles.skillContents}>
            {textDatas.map((textData, id) => {
              return (
                <li key={textData.id}>
                  {isShow[textData.id] ? (
                    <span className={styles.allow}></span>
                  ) : (
                    ""
                  )}
                  <button
                    value={textData.id}
                    onClick={(e) => handleShow(e.target.value, id)}
                  >
                    {textData.id}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
