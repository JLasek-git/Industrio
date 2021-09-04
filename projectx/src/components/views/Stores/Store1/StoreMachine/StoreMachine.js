import React from "react";
import PropTypes from "prop-types";
import styles from "./StoreMachine.module.scss";
import Button from "../../../../common/Button/Button";

function StoreMachine({ machineImg, machineStateName, machineName, ...props }) {
  const reduxStateInfo = {
    playerMachineQuantity:
      props.playerInfo.equipment.machines[machineStateName].owned,
    playerMoney: props.playerInfo.money,
    machineCost: props.playerInfo.equipment.machines[machineStateName].price,
  };
  const handleBuy = () => {
    const machineQuantity = reduxStateInfo.playerMachineQuantity + 1;
    const playerMoneyAfterBuy =
      reduxStateInfo.playerMoney - reduxStateInfo.machineCost;

    if (playerMoneyAfterBuy >= 0) {
      props.setMachineEqQuantity({
        machineQuantity,
        machineStateName,
      });
      props.setMoney(playerMoneyAfterBuy);
    } else {
      alert("You don't have enough money to buy this machine.");
    }
  };

  return (
    <div className={styles.singleMachine}>
      <img src={machineImg} alt={machineStateName} />
      <div onClick={() => handleBuy()}>
        <Button btnText={machineName} />
      </div>
      <p>Price: ${reduxStateInfo.machineCost}</p>
    </div>
  );
}

StoreMachine.propTypes = {
  machineImg: PropTypes.string,
  machineStateName: PropTypes.string,
  machineName: PropTypes.node,
};

export default StoreMachine;
