import React from "react";

import styles from "./style.module.css";

import theBookEaters from "../../images/the-book-eaters.png";

const FavoriteBook = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_book}>
        <div className={styles.staff}>Staff Picks</div>
        <div className={styles.line}></div>
        <div className={styles.name_book}>The Book Eaters</div>
        <div className={styles.writer}>By Sunyi Dean</div>
        <div className={styles.description_book}>
          An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son
          from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a
          strong, complex protagonist. Not for the faint of heart.
        </div>
        <button className={styles.button_buy}>Buy</button>
      </div>
      <div className={styles.image_box}>
        <img src={theBookEaters} alt="theBookEaters" className={styles.image} />
      </div>
    </div>
  );
};

export default FavoriteBook;
