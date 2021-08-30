import React, { useState } from "react";
import Section from "../../layout/Section/Section";
import GameWindow from "../../layout/GameWindow/GameWindow";
import Backdrop from "../../common/Backdrop/Backdrop";
import MaterialPanel from "../../layout/MaterialPanel/MaterialPanelContainer";
import MagazineBackground from "../../common/MagazineBackground/MagazineBackgroundContainer";

//SET MONEY WORKS

const Game = () => {
  const [backdrop, isVisible] = useState(false);

  const showProductionSettings = () => {
    isVisible(true);
  };

  const hideProductionSettings = () => {
    isVisible(false);
  };

  return (
    <Section>
      <GameWindow>
        <MaterialPanel />
        <MagazineBackground showProductionSettings={showProductionSettings} />
        {backdrop && <Backdrop hideProductionSettings={hideProductionSettings} />}
      </GameWindow>
    </Section>
  );
};

export default Game;
