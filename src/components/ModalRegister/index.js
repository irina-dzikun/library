import React from "react";

import styles from "./style.module.css";

const ModalRegister = ({ setIsOpenModalRegister, className }) => {
  return (
    <div className={styles.container_main + "" + className}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button
            className={styles.close_button}
            onClick={() => {
              setIsOpenModalRegister(false);
            }}
          >
            x
          </button>
        </div>
        <div className={styles.title}>Register</div>
        <div className={styles.all_info}>
          <div>First name</div>
          <input type="text" className={styles.register_input}></input>
          <div>Last name</div>
          <input type="text" className={styles.register_input}></input>
          <div>E-mail</div>
          <input type="e-mail" className={styles.register_input}></input>
          <div>Password</div>
          <input type="password" className={styles.register_input}></input>
        </div>
        <button className={styles.register_button}>Sign Up</button>
        <div className={styles.end_box}>
          <div className={styles.text}>Already have an account?</div>
          <button className={styles.login_button}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
