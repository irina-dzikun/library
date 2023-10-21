import React, { useContext } from "react";

import styles from "./style.module.css";

import visitsIcon from "../../images/visits-icon.svg";
import bonusesIcon from "../../images/bonuses-icon.svg";
import booksIcon from "../../images/books-icon.svg";

import { AuthContext } from "../../contexts/AuthContext";
import { BookContext } from "../../contexts/BookContext";

const InfoIcons = ({ className }) => {
  const auth = useContext(AuthContext);
  const bookRented = useContext(BookContext);

  return (
    <div className={styles.icons}>
      <div className={styles.icon_box}>
        <div className={styles.icon_title + " " + className}>Visit</div>
        <div>
          <img src={visitsIcon} alt="visit" />
        </div>
        <div className={styles.icon_counter}>{auth.client.visits}</div>
      </div>
      <div className={styles.icon_box}>
        <div className={styles.icon_title + " " + className}>Bonuses</div>
        <div>
          <img src={bonusesIcon} alt="bonuses" />
        </div>
        <div className={styles.icon_counter}>1240</div>
      </div>
      <div className={styles.icon_box}>
        <div className={styles.icon_title + " " + className}>Books</div>
        <div>
          <img src={booksIcon} alt="books" />
        </div>
        <div className={styles.icon_counter}>{bookRented.allRentedBooks.length}</div>
      </div>
    </div>
  );
};

export default InfoIcons;
