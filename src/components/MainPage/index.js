import React from "react";

import styles from "./style.module.css";

import Header from "../Header";
import ImageSlider from "../ImageSlider";

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
      <div className={styles.container_about}>
        <div className={styles.about_title}>About</div>
        <div className={styles.about_line}></div>
        <div className={styles.about_text}>
          The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside
        </div>
        <ImageSlider></ImageSlider>
      </div>
    </div>
  );
};

export default MainPage;
