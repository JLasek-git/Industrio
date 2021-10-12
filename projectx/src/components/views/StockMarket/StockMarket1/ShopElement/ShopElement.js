import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ShopElement.module.scss";
import ButtonBuy from "../../../../common/ButtonBuy/ButtonBuy";
import ButtonSell from "../../../../common/ButtonSell/ButtonSell";
import { currencyFormat } from "../../../../utils/utils";

import {
  calculateBuyingCost,
  calculateItemsWorth,
  calculateMaxPlayerCanBuy,
  calculatePlayerMaterialAfterBuy,
  calculatePlayerMaterialAfterSell,
  calculatePlayerMoneyAfterBuy,
  calculatePlayerMoneyAfterSell,
  calculatePlayerWholeMaterialInMagazine,
} from "./ShopElementUtils";

function ShopElement({
  materialStateName,
  materialDisplayName,
  materialPrice,
  handleError,
  handleSuccess,
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
    const playerWholeMaterialInMagazine =
      calculatePlayerWholeMaterialInMagazine(
        props.playerInfo.equipment.materials.ironOre.quantity,
        props.playerInfo.equipment.materials.ironOreConcentrate.quantity
      );

    if (playerMoneyAfterAction < 0) {
      props.setCurrentAlertText("You need more money!");
      handleError();
    } else if (
      playerWholeMaterialInMagazine + pickedAmount >
      props.playerInfo.magazine.poorMagazine.materialCapacity
    ) {
      props.setCurrentAlertText("You don't have enough storage space!");
      handleError();
    } else {
      props.setMoney(playerMoneyAfterAction);
      props.setMaterialQuantityBuy({
        playerMaterialAfterAction,
        materialStateName,
      });
      props.setCurrentSuccessText(
        `You sucessfully bought ${pickedAmount} tons of ${materialDisplayName}.`
      );
      handleSuccess();
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
      props.setCurrentAlertText("You don't have that much material in stock!");
      handleError();
    } else {
      props.setMoney(playerMoneyAfterAction);
      props.setMaterialQuantityBuy({
        playerMaterialAfterAction,
        materialStateName,
      });
      props.setCurrentSuccessText(
        `You successfully sold ${pickedAmount} tons of ${materialDisplayName}.`
      );
      handleSuccess();
    }
  };

  /* Handlers which allow to display buying amount and selling amount and costs at form */
  const changeBuyingAmountHandler = () => {
    const pickedAmount = parseInt(buyingAmount.current.value);

    setCurrentBuyingCost(currencyFormat(pickedAmount * materialPrice));
    setCurrentBuyingAmount(pickedAmount);
  };

  const changeSellingAmountHandler = () => {
    const pickedAmount = parseInt(sellingAmount.current.value);
    const sellingIncome = currencyFormat(
      pickedAmount * materialPrice - pickedAmount * materialPrice * 0.2
    );
    setCurrentSellingIncome(sellingIncome);
    setCurrentSellingAmount(pickedAmount);
  };

  /* Main component */
  return (
    <div className={styles.stockMarketElementContainer}>
      <h1>{materialDisplayName}</h1>
      <form className={styles.stockMarketContentWrapper}>
        <div className={styles.formContent}>
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
        <div className={styles.formContent}>
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
            <p>Price: ${materialPrice - materialPrice * 0.2} / 1t</p>
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
  handleSuccess: PropTypes.func,
  handleError: PropTypes.func,
};

export default ShopElement;
