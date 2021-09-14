import React, { useRef, useState } from "react";
import styles from "./SettingsPanel.module.scss";
import Icon from "../../../../common/Icon/Icon";
import Button from "../../../../common/Button/Button";
import MACHINES from "../../../../../data/machinesPreTreatment.json";
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
  const [currentMaterialValue, setCurrentValue] = useState(1);
  const [currentProductionCost, setCurrentCost] = useState(0);
  const [currentProductionTime, setCurrentTime] = useState(0);
  const [currentMachinePicked, setCurrentMachinePicked] =
    useState("impactCrusher");
  const [currentMachinesCount, setCurrentMachinesCount] = useState(1);
  const [currentSupervisor, setCurrentSupervisor] = useState(
    props.playerInfo.employees[0].id
  );

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
        reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
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
      /* variable used in setInterval to count duration to end of production*/
      let counter = productionDuration;

      /* if whole production cost which depends on calculation playerActualMoney - productionCosts is less than 0 it means player don't have enough money to proceed*/
      if (
        playerMoneyAfterProduction < 0 ||
        playerUsedMaterialAfterProduction < 0
      ) {
        alert("You do not have sufficient materials or funds for production.");
      } else if (currentMaterialValue <= 0 || currentMachinesCount <= 0) {
        alert(
          "To start production you have to pick amount of material and machines."
        );
      } else if (reduxStateInfo.pickedMachineQuantity < currentMachinesCount) {
        alert("Sorry, you doesn't have that many machines.");
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
          console.log(employees);
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

        setTimeout(() => {
          /* here we're passing changed values to reducer. Values are calculated before set timeout function. In this part of code, we only changing them in Redux state */
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
              reduxStateInfo.materialGivenExperience * pickedAmount >=
            props.playerInfo.toNextLevel
          ) {
            for (
              let level = reduxStateInfo.playerLevel;
              props.playerInfo.experience < props.playerInfo.toNextLevel;
              level++
            ) {
              const playerLevelUp = reduxStateInfo.playerLevel + 1;
              const experienceAfterProduction =
                props.playerInfo.experience + playerReceivedExperience;
              const experienceAfterLevelUp =
                experienceAfterProduction - props.playerInfo.toNextLevel;
              const nextLevelCap =
                props.playerInfo.toNextLevel * playerLevelUp -
                props.playerInfo.toNextLevel * playerLevelUp * 0.3;
              props.setPlayerLevel(playerLevelUp);
              props.setExperience(experienceAfterLevelUp);
              props.setExperienceToNextLevel(nextLevelCap);
            }
          } else {
            props.setExperience(playerReceivedExperience);
          }
          alert("Productions has finished.");
        }, productionDuration);

        /* counter which shows time to end of production */
        const counterInterval = setInterval(() => {
          counter -= 1000;
          if (counter <= 0) {
            clearInterval(counterInterval);
          }
          props.setTime({ counter, currentMachinePicked });
        }, 1000);
      }
    } else {
      alert("Machine is still working.");
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

    const productionTimeRaw =
      ((reduxStateInfo.materialDurability / reduxStateInfo.machinePerformance) *
        pickedAmount) /
      pickedMachinesAmount;
    const productionTimeWithBoost =
      productionTimeRaw -
      productionTimeRaw *
        reduxStateInfo.employeesStateArray[pickedSupervisorIndex]
          .productionTimeBoost;
    const timeToProduct = productionTimeWithBoost.toFixed(1);

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
      <div className={styles.closeBtn} onClick={props.handleClose}>
        <Icon name="times" />
      </div>
      <form
        className={styles.parametersForm}
        onSubmit={(event) => submitHandler(event)}
      >
        <label htmlFor="amount">
          Iron Ore
          <p>
            {props.playerInfo.equipment.materials.ironOre.quantity > 0
              ? currentMaterialValue
              : "0"}
          </p>
        </label>
        <input
          type="range"
          name="amount"
          id="amount"
          defaultValue="0"
          min="1"
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
              {option.name}
            </option>
          ))}
        </select>
        <label htmlFor="machinesCount"></label>
        <input
          type="number"
          name="machinesCount"
          id="machinesCount"
          defaultValue={reduxStateInfo.pickedMachineQuantity}
          min="1"
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
              {employee.name}
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
