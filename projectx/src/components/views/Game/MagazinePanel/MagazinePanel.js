import React from "react";
import styles from "./MagazinePanel.module.scss";
import { currencyFormat } from "../../../utils/utils";

function MaterialPanel({ ...props }) {
  /* save redux state values to reduxStateInfo object for shorter names and easier changes */
  const reduxStateInfo = {
    magazineMachineCapacity:
      props.playerInfo.magazine.poorMagazine.machinesCapacity,
    ownedMachinesQuantity:
      props.playerInfo.equipment.machines.allMachinesQuantity,
    magazineMaterialCapacity:
      props.playerInfo.magazine.poorMagazine.materialCapacity,
  };

  /* calculateFreePlaces calculate how many free places for machines in magazine left */
  function calculateFreePlaces() {
    const freePlaces =
      reduxStateInfo.magazineMachineCapacity -
      reduxStateInfo.ownedMachinesQuantity;

    return freePlaces;
  }

  /* calculateFreeMaterialSpace calculate free material space */
  function calculateFreeMaterialSpace() {
    const freeSpace =
      reduxStateInfo.magazineMaterialCapacity -
      (props.playerInfo.equipment.materials.ironOre.quantity +
        props.playerInfo.equipment.materials.ironOreConcentrate.quantity);

    return freeSpace;
  }

  return (
    <div className={styles.dashboardInfoContainer}>
      <h1>Magazine</h1>
      <p>
        Free material space:{" "}
        {currencyFormat(Math.trunc(calculateFreeMaterialSpace()))}t
      </p>
      <p>Free machine places: {calculateFreePlaces()}</p>
      <div className={styles.dashboardInfoElement}>
        <h2>Materials</h2>
        <span>
          Iron ore:{" "}
          <span className={styles.materialNumber}>
            {Math.floor(props.playerInfo.equipment.materials.ironOre.quantity)}t
          </span>
        </span>
        <span>
          Iron ore concentrate:{" "}
          <span className={styles.materialNumber}>
            {Math.floor(
              props.playerInfo.equipment.materials.ironOreConcentrate.quantity
            )}
            t
          </span>
        </span>
        <h3>Machines</h3>
        <span>
          Impact Crusher:{" "}
          <span className={styles.materialNumber}>
            {" "}
            {props.playerInfo.equipment.machines.impactCrusher.owned}
          </span>
        </span>
        <span>
          Jaw Crusher:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.machines.jawCrusher.owned}
          </span>
        </span>
        <span>
          Cone Crusher:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.machines.coneCrusher.owned}
          </span>
        </span>
        <span>
          Hammer Crusher:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.machines.hammerCrusher.owned}
          </span>
        </span>
        <span>
          Ball Drum Mill:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.machines.ballDrumMill.owned}
          </span>
        </span>
        <span>
          Rod Drum Mill:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.machines.rodDrumMill.owned}
          </span>
        </span>
        <span>
          Drum Screen:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.machines.drumScreen.owned}
          </span>
        </span>
        <span>
          Magnetic Separator:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.machines.magneticSeparator.owned}
          </span>
        </span>
      </div>
    </div>
  );
}

export default MaterialPanel;
