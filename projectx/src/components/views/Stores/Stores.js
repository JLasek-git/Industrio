import React from "react";
import Button from "../../common/Button/Button";
import Section from "../../layout/Section/Section";
import GameWindow from "../../layout/GameWindow/GameWindow";
import styles from "./Store.module.scss";

const Stores = () => (
  <Section>
    <GameWindow>
      <Button
        buttonText="Machines"
        iconName="shopping-basket"
        link="/stores/store1"
      />
      <Button
        buttonText="Buildings"
        iconName="shopping-basket"
        link="/stores/store2"
      />
    </GameWindow>
  </Section>
);

export default Stores;
