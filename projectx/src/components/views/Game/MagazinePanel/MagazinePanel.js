import React from "react";
import styles from "./MagazinePanel.module.scss";

function MaterialPanel({ ...props }) {
  function calculateFreePlaces() {
    const freePlaces =
      props.playerInfo.magazine.poorMagazine.machinesCapacity -
      props.playerInfo.equipment.machines.allMachinesQuantity;

    return freePlaces;
  }

  return (
    <div className={styles.materialsContainer}>
      <h1>Magazine</h1>
      <p>Free machine places: {calculateFreePlaces()}</p>
      <div className={styles.materialsInfo}>
        <h2>Materials</h2>
        <span>
          Iron ore:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.materials.ironOre.quantity.toFixed(1)}t
          </span>
        </span>
        <span>
          Iron ore concentrate:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.materials.ironOreConcentrate.quantity.toFixed(
              1
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
