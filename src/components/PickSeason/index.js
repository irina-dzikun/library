import React, { useState } from "react";

import styles from "./style.module.css";

import FavoriteBook from "../FavoriteBook";
import { booksData } from "../../data.js";

const PickSeason = () => {
  const allBooks = booksData;
  const [selectedSeason, setSelectedSeason] = useState("0");

  function handleChange(e) {
    const { id } = e.target;
    setSelectedSeason();
    setSelectedSeason(id);
  }

  return (
    <div>
      <div>
        <form className={styles.favorite_form}>
          <div className={styles.favorite_radio}>
            <label>
              <input
                type="radio"
                id="0"
                value="winter"
                className={styles.favorite_form_dot}
                checked={selectedSeason === "0"}
                onChange={handleChange}
              />
              Winter
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                id="1"
                value="spring"
                className={styles.favorite_form_dot}
                checked={selectedSeason === "1"}
                onChange={handleChange}
              />
              Spring
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                id="2"
                value="summer"
                className={styles.favorite_form_dot}
                checked={selectedSeason === "2"}
                onChange={handleChange}
              />
              Summer
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                id="3"
                value="autumn"
                className={styles.favorite_form_dot}
                checked={selectedSeason === "3"}
                onChange={handleChange}
              />
              Autumn
            </label>
          </div>
        </form>
      </div>
      <div className={styles.favorite_books}>
        {allBooks[selectedSeason].map((item) => (
          <FavoriteBook className={styles.favorite_book} book={item}></FavoriteBook>
        ))}
      </div>
    </div>
  );
};

export default PickSeason;
