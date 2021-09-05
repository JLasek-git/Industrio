import React from "react";
import styles from "./MachinesPanel.module.scss";
import Button from "../../../common/Button/Button";
import PropTypes from "prop-types";

function MachinesPanel({ showProductionSettings, ...props }) {
  const machineWork = props.playerInfo.equipment.machines.impactCrusher.work;
  let color;

  if (!machineWork) {
    color = "red";
  } else {
    color = "green";
  }

  return (
    <div className={styles.machinesContainer}>
      <h1>Pre-treatment</h1>
      <div className={styles.machinesInfo}>
        <div className={styles.singleMachine}>
          Impact crusher:{" "}
          <div
            className={styles.workIndicator}
            style={{ background: color }}
          ></div>
        </div>
      </div>
      <div onClick={showProductionSettings}>
        <Button btnText="Production" />
      </div>
    </div>
  );
}

MachinesPanel.propTypes = {
  showProductionSettings: PropTypes.func,
};

export default MachinesPanel;
