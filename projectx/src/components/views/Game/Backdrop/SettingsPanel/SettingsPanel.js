import React, { useRef, useState } from "react";
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

  /* State is only used in form */
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

  /* Function to show and close alertBox visibility */
  function handleError() {
    setAlertBoxIsVisible(!alertBoxIsVisible);
  }

  /* Object with state values to make names shorter and easier to change */
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

    playerMachinesArray: props.playerInfo.equipment.machines,

    playerExperience: props.playerInfo.experience,

    materialGivenExperience:
      props.playerInfo.equipment.materials.ironOre.experience,

    pickedMachineQuantity:
      props.playerInfo.equipment.machines[currentMachinePicked].owned,

    employeesStateArray: props.playerInfo.employees,
    playerLevel: props.playerInfo.level,
    magazineMaterialCapacity:
      props.playerInfo.magazine.poorMagazine.materialCapacity,
    playerIronOre: props.playerInfo.equipment.materials.ironOre.quantity,
    playerIronOreConcentrate:
      props.playerInfo.equipment.materials.ironOreConcentrate.quantity,
    playerExpToNextLvl: props.playerInfo.toNextLevel,
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

      /* START calculations*/

      /* Functions for all of those calculations are in SettingsPnelUtils.js */
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
        reduxStateInfo.playerMachinesArray,
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
        reduxStateInfo.magazineMaterialCapacity,
        reduxStateInfo.playerIronOre,
        reduxStateInfo.playerIronOreConcentrate
      );
      const playerReceivedExperience = calculateReceivedExp(
        pickedAmount,
        reduxStateInfo.materialGivenExperience,
        reduxStateInfo.playerExperience,
        reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
      );
      /* END */

      /* It's used only to return player material on page refresh since, there's no server yet */
      let amountAfter = playerReceivedMaterialAfterProduction;
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

        /* if statement that checks if player picked supervisor, if yes his worksCount is reduced  */
        if (
          reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
            .worksCount !== undefined
        ) {
          const employees = reduxStateInfo.employeesStateArray;
          const newWorkCount = employees[pickedSupervisorIndex].worksCount - 1;

          employees[pickedSupervisorIndex].worksCount = newWorkCount;
          props.setEmployeesWorkCount(employees);

          /* If statement which delete employee from array, when worksCount is 0 */
        } else if (
          reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
            .worksCount <= 0
        ) {
          const employees = reduxStateInfo.employeesStateArray;
          employees.splice(pickedSupervisorIndex, 1);
          setEmployeesWorkCount(employees);
        }

        /* setting new values on production start (taking material, taking money and setting workState for machine)*/
        props.setMaterialQuantityDown(playerUsedMaterialAfterProduction);
        props.setMoney(playerMoneyAfterProduction);
        props.setMachineState({ bool, currentMachinePicked });
        props.setAmountMachinesWorking({
          pickedMachinesAmount,
          currentMachinePicked,
        });

        /* It's used only to return player money after page refresh, since there's no server yet*/
        let productionCost = wholeProductionCost;
        props.setProductionCost({
          currentMachinePicked,
          productionCost,
        });

        /* Taking production start time and setting interval (for timers) */
        const startTime = Date.now();
        const interval = 990;

        /* productionEndHandler is called by setTimeout after timer reaches 0 */
        const productionEndHandler = () => {
          /* bool is used to set machine worksState */
          bool = false;

          /* == START == */
          /* Used only for returning player money and material on page refreshe since there's no server yet */
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
          /* == END == */

          /* set new materialQuantity and machine worksState in redux state */
          props.setMaterialQuantityUp(playerReceivedMaterialAfterProduction);
          props.setMachineState({ bool, currentMachinePicked });

          /* If statement that checks if player fulfilled requirements for new level if yes it calculate new level and nev levelCap.
            Than it sets those values to redux state */
          if (
            reduxStateInfo.playerExperience +
              reduxStateInfo.materialGivenExperience * pickedAmount >=
            reduxStateInfo.playerExpToNextLvl
          ) {
            const playerLevelUp = reduxStateInfo.playerLevel + 1;
            const experienceAfterLevelUp = 0;
            const nextLevelCap = Math.pow(2.72, 0.0271 * playerLevelUp) * 17644;
            const levelCapAsInt = Math.trunc(nextLevelCap);
            props.setPlayerLevel(playerLevelUp);
            props.setExperience(experienceAfterLevelUp);
            props.setExperienceToNextLevel(levelCapAsInt);

            /* If player hasn't fulfilled new level requirements it's just changing state of player experience */
          } else {
            props.setExperience(playerReceivedExperience);
          }
        };

        /* setTimeout which determinate end of production */
        setTimeout(productionEndHandler, productionDuration);

        /* timeLeftcalculationHandler is used to calculate displayed timer in Dashboard and productionSettingsPanel */
        const timeLeftCalculationHandler = () => {
          let counter = productionDuration - (Date.now() - startTime);
          if (counter <= 0) {
            counter = 0;
            props.setTime({ counter, currentMachinePicked });
            clearInterval(counterInterval);
          }
          props.setTime({ counter, currentMachinePicked });
        };

        /* counter which shows time to end of production */
        const counterInterval = setInterval(
          timeLeftCalculationHandler,
          interval
        );
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
      reduxStateInfo.playerMachinesArray[pickedProductionMachine].performance;
    reduxStateInfo.machineState =
      reduxStateInfo.playerMachinesArray[pickedProductionMachine].work;
    reduxStateInfo.pickedMachineQuantity =
      reduxStateInfo.playerMachinesArray[pickedProductionMachine].owned;

    /* This line is used for DOM element to display proper amount of machines */
    setCurrentMachinesCount(pickedMachinesAmount);

    function calculateProductionTimeDisplayed() {
      const productionTimeRaw =
        ((reduxStateInfo.materialDurability /
          reduxStateInfo.machinePerformance) *
          pickedAmount) /
        pickedMachinesAmount;
      const productionTimeWithBoost =
        productionTimeRaw -
        productionTimeRaw *
          reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
            .productionTimeBoost;

      const materialFreeSpace =
        reduxStateInfo.magazineMaterialCapacity -
        (reduxStateInfo.playerIronOre -
          reduxStateInfo.playerIronOreConcentrate);

      if (materialFreeSpace < 0) {
        const materialFreeSpaceAsAbs = Math.abs(materialFreeSpace);

        const timeToProductWithPenalty =
          productionTimeWithBoost * materialFreeSpaceAsAbs;

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
        <label htmlFor="amount">Material amount:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          defaultValue={Math.trunc(reduxStateInfo.playerIronOre)}
          min="0"
          max={reduxStateInfo.playerIronOre}
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
              {option.name} -{" "}
              {reduxStateInfo.playerMachinesArray[option.id].owned}
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
          {reduxStateInfo.employeesStateArray.map((employee) => (
            <option
              key={employee.id}
              value={employee.id}
              onClick={changeHandler}
            >
              {employee.name} {employee.name !== "None" && employee.worksCount}
            </option>
          ))}
        </select>
        <Button btnText="Start" />
      </form>
      <span>
        <p>Production cost: {Math.trunc(currentProductionCost)}$</p>
        <p>Production time: {(currentProductionTime / 60).toFixed(2)} min</p>
        <p>
          Time left:{" "}
          {(
            reduxStateInfo.playerMachinesArray[currentMachinePicked]
              .timeDuration / 60000
          ).toFixed(2)}{" "}
          min
        </p>
      </span>
    </div>
  );
}

export default SettingsPanel;
