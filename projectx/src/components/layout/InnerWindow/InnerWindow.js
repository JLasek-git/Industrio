import React from "react";
import styles from "./InnerWindow.module.scss";
import PropTypes from "prop-types";
import HelpPanel from "../HelpPanel/HelpPanel";
function InnerWindow({ children }) {
  return <div className={styles.childrenContainer}>{children}</div>;
}

InnerWindow.propTypes = {
  children: PropTypes.node,
};

export default InnerWindow;
