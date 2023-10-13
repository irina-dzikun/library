import React from "react";

import styles from "./style.module.css";

const ModalLogIn = ({ setIsOpenModalLogIn }) => {
  return (
    <div className={styles.container_main}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button
            className={styles.close_button}
            onClick={() => {
              setIsOpenModalLogIn(false);
            }}
          >
            x
          </button>
        </div>
        <div className={styles.title}>Login</div>
        <div className={styles.all_info}>
          <div>E-mail or readers card</div>
          <input type="text" className={styles.register_input}></input>
          <div>Password</div>
          <input type="text" className={styles.register_input}></input>
        </div>
        <button className={styles.register_button}>Log In</button>
        <div className={styles.end_box}>
          <div className={styles.text}>Don’t have an account?</div>
          <button className={styles.login_button}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogIn;
