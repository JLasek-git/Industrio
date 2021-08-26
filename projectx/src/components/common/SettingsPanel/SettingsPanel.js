import React, { useRef, useState } from "react";
import styles from "./SettingsPanel.module.scss";
import Icon from "../Icon/Icon";
import Button from "../../common/Button/Button";
import { setTime } from "../../../redux/playerRedux";

function SettingsPanel(props) {
  const amountValue = useRef();

  /* state used only in form */
  const [currentMaterialValue, setCurrentValue] = useState(1);
  const [currentProductionCost, setCurrentCost] = useState(0);
  const [currentProductionTime, setCurrentTime] = useState(0);

  function submitHandler(playerInfo, event) {
    event.preventDefault();

    /* saving object properties to variables and const depending on purpose */
    const playerUsedEquipmentMaterialQuantity =
      playerInfo.equipment.materials.ironOre.quantity;
    const playerReceivedEquipmentMaterialQuantity =
      playerInfo.equipment.materials.ironOreConcentrate.quantity;
    const playerMoney = playerInfo.money;
    const singleProductionCost =
      playerInfo.equipment.materials.ironOre.productionCost;
    const materialDurability =
      playerInfo.equipment.materials.ironOre.durability;
    const machinePerformance =
      playerInfo.equipment.machines.impactCrusher.performance;
    const machineState = playerInfo.equipment.machines.impactCrusher.work;

    /* this part of code handle work start, and changing state depending on passed parameters (changing quantity of player material (how much he will be given), taking costs of work) */
    if (!machineState) {
      props.setMachineState(true);

      /* this defines our pickedAmount on input and parses to int*/
      const pickedAmount = parseInt(amountValue.current.value);

      /* calculations passed to state depending on props */
      const wholeProductionCost = pickedAmount * singleProductionCost;
      const playerMoneyAfterProduction = playerMoney - wholeProductionCost;
      const playerReceivedMaterialAfterProduction =
        playerReceivedEquipmentMaterialQuantity + pickedAmount;
      const playerUsedMaterialAfterProduction =
        playerUsedEquipmentMaterialQuantity - pickedAmount;
      const productionDuration =
        (materialDurability / machinePerformance) * 1000 * pickedAmount;

      let counter = productionDuration;

      /* if whole production cost which depends on calculation playerActualMoney - productionCosts is less than 0 it means player don't have enough money to proceed*/
      if (
        playerMoneyAfterProduction < 0 ||
        playerUsedMaterialAfterProduction < 0
      ) {
        alert("You do not have sufficient materials or funds for production.");
        props.setMachineState(false);
      } else {
        props.setMaterialQuantityDown(playerUsedMaterialAfterProduction);
        props.setMoney(playerMoneyAfterProduction);

        setTimeout(() => {
          /* here we're passing changed values to reducer. Values are calculated before set timeout function. In this part of code, we only changing them in Redux state */
          props.setMaterialQuantityUp(playerReceivedMaterialAfterProduction);
          props.setMachineState(false);
        }, productionDuration);

        /* counter which shows time to end of production */
        const counterInterval = setInterval(() => {
          counter -= 1000;
          props.setTime(counter);
          if (counter == 0) {
            clearInterval(counterInterval);
          }
        }, 1000);
      }

      /* if machine is still working player can't start second work*/
    } else {
      alert("Machine is still working!");
    }
  }

  /* Handler for range form, which allow us to show currentCost, currentAmount of items and currentTime to produce*/

  function changeHandler(playerInfo, event) {
    event.preventDefault();

    const singleProductionCost =
      playerInfo.equipment.materials.ironOre.productionCost;
    const pickedAmount = amountValue.current.value;
    const materialDurability =
      playerInfo.equipment.materials.ironOre.durability;
    const machinePerformance =
      playerInfo.equipment.machines.impactCrusher.performance;

    const timeToProduct =
      (materialDurability / machinePerformance) * pickedAmount;
    const costToProduct = pickedAmount * singleProductionCost;
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
        onSubmit={(event) => submitHandler(props.playerInfo, event)}
      >
        <label htmlFor="amount">
          How many you want to use?
          <p>{currentMaterialValue}</p>
        </label>
        <input
          type="range"
          name="amount"
          id="amount"
          min="1"
          max="1000"
          onChange={(event) => changeHandler(props.playerInfo, event)}
          ref={amountValue}
        />
        <Button btnText="Start" />
      </form>
      <span>
        <p>It will cost you: {currentProductionCost}$</p>
        <p>It will take: {currentProductionTime / 60} min</p>
        <p>
          Time left:{" "}
          {(
            props.playerInfo.equipment.machines.impactCrusher.timeDuration /
            60000
          ).toFixed(1)}{" "}
          min
        </p>
      </span>
    </div>
  );
}

export default SettingsPanel;
