import React, { useContext } from "react";

import styles from "./style.module.css";

import { AuthContext } from "../../contexts";

const ModalBuyCard = ({ setIsOpenModalBuyCard }) => {
  const auth = useContext(AuthContext);

  return (
    <div className={styles.container_main}>
      <div className={styles.container}>
        <div className={styles.close}>
          <button className={styles.close_button} onClick={() => setIsOpenModalBuyCard(false)}>
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
                <input type="text" className={styles.form_input} />
              </label>
              <label className={styles.form_input_text_box}>
                Expiration code
                <input type="text" className={styles.form_input_small} />
              </label>
              <label className={styles.form_input_text_box}>
                CVC
                <input type="text" className={styles.form_input_small} />
              </label>
              <label>
                Cardholder name
                <input type="text" className={styles.form_input} />
              </label>
              <label>
                Postal code
                <input type="text" className={styles.form_input} />
              </label>
              <label>
                City / Town
                <input type="text" className={styles.form_input} />
              </label>
              <div className={styles.button_box}>
                <button
                  className={styles.form_button}
                  onClick={(e) => {
                    e.preventDefault();
                    auth.buyCard(auth.client);
                    setIsOpenModalBuyCard(false);
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
