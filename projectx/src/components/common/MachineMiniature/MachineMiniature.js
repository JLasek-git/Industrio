import React from "react";
import PropTypes from "prop-types";
import styles from "./MachineMiniature.model.scss";

function MachineMiniature({ ...props }) {
  return <img src={props.source} alt={props.altText} onClick={props.showSettings}/>;
}

export default MachineMiniature;
