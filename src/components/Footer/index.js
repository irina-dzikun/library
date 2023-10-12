import React from "react";

import styles from "./style.module.css";

import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.address_media_box}>
        <a href="https://maps.app.goo.gl/cwWJeHUnEFnqdDRD8" target="_blank" rel="noreferrer" className={styles.address}>
          286 Cadman Plaza, New York, NY 11238, United States
        </a>
        <div className={styles.media_box}>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.messenger.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
      <div className={styles.schedule}>
        <div>
          Mon - Fri <br /> 08:00 am - 07:00 pm
        </div>
        <div>
          Sat - Sun <br /> 10:00 am - 06:00 pm
        </div>
      </div>
    </div>
  );
};

export default Footer;
