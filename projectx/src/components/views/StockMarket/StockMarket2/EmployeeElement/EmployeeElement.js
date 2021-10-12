import React from "react";
import styles from "./EmployeeElement.module.scss";
import PropTypes from "prop-types";
import Button from "../../../../common/Button/Button";
import employeeImg from "../../../../../images/profileIcon.png";
import { currencyFormat } from "../../../../utils/utils";

function EmployeeElement({
  id,
  name,
  productionTimeBoost,
  experienceBoost,
  productionCostBoost,
  quantityBoost,
  worksCount,
  hireCost,
  handleError,
  handleSuccess,
  ...props
}) {
  /* handleHire function is called after player clicks on Hire button */
  function handleHire() {
    /* employeesArray is used to make shorter variable from redux state*/
    const employeesArray = props.playerInfo.employees;

    /* object with info about employee player wants to hire */
    const employeeInfo = {
      id: id,
      name: name,
      productionTimeBoost: productionTimeBoost,
      experienceBoost: experienceBoost,
      productionCostBoost: productionCostBoost,
      quantityBoost: quantityBoost,
      worksCount: worksCount,
      hireCost: hireCost,
    };
    /* IF statement which checks if employee is not already in player employee array */
    if (employeesArray.some((employee) => employee.id === id)) {
      /* setCrurentAlertText sets current Alert box text to display after failed hire */
      props.setCurrentAlertText("You already hired that employee.");
      handleError();

      /* else if which checks if player have enough money to hire employee */
    } else if (props.playerInfo.money < hireCost) {
      /* setCrurentAlertText sets current Alert box text to display after failed sell */
      props.setCurrentAlertText("You can't afford to hire that person.");
      handleError();
    } else {
      /* IF player fulfill requirements calculate money after hire, push employee to player employeesArray and set new redux state such as new playerMoney amount, employeesArray and succesText displayed in alert box after successfull hire*/
      const playerMoneyAfterHire = props.playerInfo.money - hireCost;
      props.setMoney(playerMoneyAfterHire);
      employeesArray.push(employeeInfo);
      props.setEmployeesArray(employeesArray);
      props.setCurrentSuccessText(`You succesfully hired ${name}`);
      handleSuccess();
    }
  }
  return (
    <div className={styles.stockMarketElementContainer}>
      <div className={styles.stockMarketContentWrapper}>
        <div className={styles.employeeInfo}>
          <div className={styles.employeePhoto}>
            <img src={employeeImg} alt="EmployeePhoto" />
          </div>
          <p className={styles.employeeName}>{name}</p>
          <p className={styles.infoElement}>
            <span>Production time boost: </span>
            {productionTimeBoost * 100}%
          </p>
          <p className={styles.infoElement}>
            <span>Experience boost: </span>
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
            <span>Hire cost: </span>${currencyFormat(hireCost)}
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
  id: PropTypes.string,
  name: PropTypes.node,
  perfomanceIncreased: PropTypes.node,
  productionTimeBoost: PropTypes.node,
  experienceBoost: PropTypes.node,
  productionCostBoost: PropTypes.node,
  qunatityBoost: PropTypes.node,
  hireTime: PropTypes.node,
  hireCost: PropTypes.node,
  handleSuccess: PropTypes.func,
  handleError: PropTypes.func,
};

export default EmployeeElement;
