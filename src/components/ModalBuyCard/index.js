import React, { useContext } from "react";

import styles from "./style.module.css";

import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";

const ModalBuyCard = () => {
  const auth = useContext(AuthContext);
  const modal = useContext(ModalContext);

  return (
    <div className={styles.container_main}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button className={styles.close_button} onClick={() => modal.toggleModalBuyCard()}>
            x
          </button>
        </div>
        <div className={styles.container_one}>
          <div className={styles.title}> Buy a library card</div>
        </div>
        <div className={styles.container_two}>
          <div>
            <form className={styles.form_box}>
              <label>
                Bank card number
                <input type="text" className={styles.form_input} value="1111 2222 1111 2222" />
              </label>
              <label className={styles.form_input_text_box}>
                Expiration code
                <div className={styles.two_box_form_input}>
                  <input type="text" className={styles.form_input_small} value="11" />
                  <input type="text" className={styles.form_input_small} value="22" />
                </div>
              </label>
              <label className={styles.form_input_text_box}>
                CVC
                <input type="text" className={styles.form_input_small} value="111" />
              </label>
              <label>
                Cardholder name
                <input type="text" className={styles.form_input} />
              </label>
              <label>
                Postal code
                <input type="text" className={styles.form_input} value="11238" />
              </label>
              <label>
                City / Town
                <input type="text" className={styles.form_input} value="New York" />
              </label>
              <div className={styles.button_box}>
                <button
                  className={styles.form_button}
                  onClick={(e) => {
                    e.preventDefault();
                    auth.buyCard(auth.client);
                    modal.toggleModalBuyCard();
                  }}
                  type="submit"
                >
                  Buy
                </button>
                <div className={styles.price}>$25.00</div>
              </div>
            </form>
          </div>
          <div className={styles.text_end}>
            If you are live, work, attend school, or pay property taxes in New York State, you can get a $25 digital
            library card right now using this online form. Visitors to New York State can also use this form to apply
            for a temporary card.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBuyCard;
