import React from "react";
import PropTypes from "prop-types";
import styles from "./StoreMachine.module.scss";
import Button from "../../../../common/Button/Button";

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

  return (
    <div className={styles.singleMachine}>
      <img src={machineImg} alt={machineStateName} />
      <p>{machineName}</p>
      <div onClick={() => handleBuy()}>
        <Button btnText="Buy" />
      </div>
      <p>Price: ${machinePrice}</p>
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
