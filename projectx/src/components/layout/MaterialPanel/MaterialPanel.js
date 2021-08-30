import React from "react";
import styles from "./MaterialPanel.module.scss";

function MaterialPanel(props) {
  return (
    <div className={styles.materialsContainer}>
      <span>
        Iron ore: {props.playerInfo.equipment.materials.ironOre.quantity}
      </span>
      <span>
        Iron ore concentrate:{" "}
        {props.playerInfo.equipment.materials.ironOreConcentrate.quantity}
      </span>
      <span>Material: 0</span>
      <span>Material: 0</span>
    </div>
  );
}

export default MaterialPanel;
