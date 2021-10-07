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
  };

  const handleBuy = () => {
    const machineQuantity = reduxStateInfo.playerMachineQuantity + 1;
    const allMachinesQuantity = reduxStateInfo.playerAllMachinesQuantity + 1;
    const playerMoneyAfterBuy = reduxStateInfo.playerMoney - machinePrice;

    if (
      playerMoneyAfterBuy >= 0 &&
      reduxStateInfo.playerAllMachinesQuantity <
        reduxStateInfo.playerMagazineCapacity && props.playerInfo.level >= props.playerInfo.equipment.machines[machineStateName].requirement
    ) {
      props.setMachineEqQuantity({
        machineQuantity,
        machineStateName,
      });
      props.setMoney(playerMoneyAfterBuy);
      props.setAllMachinesQuantity(allMachinesQuantity);
      props.setCurrentSuccessText(`You succesfully bought ${machineName}`);
      handleSuccess();
    } else if(props.playerInfo.level < props.playerInfo.equipment.machines[machineStateName].requirement) {
      props.setCurrentAlertText("You do not have the required level to purchase this machine")
      handleError();
    } else {
      props.setCurrentAlertText(
        "You have no money to buy that machine, or no more machines will fit in your magazine."
      );
      handleError();
    }
  };

  const handleSell = () => {
    const machineQuantity = reduxStateInfo.playerMachineQuantity - 1;
    const playerAllMachinesQunatityOnSell =
      reduxStateInfo.playerAllMachinesQuantity - 1;
    const playerMoneyAfterSell = reduxStateInfo.playerMoney + machinePrice / 2;
    if (machineQuantity >= 0) {
      if (!reduxStateInfo.playerMachineState) {
        props.setMachineEqQuantity({
          machineQuantity,
          machineStateName,
        });
        props.setMoney(playerMoneyAfterSell);
        props.setAllMachinesQuantity(playerAllMachinesQunatityOnSell);
        props.setCurrentSuccessText(`You succesfully sold ${machineName}`)
        handleSuccess();
      } else {
        props.setCurrentAlertText(
          "You can't sell machine that's currently working."
        );
        handleError();
      }
    } else {
      props.setCurrentAlertText("You have no machines to sell.");
      handleError();
    }
  };


  return (
    <div className={styles.storeElement}>
      <div className={styles.machinePhotoContainer}>
      <img src={process.env.PUBLIC_URL + `/${machineImg}`} alt={machineStateName} />
      </div>
      <p>{machineName}</p>
      <p>Level required: {machineRequirement}</p>
      <div className={styles.actionHandlers}>
        <div onClick={() => handleBuy()}>
          <ButtonBuy />
        </div>
        <div onClick={() => handleSell()}>
          <ButtonSell />
        </div>
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
  machineRequirement: PropTypes.node,
};

export default StoreMachine;
