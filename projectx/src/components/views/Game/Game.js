import React, { useState } from "react";
import Section from "../../layout/Section/Section";
import GameWindow from "../../layout/GameWindow/GameWindow";
// import styles from "./Game.module.scss";
import Backdrop from "../../common/Backdrop/Backdrop";
// import machineImg from "../../../images/inpact_hitter_1.png";
import MaterialPanel from "../../layout/MaterialPanel/MaterialPanelContainer";
// import MachineMiniature from "../../common/MachineMiniature/MachineMiniature";
import MagazineBackground from "../../common/MagazineBackground/MagazineBackground";

//SET MONEY WORKS

const Game = () => {
  const [backdrop, isVisible] = useState(false);

  const handleClick = () => {
    isVisible(true);
  };

  const handleClose = () => {
    isVisible(false);
  };

  return (
    <Section>
      <GameWindow>
        <MaterialPanel />
        <MagazineBackground handleClick={handleClick} />
        {backdrop && <Backdrop handleClose={handleClose} />}
      </GameWindow>
    </Section>
  );
};

export default Game;
