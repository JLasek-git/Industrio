import React from "react";
import PropTypes from "prop-types";
import styles from "./StoreExpansion.module.scss";
import ButtonBuy from "../../../../common/ButtonBuy/ButtonBuy";
import { currencyFormat } from "../../../../utils/utils";

function StoreExpansion({ name, improvement, cost, handleError, handleSuccess, ...props }) {
  const calculateMoneyAfterBuy = () => {
    return props.playerInfo.money - cost;
  };

  const calculateMachinesCapacity = () => {
    return (
      props.playerInfo.magazine.poorMagazine.machinesCapacity + improvement
    );
  };

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
      props.setCurrentSuccessText(`You succesfully bought ${name}`)
      handleSuccess();
    }
  };

  return (
    <div className={styles.storeElement}>
      <p className={styles.expansionName}>{name}</p>
      <div
        className={styles.actionHandler}
        onClick={(event) => handleBuy(event)}
      >
        <ButtonBuy />
      </div>
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
};
export default StoreExpansion;
