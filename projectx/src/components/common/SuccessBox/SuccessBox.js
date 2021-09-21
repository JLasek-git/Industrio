import React from "react";
import styles from "./SuccessBox.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

function SuccessBox({ handleClose, ...props }) {
  return (
    <div className={styles.successBoxBackground}>
      <div className={styles.successBoxContainer}>
        <div className={styles.successBoxTextContainer}>
          <h1>Congratulations</h1>
          <p>{props.appInfo.currentSuccessText}</p>
        </div>
        <div className={styles.successBoxButtonsContainer} onClick={handleClose}>
          <Button btnText="OK" />
        </div>
      </div>
    </div>
  );
}

SuccessBox.propTypes = {
  succesText: PropTypes.node,
  hanldeClose: PropTypes.func,
};

export default SuccessBox;
