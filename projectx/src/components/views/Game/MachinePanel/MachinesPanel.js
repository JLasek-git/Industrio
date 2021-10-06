import React from "react";
import styles from "./MachinesPanel.module.scss";
import Button from "../../../common/Button/Button";
import PropTypes from "prop-types";
import MACHINES from "../../../../data/machinesPreTreatment.json";

function MachinesPanel({ showProductionSettings, ...props }) {
  return (
    <div className={styles.machinesContainer}>
      <h1>Pre-treatment</h1>
      {MACHINES.map((machine) => (
        <div key={machine.id} className={styles.machinesInfo}>
          <div className={styles.singleMachine}>
            {machine.name}: 
            <div className={styles.machineStateInfo}>
              <div className={styles.timeCounter}>
                {(
                  props.playerInfo.equipment.machines[machine.id].timeDuration /
                  60000
                ).toFixed(2)}m
              </div>
              <div
                className={styles.workIndicator}
                style={
                  props.playerInfo.equipment.machines[machine.id].work
                    ? { background: "green" }
                    : { background: "red" }
                }
              ></div>
            </div>
          </div>
          <details>
            <summary>Details</summary>
            <div className={styles.detailsInfo}>
              <span>Iron Ore Concentrate: {props.playerInfo.equipment.machines[machine.id].materialFromProduction}t</span>
            </div>
          </details>
        </div>
      ))}
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
