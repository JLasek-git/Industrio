import React, { useState } from "react";
// import styles from "./StockMarket2.module.scss";
import EMPLOYEES from "../../../../data/employes.json";
import EmployeeElement from "./EmployeeElement/EmployeeElementContainer";
import AlertBox from "../../../common/AlertBox/AlertBoxContainer";
import SuccessBox from "../../../common/SuccessBox/SuccessBoxContainer";

const StockMarket2 = () => {
  const [alertBoxIsVisible, setAlertBoxIsVisible] = useState(false);
  const [succesIsVisible, setSuccessIsVisible] = useState(false);
  function handleError() {
    setAlertBoxIsVisible(!alertBoxIsVisible);
  }

  function handleSuccess() {
    setSuccessIsVisible(!succesIsVisible);
  }

  return (
    <>
      {alertBoxIsVisible && <AlertBox handleError={handleError} />}
      {succesIsVisible && <SuccessBox handleSuccess={handleSuccess} />}
      {EMPLOYEES.map((employee) => (
        <EmployeeElement
          key={employee.id}
          id={employee.id}
          name={employee.name}
          productionTimeBoost={employee.productionTimeBoost}
          experienceBoost={employee.experienceBoost}
          productionCostBoost={employee.productionCostBoost}
          quantityBoost={employee.quantityBoost}
          worksCount={employee.worksCount}
          hireCost={employee.hireCost}
          handleError={handleError}
          handleSuccess={handleSuccess}
        />
      ))}
    </>
  );
};

export default StockMarket2;
