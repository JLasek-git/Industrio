import React, { useState } from "react";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";
// import styles from "./StockMarket2.module.scss";
import Section from "../../../layout/Section/Section";
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
    <Section>
      <OuterWindow>
        {alertBoxIsVisible && <AlertBox handleError={handleError} />}
        {succesIsVisible && <SuccessBox handleSuccess={handleSuccess} />}
        <InnerWindow>
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
        </InnerWindow>
      </OuterWindow>
    </Section>
  );
};

export default StockMarket2;
