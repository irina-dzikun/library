import React from "react";

import styles from "./style.module.css";

import visitsIcon from "../../images/visits-icon.svg";
import bonusesIcon from "../../images/bonuses-icon.svg";
import booksIcon from "../../images/books-icon.svg";

const ModalProfile = ({ setIsOpenModalProfile }) => {
  return (
    <div className={styles.container_main}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button className={styles.close_button} onClick={() => setIsOpenModalProfile(false)}>
            x
          </button>
        </div>
        <div className={styles.container_left}>
          <div className={styles.icon_name}>JD</div>
          <div className={styles.name}>John Doe</div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.title}>My profile</div>
          <div className={styles.icons}>
            <div className={styles.icon_box}>
              <div className={styles.icon_title}>Visits</div>
              <div>
                <img src={visitsIcon} alt="visit" />
              </div>
              <div className={styles.icon_counter}>23</div>
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
              <div className={styles.icon_counter}>2</div>
            </div>
          </div>
          <div className={styles.title_info}>Rented books</div>
          <ul className={styles.list}>
            <li>The Last Queen, Clive Irving</li>
            <li>Dominicana, Angie Cruz</li>
          </ul>
          <div className={styles.card_box}>
            <div className={styles.card_text}>Card number</div>
            <div className={styles.cart_number}>F00234030</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProfile;
