import React from "react";
import styles from "./StockMarket2.module.scss";
import LinkButton from "../../../common/LinkButton/LinkButton";
import Section from "../../../layout/Section/Section";
import GameWindow from "../../../layout/GameWindow/GameWindow";
import ChangeShopButton from "../../../common/ChangeShopButton/ChangeShopButton";

const StockMarket2 = () => (
  <Section>
    <ChangeShopButton>
      <LinkButton
        buttonText="Materials"
        iconName="chart-line"
        link="/stockmarket/stockmarket1"
      />
    </ChangeShopButton>
    <GameWindow>
      <h1>Employees market view</h1>
    </GameWindow>
  </Section>
);

export default StockMarket2;
