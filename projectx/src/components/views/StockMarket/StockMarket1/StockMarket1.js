import React, { useRef, useState } from "react";
import styles from "./StockMarket1.module.scss";
import LinkButton from "../../../common/LinkButton/LinkButton";
import Section from "../../../layout/Section/Section";
import GameWindow from "../../../layout/GameWindow/GameWindow";
import ChangeShopButton from "../../../common/ChangeShopButton/ChangeShopButton";

function StockMarket1({ ...props }) {
  const buyingAmount = useRef();
  const [currentBuyingAmount, setCurrentBuyingAmount] = useState(0);
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
          <form>
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
          </form>
        </div>
      </GameWindow>
    </Section>
  );
}

export default StockMarket1;
