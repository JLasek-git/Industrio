import React, { useState } from "react";
import ShopElement from "./ShopElement/ShopElementContainer";
import MATERIALS from "../../../../data/materials.json";
import AlertBox from "../../../common/AlertBox/AlertBoxContainer";
import SuccessBox from "../../../common/SuccessBox/SuccessBoxContainer";

function StockMarket1({ ...props }) {
  const [alertBoxIsVisible, setAlertBoxIsVisible] = useState(false);
  const [successBoxIsVisible, setSuccessBoxIsVisible] = useState(false);

  function handleError() {
    setAlertBoxIsVisible(!alertBoxIsVisible);
  }

  function handleSuccess() {
    setSuccessBoxIsVisible(!successBoxIsVisible);
  }

  return (
    <>
      {alertBoxIsVisible && <AlertBox handleError={handleError} />}
      {successBoxIsVisible && <SuccessBox handleSuccess={handleSuccess} />}
      {MATERIALS.map((material) => (
        <ShopElement
          key={material.id}
          materialStateName={material.id}
          materialDisplayName={material.name}
          materialPrice={material.price}
          handleError={handleError}
          handleSuccess={handleSuccess}
          {...props}
        />
      ))}
    </>
  );
}

export default StockMarket1;
