import React from "react";
import styles from "./SuccessBox.module.scss";
import PropTypes from "prop-types";
import Button from "../Button/Button";

function SuccessBox({ handleSuccess, ...props }) {
  return (
    <div className={styles.alertBoxBackground}>
      <div className={styles.alertBoxContainer}>
        <div className={styles.alertBoxTextContainer}>
          <h1>Congratulations</h1>
          <p>{props.appInfo.currentSuccessText}</p>
        </div>
        <div
          className={styles.alertBoxButtonsContainer}
          onClick={handleSuccess}
        >
          <Button btnText="OK" />
        </div>
      </div>
    </div>
  );
}

SuccessBox.propTypes = {
  handleSuccess: PropTypes.func,
};

export default SuccessBox;
