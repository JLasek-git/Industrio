import React, { useRef, useState } from "react";
import styles from "./StockMarket1.module.scss";
import LinkButton from "../../../common/LinkButton/LinkButton";
import Section from "../../../layout/Section/Section";
import GameWindow from "../../../layout/GameWindow/GameWindow";
import ChangeShopButton from "../../../common/ChangeShopButton/ChangeShopButton";
import Button from "../../../common/Button/Button";

function StockMarket1({ ...props }) {
  const buyingAmount = useRef();
  const [currentBuyingAmount, setCurrentBuyingAmount] = useState(0);

  const handleMaterialBuy = (event) => {
    event.preventDefault();
    const name = "ironOre"
    const pickedAmount = parseInt(buyingAmount.current.value);
    const materialPrice = props.playerInfo.equipment.materials.ironOre.price;
    const buyingCost = materialPrice * pickedAmount;
    const playerMoney = props.playerInfo.money;
    const playerMaterialAmount = props.playerInfo.equipment.materials.ironOre.quantity;
    const playerMoneyAfterBuy = playerMoney - buyingCost;
    const playerMaterialAfterBuy = playerMaterialAmount + pickedAmount;

    if(playerMoneyAfterBuy <= 0){
      alert('You need more money!')
    } else {
      props.setMoney(playerMoneyAfterBuy);
      props.setMaterialQuantityBuy({ playerMaterialAfterBuy, name });
    }
  }

  const changeBuyingAmountHandler = () => {
    const pickedAmount = buyingAmount.current.value;

    setCurrentBuyingAmount(pickedAmount);
  };

  return (
    <Section>
      <GameWindow>
        <ChangeShopButton>
          <LinkButton
            buttonText="Employees"
            iconName="chart-line"
            link="/stockmarket/stockmarket2"
          />
        </ChangeShopButton>
        <div className={styles.material}>
          <form className={styles.buyingForm}>
            <label htmlFor="buyingAmount">
              How much Iron ore you want to buy?
            </label>
            <p>{currentBuyingAmount}</p>
            <input
              type="range"
              name="buyingAmount"
              id="buyingAmount"
              min="1"
              max="600"
              onChange={(event) =>
                changeBuyingAmountHandler(props.playerInfo, event)
              }
              ref={buyingAmount}
            />
            <div onClick={(event) => handleMaterialBuy(event)}>
            <Button btnText="Buy" />
            </div>
          </form>
        </div>
      </GameWindow>
    </Section>
  );
}

export default StockMarket1;
