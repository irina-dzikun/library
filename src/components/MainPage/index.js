import React from "react";

import styles from "./style.module.css";

import Header from "../Header";
import ImageSlider from "../ImageSlider";
import PickSeason from "../PickSeason";
import CoffeeShop from "../CoffeeShop";
import ContactPhone from "../ContactPhone";
import LibraryCard from "../LibraryCard";

import { drinkData, eatData, phoneData } from "../../data";
import contactMap from "../../images/contact-map.png";

const MainPage = () => {
  const allDrink = drinkData;
  const allEat = eatData;
  const allPhone = phoneData;

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
      <div className={styles.container_contacts}>
        <div className={styles.contacts_title}>Our Contacts</div>
        <div className={styles.contacts_line}></div>
        <div className={styles.contacts_box}>
          <div className={styles.contacts_info}>
            <div className={styles.contacts_info_text_one}>For all Library inquiries:</div>
            <ContactPhone allPhone={allPhone}></ContactPhone>
            <div className={styles.contacts_info_text_two}>Senior Staff</div>
            <div>
              Library Director: <b>Amanda Hirst</b>
            </div>
          </div>
          <div className={styles.contacts_map}>
            <img src={contactMap} alt="map" />
          </div>
        </div>
      </div>
      <div className={styles.container_labrary_cards}>
        <div className={styles.labrary_cards_title}>Digital Library Cards</div>
        <div className={styles.labrary_cards_line}></div>
        <div className={styles.find_get_box}>
          <div className={styles.find_box}>
            <div className={styles.find_title}>Find your Library card</div>
            <LibraryCard></LibraryCard>
          </div>
          <div className={styles.get_box}>
            <div className={styles.get_title}>Get a reader card</div>
            <div className={styles.get_text}>
              You will be able to see a reader card after logging into account or you can register a new account
            </div>
            <div className={styles.buttons_box}>
              <button className={styles.get_button}>Sign Up</button>
              <button className={styles.get_button}>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
