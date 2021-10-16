import React from "react";
import PropTypes from "prop-types";
import styles from "./StoreExpansion.module.scss";
import ButtonBuy from "../../../../common/ButtonBuy/ButtonBuy";
import { currencyFormat } from "../../../../utils/utils";

function StoreExpansion({
  name,
  improvement,
  cost,
  handleError,
  handleSuccess,
  ...props
}) {
  /* reduxStateInfo is object with saved state props*/
  const reduxStateInfo = {
    playerMoney: props.playerInfo.money,
    magazineCapacity: props.playerInfo.magazine.poorMagazine.machinesCapacity,
  };

  /* Function calculateMoneyAfterBuy calculate new money amount in player inventory after buy */
  const calculateMoneyAfterBuy = () => {
    return reduxStateInfo.playerMoney - cost;
  };

  /* Function calculateMachinesCapacity calculate new machine capacity in player magazine after upgrade */
  const calculateMachinesCapacity = () => {
    return reduxStateInfo.magazineCapacity + improvement;
  };

  /* handleBuy function calls calculateMoneyAfterBuy and calculateMachinesCapacity function after click on Buy button. It also checks
      if players fulfills requirements to buy expansion */

  const handleBuy = (event) => {
    event.preventDefault();
    const playerMoneyAfterBuy = calculateMoneyAfterBuy();
    const playerMachinesCapacityAfterBuy = calculateMachinesCapacity();

    if (playerMoneyAfterBuy < 0) {
      props.setCurrentAlertText(
        "You don't have enough money to buy that expansion."
      );
      handleError();
    } else {
      props.setMoney(playerMoneyAfterBuy);
      props.setMagazineCapacity(playerMachinesCapacityAfterBuy);
      props.setCurrentSuccessText(`You succesfully bought ${name}`);
      handleSuccess();
    }
  };

  return (
    <div className={styles.storeElement}>
      <p className={styles.expansionName}>{name}</p>
      <ButtonBuy btnFunction={(event) => handleBuy(event)} />
      <div className={styles.descriptions}>
        <p>Additional places: {improvement}</p>
        <p>Cost: ${currencyFormat(cost)}</p>
      </div>
    </div>
  );
}

StoreExpansion.propTypes = {
  name: PropTypes.node,
  improvement: PropTypes.node,
  cost: PropTypes.node,
  handleError: PropTypes.func,
  handleSuccess: PropTypes.func,
};
export default StoreExpansion;
