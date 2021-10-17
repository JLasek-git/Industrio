import React, { useState } from "react";
import styles from "./Game.module.scss";
import Section from "../../layout/Section/Section";
import MagazinePanel from "./MagazinePanel/MagazinePanelContainer";
import MachinesPanel from "./MachinePanel/MachinesPanelContainer";
import Backdrop from "./Backdrop/Backdrop";
import WorkersPanel from "./WorkersPanel/WorkersPanelContainer";
import AlertBox from "../../common/AlertBox/AlertBoxContainer";

const Game = ({ ...props }) => {
  const [backdrop, isVisible] = useState(false);
  const [alertBoxIsVisible, setAlertBoxIsVisible] = useState(false);

  function handleError() {
    setAlertBoxIsVisible(!alertBoxIsVisible);
  }
  const productionSettingsBackdrop = () => {
    if (props.playerInfo.equipment.machines.allMachinesQuantity === 0) {
      props.setCurrentAlertText(
        "You have to buy machines in order to start production"
      );
      handleError();
    } else {
      isVisible(!backdrop);
    }
  };

  return (
    <Section>
      {alertBoxIsVisible && <AlertBox handleError={handleError} />}
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
