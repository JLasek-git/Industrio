import React from "react";
import styles from "./StockMarket1.module.scss";
import LinkButton from "../../../common/LinkButton/LinkButton";
import Section from "../../../layout/Section/Section";
import GameWindow from "../../../layout/GameWindow/GameWindow";
import ChangeShopButton from "../../../common/ChangeShopButton/ChangeShopButton";
import ShopElement from "./ShopElement/ShopElement";

function StockMarket1({ ...props }) {
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
        <div className={styles.materialShopList}>
          <ShopElement
            materialStateName="ironOre"
            materialDisplayName="Iron ore"
            {...props}
          />
          <ShopElement
            materialStateName="ironOreConcentrate"
            materialDisplayName="Iron ore concentrate"
            {...props}
          />
        </div>
      </GameWindow>
    </Section>
  );
}

export default StockMarket1;
