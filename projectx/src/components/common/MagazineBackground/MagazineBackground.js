import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./MagazineBackground.module.scss";
import magazineImg from "../../../images/magazyn_1.png";
import MachineMiniature from "../../common/MachineMiniature/MachineMiniature";
import machineImg from "../../../images/inpact_hitter_1.png";

function MagazineBackground({ ...props }) {
  //   const reduxStateInfo = {
  //     machinesInMagazineState:
  //       props.playerInfo.magazine.poorMagazine.machinePlaces,
  //     playerMachinesInEquipment:
  //       props.playerInfo.equipment.machines.impactCrusher.owned,
  //     playerMachinesInMagazine:
  //       props.playerInfo.magazine.poorMagazine.machinesQuantity,
  //   };

  //   const machineStateName = "impactCrusher";

  //   const playerMachinesInEquipment =
  //     props.playerInfo.equipment.machines.impactCrusher.owned;
  //   const playerMachinesInMagazine =
  //     props.playerInfo.magazine.poorMagazine.machinesQuantity;
  //   /* This function allow us to place machine in squares */
  //   function machinePlaceHandleClick(event) {
  //     event.preventDefault();
  //     const clickedElementId = event.currentTarget.lastChild.id;

  //     if (
  //       reduxStateInfo.machinesInMagazineState[clickedElementId] === "" &&
  //       playerMachinesInEquipment !== 0
  //     ) {
  //       const createdElement = (
  //         <MachineMiniature source={machineImg} altText="impact-hitter" />
  //       );
  //       const machineQuantity = playerMachinesInEquipment - 1;
  //       const quantityInMagazine = playerMachinesInMagazine + 1;

  //       props.setMachinePlace({ createdElement, clickedElementId });
  //       props.setMachineEqQuantity({ machineQuantity, machineStateName });
  //       props.setMachineInMagazineQuantity(quantityInMagazine);
  //     } else if (
  //       reduxStateInfo.machinesInMagazineState[clickedElementId] === "" &&
  //       playerMachinesInEquipment <= 0
  //     ) {
  //       alert(
  //         "You don't have that machine in your equipment. First you have to buy one."
  //       );
  //     }
  //   }

  //   function renderMachinesIcons() {
  //     for (let place in reduxStateInfo.machinesInMagazineState) {
  //       const machineContainer = document.getElementById(`${place}`);
  //       ReactDOM.render(
  //         <div onClick={props.showProductionSettings}>
  //           {reduxStateInfo.machinesInMagazineState[place].createdElement}
  //         </div>,
  //         machineContainer
  //       );
  //     }
  //   }

  //   useEffect(() => {
  //     renderMachinesIcons();
  //   });

  return (
    <div className={styles.background}>
      Magazine View
      {/* <img src={magazineImg} alt="magazine" />
      <div className={styles.machinePlacement}>
        <div className={styles.machinePlacementUp}>
          <div
            className={styles.machinePlacement1}
            onClick={machinePlaceHandleClick}
          >
            <div id="place1" className={styles.machineButton}></div>
          </div>
          <div
            className={styles.machinePlacement2}
            onClick={machinePlaceHandleClick}
          >
            <div id="place2" className={styles.machineButton}></div>
          </div>
          <div
            className={styles.machinePlacement3}
            onClick={machinePlaceHandleClick}
          >
            <div id="place3" className={styles.machineButton}></div>
          </div>
        </div>
        <div className={styles.machinePlacementDown}>
          <div
            className={styles.machinePlacement4}
            onClick={machinePlaceHandleClick}
          >
            <div id="place4" className={styles.machineButton}></div>
          </div>
          <div
            className={styles.machinePlacement5}
            onClick={machinePlaceHandleClick}
          >
            <div id="place5" className={styles.machineButton}></div>
          </div>
          <div
            className={styles.machinePlacement6}
            onClick={machinePlaceHandleClick}
          >
            <div id="place6" className={styles.machineButton}></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default MagazineBackground;
