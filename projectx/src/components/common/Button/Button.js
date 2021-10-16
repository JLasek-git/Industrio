import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

function Button({ btnText, btnFunction }) {
  return (
    <button className={styles.btn} onClick={btnFunction}>
      <span className={styles.btnText}>{btnText}</span>
    </button>
  );
}

Button.propTypes = {
  btnText: PropTypes.node,
  btnFunction: PropTypes.func,
};

export default Button;
