import React from "react";
import PropTypes from "prop-types";
import styles from "./LinkButton.module.scss";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

function LinkButton(props) {
  return (
    <Link
      className={styles.linkText}
      to={`${process.env.PUBLIC_URL}${props.link}`}
    >
      <div className={styles.linkBtn}>
        <Icon name={props.iconName} />
        <span className={styles.linkDirection}>{props.buttonText}</span>
      </div>
    </Link>
  );
}

LinkButton.propTypes = {
  buttonText: PropTypes.node,
};

export default LinkButton;