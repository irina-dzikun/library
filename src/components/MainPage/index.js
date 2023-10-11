import React from "react";

import styles from "./style.module.css";

import Header from "../Header";
import ImageSlider from "../ImageSlider";
import PickSeason from "../PickSeason";
import CoffeeShop from "../CoffeeShop";

import { drinkData, eatData } from "../../data";

const MainPage = () => {
  const allDrink = drinkData;
  const allEat = eatData;

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
      <div className={styles.container_favorites}>
        <div className={styles.favorites_title}>Favorites</div>
        <div className={styles.favorites_line}></div>
        <div className={styles.favorites_text}>Pick favorites of season</div>
        <PickSeason></PickSeason>
      </div>
      <div className={styles.container_shop}>
        <div className={styles.shop_title}>Coffee shop</div>
        <div className={styles.shop_line}></div>
        <div className={styles.shop_text}>
          In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly
          conversation. you can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and
          also you can try desserts from bakery.
        </div>
        <div className={styles.shop_menu}>
          <CoffeeShop allMenu={allDrink} title={"Coffee & Tea"}></CoffeeShop>
          <CoffeeShop allMenu={allEat} title={"Desserts & Cakes"}></CoffeeShop>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
