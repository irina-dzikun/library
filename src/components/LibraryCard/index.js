import React from "react";

import styles from "./style.module.css";

const LibraryCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.name_card}>Brooklyn Public Library</div>
        <input type="text" maxLength="20" placeholder="Reader's name" className={styles.input} />
        <input type="text" maxLength="20" placeholder="Card number" className={styles.input} />
      </div>
      <div>
        <button className={styles.check_button}>Check the card</button>
      </div>
    </div>
  );
};

export default LibraryCard;
