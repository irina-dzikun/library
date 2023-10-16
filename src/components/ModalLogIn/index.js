import React, { useContext, useState } from "react";

import styles from "./style.module.css";

import { AuthContext } from "../../contexts";

const ModalLogIn = ({ setIsOpenModalLogIn }) => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
        <form
          className={styles.all_info}
          onSubmit={(e) => {
            e.preventDefault();
            auth.logIn(email, password);
            if (auth.client !== undefined) {
              setIsOpenModalLogIn(false);
            }
          }}
        >
          <label>
            E-mail or readers card
            <input
              type="email"
              className={styles.register_input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              className={styles.register_input}
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
          <button className={styles.login_button}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogIn;
