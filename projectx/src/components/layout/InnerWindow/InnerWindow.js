import React from "react";
import styles from "./InnerWindow.module.scss";
import PropTypes from "prop-types";

function InnerWindow({ children }) {
  return <div className={styles.childrenContainer}>{children}</div>;
}

InnerWindow.propTypes = {
  children: PropTypes.node,
};

export default InnerWindow;
