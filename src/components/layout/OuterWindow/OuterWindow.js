import React from "react";
import styles from "./OuterWindow.module.scss";
import PropTypes from "prop-types";

function OuterWindow({ children }) {
  return <div className={styles.outerWindow}>{children}</div>;
}

OuterWindow.propTypes = {
  children: PropTypes.node,
};

export default OuterWindow;
