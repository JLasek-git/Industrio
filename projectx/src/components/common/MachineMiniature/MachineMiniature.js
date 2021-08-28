import React from "react";
import PropTypes from "prop-types";


function MachineMiniature({ ...props }) {
  return <img src={props.source} alt={props.altText} onClick={props.showSettings}/>;
}


export default MachineMiniature;
