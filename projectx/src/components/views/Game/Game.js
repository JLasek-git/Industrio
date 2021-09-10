import React, { useState } from "react";
import styles from "./Game.module.scss";
import Section from "../../layout/Section/Section";
import MagazinePanel from "./MagazinePanel/MagazinePanelContainer";
import MachinesPanel from "./MachinePanel/MachinesPanelContainer";
import Backdrop from "./Backdrop/Backdrop";
import WorkersPanel from "./WorkersPanel/WorkersPanelContainer";

const Game = ({ ...props }) => {
  const [backdrop, isVisible] = useState(false);

  const productionSettingsBackdrop = () => {
    isVisible(!backdrop);
  };

  return (
    <Section>
      <div className={styles.gameContainer}>
        <MachinesPanel showProductionSettings={productionSettingsBackdrop} />
        <MagazinePanel />
        <WorkersPanel />
        {backdrop && (
          <Backdrop hideProductionSettings={productionSettingsBackdrop} />
        )}
      </div>
    </Section>
  );
};

export default Game;
