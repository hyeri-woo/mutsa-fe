import React from "react";
import styles from "./Home.module.css";
import iconEdit from "../../image/icon-edit.svg";
import iconDelete from "../../image/icon-delete.svg";

export default function DiaryList({ diaries }) {
  return diaries.map((item) => {
    console.log(item);
    return (
      <li key={item.id}>
        <article className={styles["diary-article"]}>
          <h3 className={styles["article-title"]}>{item.title}</h3>
          <time className={styles["article-time"]} dateTime="2023-03-15">
            2023.02.24.THU
          </time>
          <p className={styles["article-content"]}>{item.text}</p>

          <div className="button-group">
            <button type="button">
              <img src={iconEdit} alt="수정" />
            </button>
            <span></span>
            <button type="button">
              <img src={iconDelete} alt="삭제" />
            </button>
          </div>
        </article>
      </li>
    );
  });
}
