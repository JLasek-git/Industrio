import React from "react";
import styles from "./ButtonBuy.module.scss";

function ButtonBuy() {
  return (
    <button className={styles.btn}>
      <span className={styles.btnText}>Buy</span>
    </button>
  );
}

export default ButtonBuy;
