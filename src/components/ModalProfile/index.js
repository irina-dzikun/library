import React, { useContext } from "react";

import styles from "./style.module.css";

import InfoIcons from "../InfoIcons";

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
          <InfoIcons></InfoIcons>
          <div className={styles.title_info}>Rented books</div>
          <ul className={styles.list + " " + (bookRented.allRentedBooks.length >= 3 ? styles.list_scroll : "")}>
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
