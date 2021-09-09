import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ShopElement.module.scss";
import ButtonBuy from "../../../../common/ButtonBuy/ButtonBuy";
import ButtonSell from "../../../../common/ButtonSell/ButtonSell";

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
  /* All functions for buying materials */
  function calculateMaxPlayerCanBuy() {
    return reduxStateInfo.playerMoney / materialPrice;
  }

  function calculateBuyingCost(pickedAmount) {
    return materialPrice * pickedAmount;
  }

  function calculatePlayerMoneyAfterBuy(buyingCost) {
    return reduxStateInfo.playerMoney - buyingCost;
  }

  function calculatePlayerMaterialAfterBuy(pickedAmount) {
    return reduxStateInfo.playerMaterialAmount + pickedAmount;
  }

  const handleShopActionBuy = (event) => {
    event.preventDefault();
    const pickedAmount = parseInt(buyingAmount.current.value);
    const buyingCost = calculateBuyingCost(pickedAmount);
    const playerMoneyAfterAction = calculatePlayerMoneyAfterBuy(buyingCost);
    const playerMaterialAfterAction =
      calculatePlayerMaterialAfterBuy(pickedAmount);

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

  /* All functions for selling materials  */
  function calculateItemsWorth(pickedAmount) {
    return materialPrice * pickedAmount;
  }

  function calculatePlayerMoneyAfterSell(sellingItemsWorth) {
    return reduxStateInfo.playerMoney + sellingItemsWorth;
  }

  function calculatePlayerMaterialAfterSell(pickedAmount) {
    return reduxStateInfo.playerMaterialAmount - pickedAmount;
  }

  const handleShopActionSell = (event) => {
    event.preventDefault();
    const pickedAmount = sellingAmount.current.value;

    const sellingItemsWorth = calculateItemsWorth(pickedAmount);
    const playerMoneyAfterAction =
      calculatePlayerMoneyAfterSell(sellingItemsWorth);
    const playerMaterialAfterAction =
      calculatePlayerMaterialAfterSell(pickedAmount);

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
            max={calculateMaxPlayerCanBuy()}
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
