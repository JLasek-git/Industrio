import React, { useRef, useState} from "react";
import styles from "./SettingsPanel.module.scss";
import Icon from "../../../../common/Icon/Icon";
import Button from "../../../../common/Button/Button";
import MACHINES from "../../../../../data/machinesPreTreatment.json";
import AlertBox from "../../../../common/AlertBox/AlertBoxContainer";
import {
  calculateProductionCost,
  calculateMaterialReceived,
  calculateDuration,
  calculateMaterialUsed,
  calculateReceivedExp,
  calculatePlayerMoneyAfter,
} from "./SettingsPanelUtils";
import { setEmployeesWorkCount } from "../../../../../redux/playerRedux";

function SettingsPanel(props) {
  const amountValue = useRef();
  const machinesCount = useRef();
  const machineType = useRef();
  const shiftSupervisor = useRef();

  /* state used only in form */
  const [currentMaterialValue, setCurrentValue] = useState(0);
  const [currentProductionCost, setCurrentCost] = useState(0);
  const [currentProductionTime, setCurrentTime] = useState(0);
  const [currentMachinePicked, setCurrentMachinePicked] =
    useState("impactCrusher");
  const [currentMachinesCount, setCurrentMachinesCount] = useState(0);
  const [currentSupervisor, setCurrentSupervisor] = useState(
    props.playerInfo.employees[0].id
  );
  const [alertBoxIsVisible, setAlertBoxIsVisible] = useState(false);

  function handleError() {
    setAlertBoxIsVisible(!alertBoxIsVisible);
  }

  /* object to make used Redux state object keys shorter */
  const reduxStateInfo = {
    playerEqUsedMaterialQuantity:
      props.playerInfo.equipment.materials.ironOre.quantity,

    playerEqReceivedMaterialQuantity:
      props.playerInfo.equipment.materials.ironOreConcentrate.quantity,

    playerMoney: props.playerInfo.money,

    singleProductionCost:
      props.playerInfo.equipment.materials.ironOre.productionCost,

    materialDurability: props.playerInfo.equipment.materials.ironOre.durability,

    machinePerformance:
      props.playerInfo.equipment.machines[currentMachinePicked].performance,

    currentMachineState:
      props.playerInfo.equipment.machines[currentMachinePicked].work,

    playerExperience: props.playerInfo.experience,

    materialGivenExperience:
      props.playerInfo.equipment.materials.ironOre.experience,

    pickedMachineQuantity:
      props.playerInfo.equipment.machines[currentMachinePicked].owned,

    employeesStateArray: props.playerInfo.employees,
    playerLevel: props.playerInfo.level,
  };

  /* START PRODUCTION HANDLER */
  function submitHandler(event) {
    event.preventDefault();

    /* this part of code handle work start, and changing state depending on passed parameters (changing quantity of player material (how much he will be given), taking costs of work) */
    if (!reduxStateInfo.currentMachineState) {
      /* this defines our pickedAmount on input and parses to int*/
      const pickedAmount = parseInt(amountValue.current.value);
      const pickedMachinesAmount = parseInt(machinesCount.current.value);
      const pickedSupervisorIndex = reduxStateInfo.employeesStateArray
        .map((employee) => {
          return employee.id;
        })
        .indexOf(currentSupervisor);

      /* This line allow us to properly add materials for player production */
      let amountAfter = pickedAmount;
      props.setMaterialReceivedFromProduction({
        amountAfter,
        currentMachinePicked,
      });

      /* START calculations passed to state depending on props */
      const wholeProductionCost = calculateProductionCost(
        pickedAmount,
        pickedMachinesAmount,
        reduxStateInfo.singleProductionCost,
        reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
      );

      const playerMoneyAfterProduction = calculatePlayerMoneyAfter(
        wholeProductionCost,
        reduxStateInfo.playerMoney
      );
      const playerReceivedMaterialAfterProduction = calculateMaterialReceived(
        pickedAmount,
        reduxStateInfo.playerEqReceivedMaterialQuantity,
        props.playerInfo.equipment.machines,
        currentMachinePicked,
        props.playerInfo,
        reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
      );

      const playerUsedMaterialAfterProduction = calculateMaterialUsed(
        pickedAmount,
        reduxStateInfo.playerEqUsedMaterialQuantity
      );
      const productionDuration = calculateDuration(
        pickedAmount,
        pickedMachinesAmount,
        reduxStateInfo.materialDurability,
        reduxStateInfo.machinePerformance,
        reduxStateInfo.employeesStateArray[pickedSupervisorIndex],
        props.playerInfo.magazine.poorMagazine.materialCapacity,
        props.playerInfo.equipment.materials.ironOre.quantity,
        props.playerInfo.equipment.materials.ironOreConcentrate.quantity
      );
      const playerReceivedExperience = calculateReceivedExp(
        pickedAmount,
        reduxStateInfo.materialGivenExperience,
        reduxStateInfo.playerExperience,
        reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
      );
      /* END */

      props.setMaterialReceivedFromProduction({
        amountAfter,
        currentMachinePicked,
      });
      /* if whole production cost which depends on calculation playerActualMoney - productionCosts is less than 0 it means player don't have enough money to proceed*/
      if (
        playerMoneyAfterProduction < 0 ||
        playerUsedMaterialAfterProduction < 0
      ) {
        props.setCurrentAlertText(
          "You do not have sufficient materials or funds for production."
        );
        handleError();
      } else if (currentMaterialValue <= 0 || currentMachinesCount <= 0) {
        props.setCurrentAlertText(
          "To start production you have to pick amount of material and machines."
        );
        handleError();
      } else if (reduxStateInfo.pickedMachineQuantity < currentMachinesCount) {
        props.setCurrentAlertText(
          "Sorry, you doesn't have that many machines."
        );
        handleError();
      } else {
        let bool = true;
        if (
          props.playerInfo.employees[pickedSupervisorIndex].worksCount !==
          undefined
        ) {
          const employees = reduxStateInfo.employeesStateArray;
          const newWorkCount = employees[pickedSupervisorIndex].worksCount - 1;

          employees[pickedSupervisorIndex].worksCount = newWorkCount;
          props.setEmployeesWorkCount(employees);
        }
        props.setMaterialQuantityDown(playerUsedMaterialAfterProduction);
        props.setMoney(playerMoneyAfterProduction);
        props.setMachineState({ bool, currentMachinePicked });
        props.setAmountMachinesWorking({
          pickedMachinesAmount,
          currentMachinePicked,
        });

        let productionCost = wholeProductionCost;
        props.setProductionCost({
          currentMachinePicked,
          productionCost,
        });

        /* If statement which delete employee from array, when worksCount is 0 */
        if (
          reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
            .worksCount <= 0
        ) {
          const employees = reduxStateInfo.employeesStateArray;
          employees.splice(pickedSupervisorIndex, 1);
          setEmployeesWorkCount(employees);
        }
        

        const startTime = Date.now();
        const interval = 990;

        const productionEndHandler = () => {
          console.log(reduxStateInfo.playerEqReceivedMaterialQuantity);
          bool = false;
          amountAfter = 0;
          props.setMaterialReceivedFromProduction({
            amountAfter,
            currentMachinePicked,
          });

          productionCost = 0;
          props.setProductionCost({
            currentMachinePicked,
            productionCost,
          });
          props.setMaterialQuantityUp(playerReceivedMaterialAfterProduction);
          props.setMachineState({ bool, currentMachinePicked });
          if (
            props.playerInfo.experience +
              (reduxStateInfo.materialGivenExperience * pickedAmount) >=
            props.playerInfo.toNextLevel
          ) {
            const playerLevelUp = reduxStateInfo.playerLevel + 1;
            const experienceAfterLevelUp = 0;
            const nextLevelCap = Math.pow(2.72, 0.0271 * playerLevelUp) * 17644;
            const levelCapAsInt = Math.trunc(nextLevelCap);
            props.setPlayerLevel(playerLevelUp);
            props.setExperience(experienceAfterLevelUp);
            props.setExperienceToNextLevel(levelCapAsInt);
          } else {
            props.setExperience(playerReceivedExperience);
          }
        }
 
        setTimeout(productionEndHandler, productionDuration);
        
        const timeLeftCalculationHandler = () => {
          let counter = productionDuration - (Date.now() - startTime);
          if (counter <= 0) {
            counter = 0;
            props.setTime({counter, currentMachinePicked});
            clearInterval(counterInterval);
          }
          props.setTime({ counter, currentMachinePicked });
        }

        /* counter which shows time to end of production */
        const counterInterval = setInterval(timeLeftCalculationHandler, interval);
       
      }
    } else {
      props.setCurrentAlertText("Machine is still working.");
      handleError();
    }

    /* if machine is still working player can't start second work*/
  }

  /* Handler for range form, which allow us to show currentCost, currentAmount of items and currentTime to produce*/

  function changeHandler() {
    const pickedAmount = amountValue.current.value;
    const pickedMachinesAmount = machinesCount.current.value;
    const pickedProductionMachine = machineType.current.value;
    const pickedSupervisor = shiftSupervisor.current.value;

    setCurrentMachinePicked(pickedProductionMachine);
    setCurrentSupervisor(pickedSupervisor);
    const pickedSupervisorIndex = reduxStateInfo.employeesStateArray
      .map((employee) => {
        return employee.id;
      })
      .indexOf(currentSupervisor);

    reduxStateInfo.machinePerformance =
      props.playerInfo.equipment.machines[pickedProductionMachine].performance;
    reduxStateInfo.machineState =
      props.playerInfo.equipment.machines[pickedProductionMachine].work;
    reduxStateInfo.pickedMachineQuantity =
      props.playerInfo.equipment.machines[pickedProductionMachine].owned;

    /* This line is used for DOM element to display proper amount of machines */
    setCurrentMachinesCount(pickedMachinesAmount);

      function calculateProductionTimeDisplayed() {
        const productionTimeRaw =
        ((reduxStateInfo.materialDurability / reduxStateInfo.machinePerformance) *
          pickedAmount) /
        pickedMachinesAmount;
      const productionTimeWithBoost =
        productionTimeRaw -
        productionTimeRaw *
          reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
            .productionTimeBoost;
  
      const materialFreeSpace = props.playerInfo.magazine.poorMagazine.materialCapacity - (props.playerInfo.equipment.materials.ironOre.quantity - props.playerInfo.equipment.materials.ironOreConcentrate.quantity); 
      
      if(materialFreeSpace < 0) {
        const materialFreeSpaceAsAbs = Math.abs(materialFreeSpace);
  
        const timeToProductWithPenalty = productionTimeWithBoost * materialFreeSpaceAsAbs;

        return timeToProductWithPenalty;
      } else {
        
        return productionTimeWithBoost;
      }
      }

      const timeToProduct = calculateProductionTimeDisplayed();


    const costToProductRaw =
      pickedAmount * reduxStateInfo.singleProductionCost * pickedMachinesAmount;
    const costToProductBoost =
      costToProductRaw -
      costToProductRaw *
        reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
          .productionCostBoost;
    const costToProduct = costToProductBoost;

    setCurrentValue(pickedAmount);
    setCurrentCost(costToProduct);
    setCurrentTime(timeToProduct);
  }

  return (
    <div className={styles.panelCard}>
      {alertBoxIsVisible && <AlertBox handleError={handleError} />}
      <div className={styles.closeBtn} onClick={props.handleClose}>
        <Icon name="times" />
      </div>
      <form
        className={styles.parametersForm}
        onSubmit={(event) => submitHandler(event)}
      >
        <p>Iron Ore</p>
        <label htmlFor="amount">
            Material amount:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          defaultValue={props.playerInfo.equipment.materials.ironOre.quantity}
          min="0"
          max={props.playerInfo.equipment.materials.ironOre.quantity}
          onChange={changeHandler}
          ref={amountValue}
        />
        <label htmlFor="machineType">Machine settings:</label>
        <select
          name="machineType"
          id="machineType"
          onChange={changeHandler}
          defaultValue="impactCrusher"
          ref={machineType}
        >
          {MACHINES.map((option) => (
            <option key={option.id} value={option.id} onClick={changeHandler}>
              {option.name} - {props.playerInfo.equipment.machines[option.id].owned}
            </option>
          ))}
        </select>
        <label htmlFor="machinesCount"></label>
        <input
          type="number"
          name="machinesCount"
          id="machinesCount"
          defaultValue="0"
          min="0"
          max={reduxStateInfo.pickedMachineQuantity}
          onChange={changeHandler}
          ref={machinesCount}
        />
        <label htmlFor="shiftSupervisor">Supervisor: </label>
        <select
          name="shiftSupervisor"
          id="shiftSupervisor"
          onChange={changeHandler}
          defaultValue="none"
          ref={shiftSupervisor}
        >
          {props.playerInfo.employees.map((employee) => (
            <option
              key={employee.id}
              value={employee.id}
              onClick={changeHandler}
            >
              {employee.name} {employee.name !== "None" && (employee.worksCount)}
            </option>
          ))}
        </select>
        <Button btnText="Start" />
      </form>
      <span>
        <p>Production cost: {currentProductionCost}$</p>
        <p>Production time: {(currentProductionTime / 60).toFixed(2)} min</p>
        <p>
          Time left:{" "}
          {(
            props.playerInfo.equipment.machines[currentMachinePicked]
              .timeDuration / 60000
          ).toFixed(2)}{" "}
          min
        </p>
      </span>
    </div>
  );
}

export default SettingsPanel;
