import React, { useContext, useState } from "react";

import styles from "./style.module.css";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

const FavoriteBook = ({ book }) => {
  const auth = useContext(AuthContext);
  const modal = useContext(ModalContext);
  const [ownBuy, setOwnBuy] = useState("Buy");

  return (
    <div className={styles.container}>
      <div className={styles.container_book}>
        <div className={styles.staff}>Staff Picks</div>
        <div className={styles.line}></div>
        <div className={styles.name_book}>{book.name}</div>
        <div className={styles.writer}>{book.writer}</div>
        <div className={styles.description_book}>{book.description}</div>
        <button
          className={styles.button_buy + " " + (ownBuy === "Own" ? styles.button_own : "")}
          onClick={() => {
            auth.client === undefined
              ? modal.toggleModalLogIn()
              : auth.client.buy
              ? ownBuy === "Buy"
                ? setOwnBuy("Own")
                : setOwnBuy("Buy")
              : modal.toggleModalBuyCard();
          }}
        >
          {ownBuy}
        </button>
      </div>
      <div className={styles.image_box}>
        <img src={book.image} alt="theBookEaters" />
      </div>
    </div>
  );
};

export default FavoriteBook;
