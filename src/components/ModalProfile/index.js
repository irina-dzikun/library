import React, { useContext } from "react";

import styles from "./style.module.css";

import visitsIcon from "../../images/visits-icon.svg";
import bonusesIcon from "../../images/bonuses-icon.svg";
import booksIcon from "../../images/books-icon.svg";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";
import { BookContext } from "../../contexts/BookContext";

const ModalProfile = () => {
  const auth = useContext(AuthContext);
  const modal = useContext(ModalContext);
  const bookRented = useContext(BookContext);

  return (
    <div className={styles.container_main}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button className={styles.close_button} onClick={() => modal.toggleModalProfile()}>
            x
          </button>
        </div>
        <div className={styles.container_left}>
          <div className={styles.icon_name}>{auth.client.nameProfile}</div>
          <div className={styles.name}>{auth.client.firstName + " " + auth.client.lastName}</div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.title}>My profile</div>
          <div className={styles.icons}>
            <div className={styles.icon_box}>
              <div className={styles.icon_title}>Visit</div>
              <div>
                <img src={visitsIcon} alt="visit" />
              </div>
              <div className={styles.icon_counter}>{auth.client.visits}</div>
            </div>
            <div className={styles.icon_box}>
              <div className={styles.icon_title}>Bonuses</div>
              <div>
                <img src={bonusesIcon} alt="bonuses" />
              </div>
              <div className={styles.icon_counter}>1240</div>
            </div>
            <div className={styles.icon_box}>
              <div className={styles.icon_title}>Books</div>
              <div>
                <img src={booksIcon} alt="books" />
              </div>
              <div className={styles.icon_counter}>{bookRented.allRentedBooks.length}</div>
            </div>
          </div>
          <div className={styles.title_info}>Rented books</div>
          <ul className={styles.list}>
            {bookRented.allRentedBooks.map((item) => (
              <li>
                {item.bookName}, {item.bookWriter}
              </li>
            ))}
          </ul>
          <div className={styles.card_box}>
            <div className={styles.card_text}>Card number</div>
            <div className={styles.cart_number}>{auth.client.cardNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProfile;
