import React from "react";
import styles from "./MagazinePanel.module.scss";
import { currencyFormat } from "../../../utils/utils";
import MACHINES from "../../../../data/machinesPreTreatment.json";
import MATERIALS from "../../../../data/materials.json";

function MaterialPanel({ ...props }) {
  /* save redux state values to reduxStateInfo object for shorter names and easier changes */
  const reduxStateInfo = {
    magazineMachineCapacity:
      props.playerInfo.magazine.poorMagazine.machinesCapacity,
    ownedMachinesQuantity:
      props.playerInfo.equipment.machines.allMachinesQuantity,
    magazineMaterialCapacity:
      props.playerInfo.magazine.poorMagazine.materialCapacity,
  };

  /* calculateFreePlaces calculate how many free places for machines in magazine left */
  function calculateFreePlaces() {
    const freePlaces =
      reduxStateInfo.magazineMachineCapacity -
      reduxStateInfo.ownedMachinesQuantity;

    return freePlaces;
  }

  /* calculateFreeMaterialSpace calculate free material space */
  function calculateFreeMaterialSpace() {
    const freeSpace =
      reduxStateInfo.magazineMaterialCapacity -
      (props.playerInfo.equipment.materials.ironOre.quantity +
        props.playerInfo.equipment.materials.ironOreConcentrate.quantity);

    return freeSpace;
  }

  return (
    <div className={styles.dashboardInfoContainer}>
      <h1>Magazine</h1>
      <p>
        Free material space:{" "}
        {currencyFormat(Math.trunc(calculateFreeMaterialSpace()))}t
      </p>
      <p>Free machine places: {calculateFreePlaces()}</p>
      <div className={styles.dashboardInfoElement}>
        <h2>Materials:</h2>
        {MATERIALS.map((material) => (
          <span>
            {material.name}{" "}
            <span className={styles.elementQuantity}>
              {Math.floor(
                props.playerInfo.equipment.materials[material.id].quantity
              )}
              t
            </span>
          </span>
        ))}
        <h3>Machines:</h3>
        {reduxStateInfo.ownedMachinesQuantity === 0 ? (
          <span>
            Unfortunately you do not have any machines. You can buy them in
            'Machines Shop'.
          </span>
        ) : null}

        {MACHINES.map((machine) => {
          if (props.playerInfo.equipment.machines[machine.id].owned > 0) {
            return (
              <span>
                {machine.name}
                <span className={styles.elementQuantity}>
                  {" "}
                  {props.playerInfo.equipment.machines[machine.id].owned}
                </span>
              </span>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default MaterialPanel;
