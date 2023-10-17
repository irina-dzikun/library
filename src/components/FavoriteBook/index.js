import React from "react";

import styles from "./style.module.css";

const FavoriteBook = ({ book, toggleModalBuyCard }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_book}>
        <div className={styles.staff}>Staff Picks</div>
        <div className={styles.line}></div>
        <div className={styles.name_book}>{book.name}</div>
        <div className={styles.writer}>{book.writer}</div>
        <div className={styles.description_book}>{book.description}</div>
        <button className={styles.button_buy} onClick={() => toggleModalBuyCard()}>
          Buy
        </button>
      </div>
      <div className={styles.image_box}>
        <img src={book.image} alt="theBookEaters" />
      </div>
    </div>
  );
};

export default FavoriteBook;
