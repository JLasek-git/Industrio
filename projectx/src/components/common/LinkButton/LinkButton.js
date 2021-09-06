import React from "react";
import PropTypes from "prop-types";
import styles from "./LinkButton.module.scss";
import { NavLink } from "react-router-dom";

function LinkButton(props) {
  return (
    <NavLink
      activeClassName={styles.navLinkActive}
      to={`${process.env.PUBLIC_URL}${props.link}`}
    >
      {" "}
      <div className={styles.linkBtn}>
        <span className={styles.linkDirection}>{props.buttonText}</span>
      </div>
    </NavLink>
  );
}

LinkButton.propTypes = {
  buttonText: PropTypes.node,
};

export default LinkButton;
