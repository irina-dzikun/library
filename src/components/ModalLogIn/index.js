import React, { useContext, useState } from "react";

import styles from "./style.module.css";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

const ModalLogIn = () => {
  const auth = useContext(AuthContext);
  const modal = useContext(ModalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <div className={styles.container_main}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button
            className={styles.close_button}
            onClick={() => {
              modal.toggleModalLogIn();
            }}
          >
            x
          </button>
        </div>
        <div className={styles.title}>Login</div>
        <form
          className={styles.all_info}
          onSubmit={(e) => {
            e.preventDefault();
            let isLogIn = auth.logIn(email, password);
            if (isLogIn) {
              modal.toggleModalLogIn();
            } else {
              setIsError(true);
            }
          }}
        >
          <label>
            E-mail or readers card
            <input
              type="email"
              className={styles.register_input + " " + (isError ? styles.error_input : "")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              className={styles.register_input + " " + (isError ? styles.error_input : "")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={styles.register_button} type="submit">
            Log In
          </button>
        </form>
        <div className={styles.end_box}>
          <div className={styles.text}>Don’t have an account?</div>
          <button
            className={styles.login_button}
            onClick={() => {
              modal.toggleModalRegister();
              modal.toggleModalLogIn();
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogIn;
