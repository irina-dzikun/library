import React, { useState } from "react";

import styles from "./style.module.css";

const ModalRegister = ({ setIsOpenModalRegister, className }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function addClient() {
    let allClients = [];
    let client = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    if (localStorage.getItem("clients") === null) {
      allClients.push(client);
      localStorage.setItem("clients", JSON.stringify(allClients));
    } else {
      allClients = JSON.parse(localStorage.getItem("clients"));
      let isExist = false;
      for (let i = 0; i <= allClients.length - 1; i++) {
        if (allClients[i].email === email) {
          isExist = true;
          break;
        }
      }
      if (!isExist) {
        allClients.push(client);
        localStorage.setItem("clients", JSON.stringify(allClients));
      }
    }
  }

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
        <form className={styles.all_info}>
          <label>
            First name
            <input
              type="text"
              className={styles.register_input}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              className={styles.register_input}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            E-mail
            <input
              type="e-mail"
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
        </form>
        <button className={styles.register_button} onClick={addClient}>
          Sign Up
        </button>
        <div className={styles.end_box}>
          <div className={styles.text}>Already have an account?</div>
          <button className={styles.login_button}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default ModalRegister;
