import React from "react";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";
// import styles from "./StockMarket2.module.scss";
import Section from "../../../layout/Section/Section";
import EMPLOYEES from "../../../../data/employes.json";
import EmployeeElement from "./EmployeeElement/EmployeeElementContainer";

const StockMarket2 = ({ ...props }) => (
  <Section>
    <OuterWindow>
      <InnerWindow>
        {EMPLOYEES.map((employee) => (
          <EmployeeElement
            key={employee.id}
            id={employee.id}
            name={employee.name}
            perfomanceIncreased={employee.performanceIncreased}
            productionTimeBoost={employee.productionTimeBoost}
            experienceBoost={employee.experienceBoost}
            productionCostBoost={employee.productionCostBoost}
            quantityBoost={employee.quantityBoost}
            worksCount={employee.worksCount}
            hireCost={employee.hireCost}
          />
        ))}
      </InnerWindow>
    </OuterWindow>
  </Section>
);

export default StockMarket2;
