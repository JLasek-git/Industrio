import React from "react";
import styles from "./WorkersPanel.module.scss";

function WorkersPanel({ ...props }) {
  return (
    <div className={styles.workersContainer}>
      <h1>Supervisors</h1>
      <div className={styles.descriptions}>
        <span>Name:</span>
        <span>Works left:</span>
      </div>
      {props.playerInfo.employees.map(
        (employee) =>
          employee.id !== "none" && (
            <div key={employee.id} className={styles.singleWorker}>
              <span>{employee.name}</span>
              <span className={styles.workCounter}>{employee.worksCount}</span>
            </div>
          )
      )}
    </div>
  );
}

export default WorkersPanel;
