import React from "react";

import styles from "./style.module.css";

import iconProfile from "../../images/icon-profile.svg";

const Header = ({ toggleDropMenu, isOpenDropMenu, toggleModalRegister, toggleModalLogIn }) => {
  return (
    <div className={styles.container_main}>
      <div className={styles.container}>
        <div className={styles.title_text}>Brooklyn Public Library</div>
        <div className={styles.pages}>
          <div className={styles.pages_text}>About</div>
          <div className={styles.pages_text}>Favorites</div>
          <div className={styles.pages_text}>Coffee shop</div>
          <div className={styles.pages_text}>Contacts</div>
          <div className={styles.pages_text}>Library Card</div>
          <img
            src={iconProfile}
            alt="icon-profile"
            className={styles.icon_profile}
            onClick={() => {
              toggleDropMenu();
            }}
          />
        </div>
      </div>
      <div className={isOpenDropMenu ? styles.dropMenu_no_active : styles.dropMenu_no}>
        <div className={styles.dropMenu_no_title}>Profile</div>
        <div className={styles.dropMenu_no_line}></div>
        <div
          className={styles.dropMenu_no_log_in}
          onClick={() => {
            toggleModalLogIn();
          }}
        >
          Log In
        </div>
        <button
          className={styles.dropMenu_no_register}
          onClick={() => {
            toggleModalRegister();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
