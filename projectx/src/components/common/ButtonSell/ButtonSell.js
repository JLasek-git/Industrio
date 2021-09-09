import React from "react";
import styles from "./ButtonSell.module.scss";

function ButtonSell() {
  return (
    <button className={styles.btn}>
      <span className={styles.btnText}>Sell</span>
    </button>
  );
}

export default ButtonSell;
