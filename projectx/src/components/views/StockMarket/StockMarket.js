import React from "react";
import LinkButton from "../../common/LinkButton/LinkButton";
import Section from "../../layout/Section/Section";
import styles from "./StockMarket.module.scss";
import GameWindow from "../../layout/GameWindow/GameWindow";

const StockMarket = () => (
  <Section>
    <GameWindow>
      <LinkButton
        buttonText="Materials"
        iconName="chart-line"
        link="/stockmarket/stockmarket1"
      />
      <LinkButton
        buttonText="Employees"
        iconName="chart-line"
        link="/stockmarket/stockmarket2"
      />
    </GameWindow>
  </Section>
);

export default StockMarket;
