import React from "react";
import styles from "./MachinesPanel.module.scss";
import Button from "../../../common/Button/Button";
import PropTypes from "prop-types";
import MACHINES from "../../../../data/machinesPreTreatment.json";

function MachinesPanel({ showProductionSettings, ...props }) {
  return (
    <div className={styles.dashboardInfoContainer}>
      <h1>Pre-treatment</h1>
      {props.playerInfo.equipment.machines.allMachinesQuantity === 0 ? (
        <span>Currently there're no machines to track</span>
      ) : null}
      {MACHINES.map((machine) => {
        if (props.playerInfo.equipment.machines[machine.id].owned > 0) {
          return (
            <div key={machine.id} className={styles.dashboardInfoElement}>
              <div className={styles.singleElement}>
                {machine.name}:
                <div className={styles.machineStateInfo}>
                  <div className={styles.timeCounter}>
                    {(
                      props.playerInfo.equipment.machines[machine.id]
                        .timeDuration / 60000
                    ).toFixed(2)}
                    m
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
                {props.playerInfo.equipment.machines[machine.id].work ? (
                  <div className={styles.detailsInfo}>
                    You will receive:
                    <span>
                      Iron Ore Concentrate:{" "}
                      {Math.trunc(
                        props.playerInfo.equipment.machines[machine.id]
                          .materialFromProduction
                      )}
                      t
                    </span>
                  </div>
                ) : (
                  <div className={styles.detailsInfo}>
                    Machine is currently not working
                  </div>
                )}
              </details>
            </div>
          );
        }
        return null;
      })}
      <Button btnText="Production" btnFunction={showProductionSettings} />
    </div>
  );
}

MachinesPanel.propTypes = {
  showProductionSettings: PropTypes.func,
};

export default MachinesPanel;
