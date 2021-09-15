import React, { useState } from "react";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";
// import styles from "./StockMarket2.module.scss";
import Section from "../../../layout/Section/Section";
import EMPLOYEES from "../../../../data/employes.json";
import EmployeeElement from "./EmployeeElement/EmployeeElementContainer";
import AlertBox from "../../../common/AlertBox/AlertBoxContainer";

const StockMarket2 = () => {
  const [alertBoxIsVisible, setAlertBoxIsVisible] = useState(false);

  function handleError() {
    setAlertBoxIsVisible(!alertBoxIsVisible);
  }
  return (
    <Section>
      <OuterWindow>
        {alertBoxIsVisible && <AlertBox handleError={handleError} />}
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
            />
          ))}
        </InnerWindow>
      </OuterWindow>
    </Section>
  );
};

export default StockMarket2;
