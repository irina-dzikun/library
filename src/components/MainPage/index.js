import React from "react";

import styles from "./style.module.css";

import Header from "../Header";
import ImageSlider from "../ImageSlider";
import FavoriteBook from "../FavoriteBook";

const MainPage = () => {
  return (
    <div className={styles.container_main}>
      <div className={styles.container_welcome}>
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
      <div className={styles.favorite_books}>
        <FavoriteBook className={styles.favorite_book}></FavoriteBook>
        <FavoriteBook className={styles.favorite_book}></FavoriteBook>
        <FavoriteBook className={styles.favorite_book}></FavoriteBook>
        <FavoriteBook className={styles.favorite_book}></FavoriteBook>
      </div>
    </div>
  );
};

export default MainPage;
