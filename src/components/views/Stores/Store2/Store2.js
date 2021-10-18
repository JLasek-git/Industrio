import React, { useState } from "react";
// import styles from "./Store2.module.scss";
import EXPANSIONS from "../../../../data/magazines.json";
import StoreExpansion from "./StoreExpansion/StoreExpansionContainer";
import AlertBox from "../../../common/AlertBox/AlertBoxContainer";
import SuccessBox from "../../../common/SuccessBox/SuccessBoxContainer";

const Store2 = () => {
  const [alertBoxIsVisible, setAlertBoxIsVisible] = useState(false);
  const [successIsVisible, setSuccessIsVisible] = useState(false);

  function handleError() {
    setAlertBoxIsVisible(!alertBoxIsVisible);
  }

  function handleSuccess() {
    setSuccessIsVisible(!successIsVisible);
  }

  return (
    <>
      {alertBoxIsVisible && <AlertBox handleError={handleError} />}
      {successIsVisible && <SuccessBox handleSuccess={handleSuccess} />}
      {EXPANSIONS.map((expansion) => (
        <StoreExpansion
          key={expansion.id}
          name={expansion.name}
          improvement={expansion.improvement}
          cost={expansion.cost}
          handleError={handleError}
          handleSuccess={handleSuccess}
        />
      ))}
    </>
  );
};

export default Store2;
