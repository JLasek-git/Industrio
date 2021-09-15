import React from "react";
import styles from "./AlertBox.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

function AlertBox({ errorText, handleError }) {
  return (
    <div className={styles.alertBoxBackground}>
      <div className={styles.alertBoxContainer}>
        <div className={styles.alertBoxTextContainer}>
          <h1>Warning!</h1>
          <p>{errorText}</p>
        </div>
        <div className={styles.alertBoxButtonsContainer} onClick={handleError}>
          <Button btnText="OK" />
        </div>
      </div>
    </div>
  );
}

AlertBox.propTypes = {
  errorText: PropTypes.node,
  hanldeError: PropTypes.func,
};

export default AlertBox;
