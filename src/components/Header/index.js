import React from "react";

import styles from "./style.module.css";

import iconProfile from "../../images/icon-profile.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title_text}>Brooklyn Public Library</div>
      <div className={styles.pages}>
        <div className={styles.pages_text}>About</div>
        <div className={styles.pages_text}>Favorites</div>
        <div className={styles.pages_text}>Coffee shop</div>
        <div className={styles.pages_text}>Contacts</div>
        <div className={styles.pages_text}>Library Card</div>
        <img src={iconProfile} alt="icon-profile" className={styles.icon_profile} />
      </div>
    </div>
  );
};

export default Header;
