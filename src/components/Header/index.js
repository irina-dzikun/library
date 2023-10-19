import React, { useContext } from "react";

import styles from "./style.module.css";

import iconProfile from "../../images/icon-profile.svg";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

const Header = () => {
  const auth = useContext(AuthContext);
  const modal = useContext(ModalContext);

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
            auth.client ? (auth.client = undefined) : modal.toggleModalRegister();
          }}
        >
          {auth.client ? "Log Out" : "Register"}
        </button>
      </div>
    </div>
  );
};

export default Header;
