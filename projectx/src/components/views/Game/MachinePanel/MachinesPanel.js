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
            {machine.name}:{" "}
            <div
              className={styles.workIndicator}
              style={props.playerInfo.equipment.machines[machine.id].work ? { background: "green"} : { background: "red" }}
            ></div>
          </div>
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
