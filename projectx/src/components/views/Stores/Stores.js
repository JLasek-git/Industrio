import React from "react";
import LinkButton from "../../common/LinkButton/LinkButton";
import Section from "../../layout/Section/Section";
import GameWindow from "../../layout/GameWindow/GameWindow";
import styles from "./Store.module.scss";


const Stores = () => (
  <Section>
    <GameWindow>
      <LinkButton
        buttonText="Machines"
        iconName="shopping-basket"
        link="/stores/store1"
      />
      <LinkButton
        buttonText="Buildings"
        iconName="shopping-basket"
        link="/stores/store2"
      />
    </GameWindow>
  </Section>
);

export default Stores;
