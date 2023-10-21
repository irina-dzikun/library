import React, { useContext } from "react";

import styles from "./style.module.css";

import InfoIcons from "../InfoIcons";

import { AuthContext } from "../../contexts/AuthContext";

const LibraryCard = () => {
  const auth = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.name_card}>Brooklyn Public Library</div>
        <input
          type="text"
          maxLength="20"
          placeholder="Reader's name"
          className={styles.input}
          value={auth.client !== undefined ? auth.client.firstName + " " + auth.client.lastName : ""}
        />
        <input
          type="text"
          maxLength="20"
          placeholder="Card number"
          className={styles.input}
          value={auth.client !== undefined ? auth.client.cardNumber : ""}
        />
      </div>
      <div>
        {auth.client !== undefined ? (
          <InfoIcons className={styles.icon_title}></InfoIcons>
        ) : (
          <button className={styles.check_button}>Check the card</button>
        )}
      </div>
    </div>
  );
};

export default LibraryCard;
