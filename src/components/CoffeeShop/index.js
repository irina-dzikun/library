import React from "react";

import styles from "./style.module.css";

const CoffeeShop = ({ allMenu, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {allMenu.map((i) => (
        <div className={styles.menu} key={i.id}>
          <div className={styles.product}>{i.product}</div>
          <div className={styles.line_price_box}>
            <div className={styles.line}></div>
            <div className={styles.price}>${i.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeShop;
