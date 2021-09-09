import React from "react";
import styles from "./EmployeeElement.module.scss";
import PropTypes from "prop-types";
import Button from "../../../../common/Button/Button";
import employeeImg from "../../../../../images/profileIcon.png";

function EmployeeElement({
  name,
  perfomanceIncreased,
  productionTimeBoost,
  experienceBoost,
  productionCostBoost,
  qunatityBoost,
  hireTime,
  hireCost,
  ...props
}) {
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
            {perfomanceIncreased}
          </p>
          <p className={styles.infoElement}>
            <span>Production time boost: </span>
            {productionTimeBoost}
          </p>
          <p className={styles.infoElement}>
            <span>Expereince boost: </span>
            {experienceBoost}
          </p>
          <p className={styles.infoElement}>
            <span>Production cost boost: </span>
            {productionCostBoost}
          </p>
          <p className={styles.infoElement}>
            <span>Material quantity boost: </span>
            {qunatityBoost}
          </p>
          <p className={styles.infoElement}>
            <span>Hire time: </span>
            {hireTime}
          </p>
          <p className={styles.infoElement}>
            <span>Hire cost: </span>
            {hireCost}
          </p>
        </div>
        <div className={styles.hireBtn}>
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
