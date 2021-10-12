import React from "react";
import styles from "./WorkersPanel.module.scss";

function WorkersPanel({ ...props }) {
  return (
    <div className={styles.dashboardInfoContainer}>
      <h1>Supervisors</h1>
      <div className={styles.descriptions}>
        <span>Name:</span>
        <span>Works left:</span>
      </div>
      {props.playerInfo.employees.map(
        (employee) =>
          employee.id !== "none" && (
            <div key={employee.id} className={styles.dashboardInfoElement}>
              <div className={styles.singleElement}>
                {employee.name}
                <span className={styles.workCounter}>
                  {employee.worksCount}
                </span>
              </div>
              <details>
                <summary>Details</summary>
                <div className={styles.detailsInfo}>
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
                </div>
              </details>
            </div>
          )
      )}
    </div>
  );
}

export default WorkersPanel;
