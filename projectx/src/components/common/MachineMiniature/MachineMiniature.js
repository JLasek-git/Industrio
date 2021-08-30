import React from "react";



function MachineMiniature({ ...props }) {
  return (
    <img src={props.source} alt={props.altText} />
  )
}


export default MachineMiniature;
