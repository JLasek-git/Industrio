import React from "react";
import styles from "./EmployeeElement.module.scss";
import PropTypes from "prop-types";
import Button from "../../../../common/Button/Button";
import employeeImg from "../../../../../images/profileIcon.png";

function EmployeeElement({
  id,
  name,
  perfomanceIncreased,
  productionTimeBoost,
  experienceBoost,
  productionCostBoost,
  quantityBoost,
  worksCount,
  workCost,
  ...props
}) {
  function handleHire() {
    const employeesArray = props.playerInfo.employees;
    const employeeInfo = {
      id: id,
      name: name,
      perfomanceIncreased: perfomanceIncreased,
      productionTimeBoost: productionTimeBoost,
      experienceBoost: experienceBoost,
      productionCostBoost: productionCostBoost,
      quantityBoost: quantityBoost,
      worksCount: worksCount,
      workCost: workCost,
    };
    if (employeesArray.some((employee) => employee.id === id)) {
      alert("You already hired that employee.");
    } else {
      employeesArray.push(employeeInfo);
      props.setEmployeesArray(employeesArray);
    }
  }
  return (
    <div className={styles.employeesContainer}>
      <div className={styles.singleEmployee}>
        <div className={styles.employeeInfo}>
          <div className={styles.employeePhoto}>
            <img src={employeeImg} alt="EmployeePhoto" />
          </div>
          <p className={styles.employeeName}>{name}</p>
          <p className={styles.infoElement}>
            <span>Performance boost: </span>
            {perfomanceIncreased * 100}%
          </p>
          <p className={styles.infoElement}>
            <span>Production time boost: </span>
            {productionTimeBoost * 100}%
          </p>
          <p className={styles.infoElement}>
            <span>Expereince boost: </span>
            {experienceBoost * 100}%
          </p>
          <p className={styles.infoElement}>
            <span>Production cost boost: </span>
            {productionCostBoost * 100}%
          </p>
          <p className={styles.infoElement}>
            <span>Material quantity boost: </span>
            {quantityBoost * 100}%
          </p>
          <p className={styles.infoElement}>
            <span>Works count: </span>
            {worksCount}
          </p>
          <p className={styles.infoElement}>
            <span>Work cost: </span>${workCost}
          </p>
        </div>
        <div className={styles.hireBtn} onClick={handleHire}>
          <Button btnText="Hire" />
        </div>
      </div>
    </div>
  );
}

EmployeeElement.propTypes = {
  name: PropTypes.node,
  perfomanceIncreased: PropTypes.node,
  productionTimeBoost: PropTypes.node,
  experienceBoost: PropTypes.node,
  productionCostBoost: PropTypes.node,
  qunatityBoost: PropTypes.node,
  hireTime: PropTypes.node,
  hireCost: PropTypes.node,
};

export default EmployeeElement;
