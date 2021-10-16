import React from "react";
import styles from "./ButtonSell.module.scss";
import PropTypes from "prop-types";

function ButtonSell({ btnFunction }) {
  return (
    <button className={styles.btn} onClick={btnFunction}>
      <span className={styles.btnText}>Sell</span>
    </button>
  );
}

ButtonSell.propTypes = {
  btnFunction: PropTypes.func,
};

export default ButtonSell;
