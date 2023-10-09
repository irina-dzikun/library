import React from "react";

import styles from "./style.module.css";

import Header from "../Header";

const MainPage = () => {
  return (
    <div>
      <div className={styles.container_main}>
        <Header></Header>
        <div className={styles.welcome_box}>
          <div className={styles.welcome_text}>
            Welcome<br></br> to the Brooklyn Library
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
