import React, { useContext } from "react";

import styles from "./style.module.css";

import iconProfile from "../../images/icon-profile.svg";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";
import { BookContext } from "../../contexts/BookContext";

const Header = () => {
  const auth = useContext(AuthContext);
  const modal = useContext(ModalContext);
  const bookRented = useContext(BookContext);

  return (
    <div className={styles.container_main}>
      <div className={styles.container}>
        <a className={styles.title_text} href="#main">
          Brooklyn Public Library
        </a>
        <div className={styles.pages}>
          <a className={styles.pages_text} href="#about">
            About
          </a>
          <a className={styles.pages_text} href="#favorites">
            Favorites
          </a>
          <a className={styles.pages_text} href="#coffeeShop">
            Coffee shop
          </a>
          <a className={styles.pages_text} href="#contacts">
            Contacts
          </a>
          <a className={styles.pages_text} href="#libraryCard">
            Library Card
          </a>
          {auth.client === undefined ? (
            <img
              src={iconProfile}
              alt="icon-profile"
              className={styles.icon_profile}
              onClick={() => {
                modal.toggleDropMenu();
              }}
            />
          ) : (
            <button
              className={styles.icon_profile_auth}
              onClick={() => {
                modal.toggleDropMenu();
              }}
            >
              {auth.client.nameProfile}
            </button>
          )}
        </div>
      </div>
      <div className={modal.isOpenDropMenu ? styles.dropMenu_active : styles.dropMenu}>
        <div className={auth.client ? styles.dropMenu_title_auth : styles.dropMenu_title}>
          {auth.client ? auth.client.cardNumber : "Profile"}
        </div>
        <div className={styles.dropMenu_line}></div>
        <div
          className={styles.dropMenu_log_in}
          onClick={() => {
            auth.client ? modal.toggleModalProfile() : modal.toggleModalLogIn();
          }}
        >
          {auth.client ? "My profile" : "Log In"}
        </div>
        <button
          className={styles.dropMenu_register}
          onClick={() => {
            auth.client
              ? (auth.client = undefined || modal.toggleDropMenu(false) || bookRented.logOut())
              : modal.toggleModalRegister();
          }}
        >
          {auth.client ? "Log Out" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Header;
