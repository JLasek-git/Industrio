import React, { useRef, useState } from "react";
import styles from "./IronOreConcentrate.module.scss";
import Button from "../../../../common/Button/Button";

function IronOre({ ...props }) {
  const buyingAmount = useRef();
  const sellingAmount = useRef();
  const [currentBuyingAmount, setCurrentBuyingAmount] = useState(0);
  const [currentSellingAmount, setCurrentSellingAmount] = useState(0);
  const [currentBuyingCost, setCurrentBuyingCost] = useState(0);
  const [currentSellingIncome, setCurrentSellingIncome] = useState(0);
  /* Changing props to shorter names */
  const playerMoney = props.playerInfo.money;
  const playerMaterialAmount =
    props.playerInfo.equipment.materials.ironOreConcentrate.quantity;
  const materialPrice =
    props.playerInfo.equipment.materials.ironOreConcentrate.price;
  const maxPlayerCanBuy = playerMoney / materialPrice;
  const materialName = "ironOreConcentrate";

  const handleShopActionBuy = (event) => {
    event.preventDefault();
    const pickedAmount = parseInt(buyingAmount.current.value);
    const buyingCost = materialPrice * pickedAmount;
    const playerMoneyAfterAction = playerMoney - buyingCost;
    const playerMaterialAfterAction = playerMaterialAmount + pickedAmount;

    if (playerMoneyAfterAction < 0) {
      alert("You need more money!");
    } else {
      props.setMoney(playerMoneyAfterAction);
      props.setMaterialQuantityBuy({ playerMaterialAfterAction, materialName });
    }
  };

  const handleShopActionSell = (event) => {
    event.preventDefault();
    const pickedAmount = sellingAmount.current.value;

    const sellingItemsWorth = materialPrice * pickedAmount;
    const playerMoneyAfterAction = playerMoney + sellingItemsWorth;
    const playerMaterialAfterAction = playerMaterialAmount - pickedAmount;

    if (playerMaterialAmount <= 0) {
      alert("You don't have that much material in stock!");
    } else {
      props.setMoney(playerMoneyAfterAction);
      props.setMaterialQuantityBuy({ playerMaterialAfterAction, materialName });
    }
  };

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

  return (
    <div className={styles.materialActionsList}>
      <form className={styles.buyingForm}>
        <label htmlFor="buyingAmount">
          How much Iron ore concentrate you want to buy?
        </label>
        <p>{currentBuyingAmount}</p>
        <input
          type="range"
          name="buyingAmount"
          id="buyingAmount"
          min="1"
          max={maxPlayerCanBuy}
          onChange={(event) =>
            changeBuyingAmountHandler(props.playerInfo, event)
          }
          ref={buyingAmount}
        />
        <p>You will pay: $ {currentBuyingCost}</p>
        <div onClick={(event) => handleShopActionBuy(event)}>
          <Button btnText="Buy" />
        </div>
      </form>{" "}
      <form className={styles.buyingForm}>
        <label htmlFor="sellingAmount">
          How much Iron ore concentrate you want to sell?
        </label>
        <p>{currentSellingAmount}</p>
        <input
          type="range"
          name="sellingAmount"
          id="sellingAmount"
          min="1"
          max={playerMaterialAmount}
          onChange={(event) =>
            changeSellingAmountHandler(props.playerInfo, event)
          }
          ref={sellingAmount}
        />
        <p>You will receive: $ {currentSellingIncome}</p>
        <div onClick={(event) => handleShopActionSell(event)}>
          <Button btnText="Sell" />
        </div>
      </form>{" "}
    </div>
  );
}

export default IronOre;
