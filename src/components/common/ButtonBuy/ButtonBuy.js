import React from "react";
import styles from "./ButtonBuy.module.scss";
import PropTypes from "prop-types";

function ButtonBuy({ btnFunction }) {
  return (
    <button className={styles.btn} onClick={btnFunction}>
      <span className={styles.btnText}>Buy</span>
    </button>
  );
}

ButtonBuy.propTypes = {
  btnFunction: PropTypes.func,
};

export default ButtonBuy;
