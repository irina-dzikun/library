import React, { useContext, useEffect, useState } from "react";

import styles from "./style.module.css";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";
import { BookContext } from "../../contexts/BookContext";

const FavoriteBook = ({ book }) => {
  const bookRented = useContext(BookContext);
  const auth = useContext(AuthContext);
  const modal = useContext(ModalContext);
  const [toggleButtonText, setToggleButtonText] = useState("Buy");

  useEffect(() => {
    let isExist = false;
    bookRented.allRentedBooks.forEach((i) => {
      if (i.bookName === book.name) {
        isExist = true;
      }
    });
    if (isExist) {
      setToggleButtonText("Own");
    } else setToggleButtonText("Buy");
  }, [bookRented.allRentedBooks, book.name]);

  return (
    <div className={styles.container}>
      <div className={styles.container_book}>
        <div className={styles.staff}>Staff Picks</div>
        <div className={styles.line}></div>
        <div className={styles.name_book}>{book.name}</div>
        <div className={styles.writer}>By {book.writer}</div>
        <div className={styles.description_book}>{book.description}</div>
        <button
          className={styles.button_buy + " " + (toggleButtonText === "Own" ? styles.button_own : "")}
          onClick={() => {
            auth.client === undefined
              ? modal.toggleModalLogIn()
              : auth.client.buy
              ? toggleButtonText === "Buy"
                ? bookRented.addRentedBooks(book.name, book.writer)
                : bookRented.removeRentedBooks(book.name, book.writer)
              : modal.toggleModalBuyCard();
          }}
        >
          {toggleButtonText}
        </button>
      </div>
      <div className={styles.image_box}>
        <img src={book.image} alt="theBookEaters" />
      </div>
    </div>
  );
};

export default FavoriteBook;
