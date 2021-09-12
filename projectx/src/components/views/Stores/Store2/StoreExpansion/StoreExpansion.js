import React from "react";
import PropTypes from "prop-types";
import styles from "./StoreExpansion.module.scss";
import ButtonBuy from "../../../../common/ButtonBuy/ButtonBuy";
function StoreExpansion({ name, improvement, cost, ...props }) {
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
      alert("You don't have money to buy this expansion");
    } else {
      props.setMoney(playerMoneyAfterBuy);
      props.setMagazineCapacity(playerMachinesCapacityAfterBuy);
    }
  };

  return (
    <div className={styles.singleExpansion}>
      <p className={styles.expansionName}>{name}</p>
      <div
        className={styles.actionHandler}
        onClick={(event) => handleBuy(event)}
      >
        <ButtonBuy />
      </div>
      <div className={styles.descriptions}>
        <p>Additional places: {improvement}</p>
        <p>Cost: ${cost}</p>
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
