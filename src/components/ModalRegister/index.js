import React, { useContext, useState } from "react";

import styles from "./style.module.css";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

const ModalRegister = ({ className }) => {
  const auth = useContext(AuthContext);
  const modal = useContext(ModalContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.container_main + "" + className}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button
            className={styles.close_button}
            onClick={() => {
              modal.toggleModalRegister();
            }}
          >
            x
          </button>
        </div>
        <div className={styles.title}>Register</div>
        <form
          className={styles.all_info}
          onSubmit={(e) => {
            e.preventDefault();
            auth.register(firstName, lastName, email, password);
            modal.toggleModalRegister();
          }}
        >
          <label>
            First name
            <input
              type="text"
              className={styles.register_input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              className={styles.register_input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            E-mail
            <input
              type="email"
              className={styles.register_input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              minLength="8"
              size="8"
              className={styles.register_input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className={styles.register_button} type="submit">
            Sign Up
          </button>
        </form>
        <div className={styles.end_box}>
          <div className={styles.text}>Already have an account?</div>
          <button className={styles.login_button}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
