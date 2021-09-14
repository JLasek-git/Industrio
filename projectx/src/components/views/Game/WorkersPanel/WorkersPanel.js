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
              <details>
                <summary>{employee.name}</summary>
                <p className={styles.detailsText}>
                  Production time boost: {employee.productionTimeBoost * 100}%
                </p>
                <p className={styles.detailsText}>
                  Experience boost: {employee.experienceBoost * 100}%
                </p>
                <p className={styles.detailsText}>
                  Production cost boost: {employee.productionCostBoost * 100}%
                </p>
                <p className={styles.detailsText}>
                  Quantity boost: {employee.quantityBoost * 100}%
                </p>
              </details>
              <span className={styles.workCounter}>{employee.worksCount}</span>
            </div>
          )
      )}
    </div>
  );
}

export default WorkersPanel;
