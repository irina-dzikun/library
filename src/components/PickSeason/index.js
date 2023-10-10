import React from "react";

import styles from "./style.module.css";

import FavoriteBook from "../FavoriteBook";

const PickSeason = () => {
  return (
    <div>
      <div>
        <form className={styles.favorite_form}>
          <div className={styles.favorite_radio}>
            <label>
              <input type="radio" value="winter" checked className={styles.favorite_form_dot} />
              Winter
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="spring" className={styles.favorite_form_dot} />
              Spring
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="summer" className={styles.favorite_form_dot} />
              Summer
            </label>
          </div>
          <div>
            <label>
              <input type="radio" value="autumn" className={styles.favorite_form_dot} />
              Autumn
            </label>
          </div>
        </form>
      </div>
      <div className={styles.favorite_books}>
        <FavoriteBook className={styles.favorite_book}></FavoriteBook>
        <FavoriteBook className={styles.favorite_book}></FavoriteBook>
        <FavoriteBook className={styles.favorite_book}></FavoriteBook>
        <FavoriteBook className={styles.favorite_book}></FavoriteBook>
      </div>
    </div>
  );
};

export default PickSeason;
