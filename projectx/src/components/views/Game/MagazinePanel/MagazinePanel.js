import React from "react";
import styles from "./MagazinePanel.module.scss";

function MaterialPanel({ ...props }) {
  function calculateFreePlaces() {
    const freePlaces =
      props.playerInfo.magazine.poorMagazine.machinesCapacity -
      props.playerInfo.equipment.machines.impactCrusher.owned;

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
            {props.playerInfo.equipment.materials.ironOre.quantity}t
          </span>
        </span>
        <span>
          Iron ore concentrate:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.materials.ironOreConcentrate.quantity}t
          </span>
        </span>
        <span>
          <h3>Machines</h3>
          Impact Crusher:{" "}
          <span className={styles.materialNumber}>
            {props.playerInfo.equipment.machines.impactCrusher.owned}
          </span>
        </span>
      </div>
    </div>
  );
}

export default MaterialPanel;
