import React from "react";
import PropTypes from "prop-types";
import styles from "./StoreMachine.module.scss";
import ButtonBuy from "../../../../common/ButtonBuy/ButtonBuy";
import ButtonSell from "../../../../common/ButtonSell/ButtonSell";

function StoreMachine({
  machineImg,
  machineStateName,
  machinePrice,
  machineName,
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
        reduxStateInfo.playerMagazineCapacity
    ) {
      props.setMachineEqQuantity({
        machineQuantity,
        machineStateName,
      });
      props.setMoney(playerMoneyAfterBuy);
      props.setAllMachinesQuantity(allMachinesQuantity);
    } else {
      alert(
        "You don't have enough money to buy this machine or you have reached the limit of machines in the hall."
      );
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
      } else {
        alert("You can't sell machine that currently works");
      }
    } else {
      alert("You don't have more machines to sell.");
    }
  };

  return (
    <div className={styles.singleMachine}>
      <img src={machineImg} alt={machineStateName} />
      <p>{machineName}</p>
      <div className={styles.actionHandlers}>
        <div onClick={() => handleBuy()}>
          <ButtonBuy />
        </div>
        <div onClick={() => handleSell()}>
          <ButtonSell />
        </div>
      </div>
      <div className={styles.pricesContainer}>
        <p>Buying price: ${machinePrice}</p>
        <p>Selling price: ${machinePrice / 2}</p>
      </div>
    </div>
  );
}

StoreMachine.propTypes = {
  machineImg: PropTypes.string,
  machineStateName: PropTypes.string,
  machineName: PropTypes.node,
  machinePrice: PropTypes.number,
};

export default StoreMachine;
