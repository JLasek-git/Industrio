import React from "react";
import Section from "../../layout/Section/Section";
import GameWindow from "../../layout/GameWindow/GameWindow";
import styles from "./Game.module.scss";
import image from "../../../images/mockupPhoto.jpg";
import ProfilePanel from "../../layout/ProfilePanel/ProfilePanel";

const Game = () => (
  <Section>
    <GameWindow>
      <img src={image} alt="FactoryView" />
    </GameWindow>
  </Section>
);

export default Game;
