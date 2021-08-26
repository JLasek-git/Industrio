import React from "react";
import styles from "./StockMarket1.module.scss";
import LinkButton from "../../../common/LinkButton/LinkButton";
import Section from "../../../layout/Section/Section";
import GameWindow from "../../../layout/GameWindow/GameWindow";
import ChangeShopButton from "../../../common/ChangeShopButton/ChangeShopButton";

const StockMarket1 = () => (
  <Section>
    <GameWindow>
      <ChangeShopButton>
        <LinkButton
          buttonText="Employees"
          iconName="chart-line"
          link="/stockmarket/stockmarket2"
        />
      </ChangeShopButton>
      <h1>Materials market view</h1>
    </GameWindow>
  </Section>
);

export default StockMarket1;
