import React, { useRef, useState, useEffect } from "react";
import styles from "./SettingsPanel.module.scss";
import Icon from "../../../../common/Icon/Icon";
import Button from "../../../../common/Button/Button";
import MACHINES from "../../../../../data/machinesPreTreatment.json";

function SettingsPanel(props) {
  const amountValue = useRef();
  const machinesCount = useRef();
  const machineType = useRef();

  

  /* state used only in form */
  const [currentMaterialValue, setCurrentValue] = useState(1);
  const [currentProductionCost, setCurrentCost] = useState(0);
  const [currentProductionTime, setCurrentTime] = useState(0);
  const [currentMachinePicked, setCurrentMachinePicked] =
  useState("impactCrusher");
  const [currentMachinesCount, setCurrentMachinesCount] = useState(1);

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
  };

  function calculateProductionCost(pickedAmount, pickedMachinesAmount) {
    return (
      pickedAmount * reduxStateInfo.singleProductionCost * pickedMachinesAmount
    );
  }

  function claculatePlayerMoneyAfter(wholeProductionCost) {
    return reduxStateInfo.playerMoney - wholeProductionCost;
  }

  function calculateMaterialReceived(pickedAmount) {
    let materialInEqAfterProduction = 0;
    materialInEqAfterProduction +=
      pickedAmount + reduxStateInfo.playerEqReceivedMaterialQuantity;
    for (let machine in props.playerInfo.equipment.machines) {
      if (
        machine !== "allMachinesQuantity" &&
        machine !== currentMachinePicked
      ) {
        materialInEqAfterProduction +=
          props.playerInfo.equipment.machines[machine].materialFromProduction;
      }
    }
    return materialInEqAfterProduction;
  }

  function calculateMaterialUsed(pickedAmount) {
    return reduxStateInfo.playerEqUsedMaterialQuantity - pickedAmount;
  }

  function calculateDuration(pickedAmount, pickedMachinesAmount) {
    return (
      ((reduxStateInfo.materialDurability / reduxStateInfo.machinePerformance) *
        1000 *
        pickedAmount) /
      pickedMachinesAmount
    );
  }

  function calculateReceivedExp(pickedAmount) {
    return (
      reduxStateInfo.materialGivenExperience * pickedAmount +
      reduxStateInfo.playerExperience
    );
  }

  function submitHandler(event) {
    event.preventDefault();

    /* this part of code handle work start, and changing state depending on passed parameters (changing quantity of player material (how much he will be given), taking costs of work) */
    if (!reduxStateInfo.currentMachineState) {
      /* this defines our pickedAmount on input and parses to int*/
      const pickedAmount = parseInt(amountValue.current.value);
      const pickedMachinesAmount = parseInt(machinesCount.current.value);

      /* This line allow us to properly add materials for player production */
      let amountAfter = pickedAmount;
      props.setMaterialReceivedFromProduction({
        amountAfter,
        currentMachinePicked,
      });
      /* calculations passed to state depending on props */
      const wholeProductionCost = calculateProductionCost(
        pickedAmount,
        pickedMachinesAmount
      );

      const playerMoneyAfterProduction =
        claculatePlayerMoneyAfter(wholeProductionCost);
      const playerReceivedMaterialAfterProduction =
        calculateMaterialReceived(pickedAmount);

      const playerUsedMaterialAfterProduction =
        calculateMaterialUsed(pickedAmount);
      const productionDuration = calculateDuration(
        pickedAmount,
        pickedMachinesAmount
      );
      const playerReceivedExperience = calculateReceivedExp(pickedAmount);

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
      }  else {
        let bool = true;
        props.setMaterialQuantityDown(playerUsedMaterialAfterProduction);
        props.setMoney(playerMoneyAfterProduction);
        props.setMachineState({ bool, currentMachinePicked });
        props.setAmountMachinesWorking({ pickedMachinesAmount, currentMachinePicked })

        setTimeout(() => {
          /* here we're passing changed values to reducer. Values are calculated before set timeout function. In this part of code, we only changing them in Redux state */
          bool = false;
          amountAfter = 0;
          props.setMaterialReceivedFromProduction({
            amountAfter,
            currentMachinePicked,
          });

          props.setMaterialQuantityUp(playerReceivedMaterialAfterProduction);
          props.setExperience(playerReceivedExperience);
          props.setMachineState({ bool, currentMachinePicked });
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
      alert("Machine is still working.")
    }

    /* if machine is still working player can't start second work*/
  }

  /* Handler for range form, which allow us to show currentCost, currentAmount of items and currentTime to produce*/

  function changeHandler() {
    const pickedAmount = amountValue.current.value;
    const pickedMachinesAmount = machinesCount.current.value;
    const pickedProductionMachine = machineType.current.value;

    setCurrentMachinePicked(pickedProductionMachine);

    reduxStateInfo.machinePerformance =
      props.playerInfo.equipment.machines[pickedProductionMachine].performance;
    reduxStateInfo.machineState =
      props.playerInfo.equipment.machines[pickedProductionMachine].work;
    reduxStateInfo.pickedMachineQuantity =
      props.playerInfo.equipment.machines[pickedProductionMachine].owned;

      /* This line is used for DOM element to display porper amount of machines */
      setCurrentMachinesCount(pickedMachinesAmount);
    // console.log(props.playerInfo.equipment.machines[pickedProductionMachine]);
    const timeToProduct = (
      ((reduxStateInfo.materialDurability / reduxStateInfo.machinePerformance) *
        pickedAmount) /
      pickedMachinesAmount
    ).toFixed(1);
    const costToProduct =
      pickedAmount * reduxStateInfo.singleProductionCost * pickedMachinesAmount;
    setCurrentValue(pickedAmount);
    setCurrentCost(costToProduct);
    setCurrentTime(timeToProduct);
  }

  useEffect(() => {
    changeHandler();
  }, []);

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
          How much Iron ore you want to use?
          <p>{props.playerInfo.equipment.materials.ironOre.quantity > 0 ? currentMaterialValue : "0"}</p>
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
        <label htmlFor="machineType">
          Which machine you would like to use?
        </label>
        <select
          name="machineType"
          id="machineType"
          onClick={changeHandler}
          defalutValue="impactCrusher"
          ref={machineType}
        >
          {MACHINES.map((option) => (
            <option key={option.id} value={option.id} onClick={changeHandler}>
              {option.name}
            </option>
          ))}
        </select>
        <label htmlFor="machinesCount">
          How many machines you would like to include in production?
          <p>{ reduxStateInfo.pickedMachineQuantity > 0 ? currentMachinesCount : "0"}</p>
        </label>
        <input
          type="range"
          name="machinesCount"
          id="machinesCount"
          defaultValue="0"
          min="1"
          max={reduxStateInfo.pickedMachineQuantity}
          onChange={changeHandler}
          ref={machinesCount}
        />
        <Button btnText="Start" />
      </form>
      <span>
        <p>It will cost you: {currentProductionCost}$</p>
        <p>It will take: {(currentProductionTime / 60).toFixed(2)} min</p>
        <p>
          Time left:{" "}
          {(
            props.playerInfo.equipment.machines[currentMachinePicked].timeDuration /
            60000
          ).toFixed(2)}{" "}
          min
        </p>
      </span>
    </div>
  );
}

export default SettingsPanel;
