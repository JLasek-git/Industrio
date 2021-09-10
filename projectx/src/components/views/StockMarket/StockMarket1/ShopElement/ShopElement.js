import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ShopElement.module.scss";
import ButtonBuy from "../../../../common/ButtonBuy/ButtonBuy";
import ButtonSell from "../../../../common/ButtonSell/ButtonSell";
import {
  calculateBuyingCost,
  calculateItemsWorth,
  calculateMaxPlayerCanBuy,
  calculatePlayerMaterialAfterBuy,
  calculatePlayerMaterialAfterSell,
  calculatePlayerMoneyAfterBuy,
  calculatePlayerMoneyAfterSell,
} from "./ShopElementUtils";

function ShopElement({
  materialStateName,
  materialDisplayName,
  materialPrice,
  ...props
}) {
  const buyingAmount = useRef();
  const sellingAmount = useRef();
  const [currentBuyingAmount, setCurrentBuyingAmount] = useState(0);
  const [currentSellingAmount, setCurrentSellingAmount] = useState(0);
  const [currentBuyingCost, setCurrentBuyingCost] = useState(0);
  const [currentSellingIncome, setCurrentSellingIncome] = useState(0);
  /* Changing props to shorter names */
  const reduxStateInfo = {
    playerMoney: props.playerInfo.money,
    playerMaterialAmount:
      props.playerInfo.equipment.materials[materialStateName].quantity,
  };

  const handleShopActionBuy = (event) => {
    event.preventDefault();
    const pickedAmount = parseInt(buyingAmount.current.value);
    const buyingCost = calculateBuyingCost(pickedAmount, materialPrice);
    const playerMoneyAfterAction = calculatePlayerMoneyAfterBuy(
      buyingCost,
      reduxStateInfo.playerMoney
    );
    const playerMaterialAfterAction = calculatePlayerMaterialAfterBuy(
      pickedAmount,
      reduxStateInfo.playerMaterialAmount
    );

    if (playerMoneyAfterAction < 0) {
      alert("You need more money!");
    } else {
      props.setMoney(playerMoneyAfterAction);
      props.setMaterialQuantityBuy({
        playerMaterialAfterAction,
        materialStateName,
      });
    }
  };

  const handleShopActionSell = (event) => {
    event.preventDefault();
    const pickedAmount = sellingAmount.current.value;

    const sellingItemsWorth = calculateItemsWorth(pickedAmount, materialPrice);
    const playerMoneyAfterAction = calculatePlayerMoneyAfterSell(
      sellingItemsWorth,
      reduxStateInfo.playerMoney
    );
    const playerMaterialAfterAction = calculatePlayerMaterialAfterSell(
      pickedAmount,
      reduxStateInfo.playerMaterialAmount
    );

    if (reduxStateInfo.playerMaterialAmount <= 0) {
      alert("You don't have that much material in stock!");
    } else {
      props.setMoney(playerMoneyAfterAction);
      props.setMaterialQuantityBuy({
        playerMaterialAfterAction,
        materialStateName,
      });
    }
  };

  /* Handlers which allow to display buying amount and selling amount and costs at form */
  const changeBuyingAmountHandler = () => {
    const pickedAmount = parseInt(buyingAmount.current.value);

    setCurrentBuyingCost(pickedAmount * materialPrice);
    setCurrentBuyingAmount(pickedAmount);
  };

  const changeSellingAmountHandler = () => {
    const pickedAmount = sellingAmount.current.value;

    setCurrentSellingIncome(pickedAmount * materialPrice);
    setCurrentSellingAmount(pickedAmount);
  };

  /* Main component */
  return (
    <div className={styles.materialActionsList}>
      <h1>{materialDisplayName}</h1>
      <form className={styles.buyingForm}>
        <div className={styles.formComponent}>
          <label htmlFor="buyingAmount"></label>
          <p>{currentBuyingAmount}</p>
          <input
            type="range"
            name="buyingAmount"
            id="buyingAmount"
            defaultValue="0"
            min="0"
            max={calculateMaxPlayerCanBuy(
              reduxStateInfo.playerMoney,
              materialPrice
            )}
            onChange={(event) =>
              changeBuyingAmountHandler(props.playerInfo, event)
            }
            ref={buyingAmount}
          />
          <div className={styles.prices}>
            <p>Price: ${materialPrice} / 1t</p>
            <p>Cost: ${currentBuyingCost}</p>
          </div>
          <div onClick={(event) => handleShopActionBuy(event)}>
            <ButtonBuy />
          </div>
        </div>
        <div className={styles.formComponent}>
          <label htmlFor="sellingAmount"></label>
          <p>{currentSellingAmount}</p>
          <input
            type="range"
            name="sellingAmount"
            id="sellingAmount"
            defaultValue="0"
            min="0"
            max={reduxStateInfo.playerMaterialAmount}
            onChange={(event) =>
              changeSellingAmountHandler(props.playerInfo, event)
            }
            ref={sellingAmount}
          />
          <div className={styles.prices}>
            <p>Price: ${materialPrice} / 1t</p>
            <p>Income: ${currentSellingIncome}</p>
          </div>
          <div onClick={(event) => handleShopActionSell(event)}>
            <ButtonSell />
          </div>
        </div>
      </form>{" "}
    </div>
  );
}

ShopElement.propTypes = {
  materialStateName: PropTypes.string,
  materialDisplayName: PropTypes.node,
  materialPrice: PropTypes.number,
};

export default ShopElement;
