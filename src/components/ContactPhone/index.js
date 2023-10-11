import React from "react";

import styles from "./style.module.css";

const ContactPhone = ({ allPhone }) => {
  return (
    <div className={styles.container}>
      {allPhone.map((item) => (
        <div key={item.id}>
          {item.text}
          <a href={item.link} className={styles.phone}>
            {" "}
            {item.number}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactPhone;
