import React from "react";
import PropTypes from "prop-types";
import styles from "./StoreMachine.module.scss";
import ButtonBuy from "../../../../common/ButtonBuy/ButtonBuy";
import ButtonSell from "../../../../common/ButtonSell/ButtonSell";
import { currencyFormat } from "../../../../utils/utils";

function StoreMachine({
  machineImg,
  machineStateName,
  machinePrice,
  machineName,
  machineRequirement,
  handleError,
  handleSuccess,
  ...props
}) {
  /* reduxStateInfo is object with state props saved to shorter names */
  const reduxStateInfo = {
    playerMachineQuantity:
      props.playerInfo.equipment.machines[machineStateName].owned,
    playerMoney: props.playerInfo.money,
    playerMagazineCapacity:
      props.playerInfo.magazine.poorMagazine.machinesCapacity,
    playerAllMachinesQuantity:
      props.playerInfo.equipment.machines.allMachinesQuantity,
    playerMachineState:
      props.playerInfo.equipment.machines[machineStateName].work,
    playerLevel: props.playerInfo.level,
  };

  /* handleBuy is called when player clicks on buy button */

  const handleBuy = () => {
    /* calculating bought machineQuantity, allMachinesQuantity and playerMoney in invetory after buying new machine */
    const machineQuantity = reduxStateInfo.playerMachineQuantity + 1;
    const allMachinesQuantity = reduxStateInfo.playerAllMachinesQuantity + 1;
    const playerMoneyAfterBuy = reduxStateInfo.playerMoney - machinePrice;

    /* If statement which checks if player fulfilled requirements to buy new machine such as owned money and magazine space */
    if (
      playerMoneyAfterBuy >= 0 &&
      reduxStateInfo.playerAllMachinesQuantity <
        reduxStateInfo.playerMagazineCapacity &&
      reduxStateInfo.playerLevel >= machineRequirement
    ) {
      /* setMachineEqQuantity sets new machine quantity in redux state after buy */
      props.setMachineEqQuantity({
        machineQuantity,
        machineStateName,
      });

      /* setMoney sets new player money amount in redux state after buy */
      props.setMoney(playerMoneyAfterBuy);
      /* setAllMachinesQuantity sets new amount of all machines in player inventory in redux state */
      props.setAllMachinesQuantity(allMachinesQuantity);
      /* setCurrentSuccessText is current alert text in redux state which is displayed after succesfull buy */
      props.setCurrentSuccessText(`You succesfully bought ${machineName}`);
      handleSuccess();

      /* if player level is lower than level required to buy machine */
    } else if (reduxStateInfo.playerLevel < machineRequirement) {
      /* setCurrentAlertText is current alert text in redux state which is displayed after failed buy */
      props.setCurrentAlertText(
        "You do not have the required level to purchase this machine"
      );
      handleError();
    } else {
      /* setCurrentAlertText is current alert text in redux state which is displayed after failed buy */
      props.setCurrentAlertText(
        "You have no money to buy that machine, or no more machines will fit in your magazine."
      );
      handleError();
    }
  };

  /* handleSell is called when player clicks on sell button */
  const handleSell = () => {
    /* calculating machineQuantity, allMachinesQuantity and playerMoney in invetory after selling  machine */
    const machineQuantity = reduxStateInfo.playerMachineQuantity - 1;
    const playerAllMachinesQunatityOnSell =
      reduxStateInfo.playerAllMachinesQuantity - 1;
    const playerMoneyAfterSell = reduxStateInfo.playerMoney + machinePrice / 2;

    /* IF statement which checks that player have any machine to sell */
    if (machineQuantity >= 0) {
      /* IF statement which checks if machine that player want to sell is currently not working */
      if (!reduxStateInfo.playerMachineState) {
        /* setMachineEqQuantity, setMoney, setAllMachinesQuantity sets new player machine amount and money in redux state*/
        props.setMachineEqQuantity({
          machineQuantity,
          machineStateName,
        });
        props.setMoney(playerMoneyAfterSell);
        props.setAllMachinesQuantity(playerAllMachinesQunatityOnSell);

        /* setCrurentSuccessText sets current success alert box text to display after sucessfull sell */
        props.setCurrentSuccessText(`You succesfully sold ${machineName}`);
        handleSuccess();
      } else {
        /* setCrurentAlertText sets current Alert box text to display after failed sell */
        props.setCurrentAlertText(
          "You can't sell machine that's currently working."
        );
        handleError();
      }
    } else {
      /* setCrurentAlertText sets current Alert box text to display after failed sell */
      props.setCurrentAlertText("You have no machines to sell.");
      handleError();
    }
  };

  return (
    <div className={styles.storeElement}>
      <div className={styles.machinePhotoContainer}>
        <img
          src={process.env.PUBLIC_URL + `/${machineImg}`}
          alt={machineStateName}
        />
      </div>
      <p>{machineName}</p>
      <p>Level required: {machineRequirement}</p>
      <div className={styles.actionHandlers}>
        <ButtonBuy btnFunction={handleBuy} />
        <ButtonSell btnFunction={handleSell} />
      </div>
      <div className={styles.pricesContainer}>
        <p>Buying price: ${currencyFormat(machinePrice)}</p>
        <p>Selling price: ${currencyFormat(machinePrice / 2)}</p>
      </div>
    </div>
  );
}

StoreMachine.propTypes = {
  machineImg: PropTypes.string,
  machineStateName: PropTypes.string,
  machineName: PropTypes.node,
  machinePrice: PropTypes.number,
  handleError: PropTypes.func,
  handleSuccess: PropTypes.func,
  machineRequirement: PropTypes.node,
};

export default StoreMachine;
