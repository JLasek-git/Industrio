import React, { createElement } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./MagazineBackground.module.scss";
import magazineImg from "../../../images/magazyn_1.png";
import MachineMiniature from "../../common/MachineMiniature/MachineMiniature";
import machineImg from "../../../images/inpact_hitter_1.png";

function MagazineBackground({ ...props }) {
  function machinePlaceHandleClick(event) {
    event.preventDefault();
    const clickedElementId = event.currentTarget.lastChild.id;
    const createdElement = createElement(MachineMiniature, {
      source: machineImg,
      altText: "impact-hitter",
      showSettings: props.handleClick,
    });
    ReactDOM.render(createdElement, document.getElementById(`${clickedElementId}`));

  }

  return (
    <div className={styles.background}>
      <img src={magazineImg} alt="magazine" />
      <div className={styles.machinePlacement}>
        <div className={styles.machinePlacementUp}>
          <div
            className={styles.machinePlacement1}
            onClick={machinePlaceHandleClick}
          >
            <div
              id="container1"
              className={styles.machineButton}
            >
            </div>
          </div>
          <div
            className={styles.machinePlacement2}
            onClick={machinePlaceHandleClick}
          >
            <div
              id="container2"
              className={styles.machineButton}
            ></div>
          </div>
          <div
            className={styles.machinePlacement3}
            onClick={machinePlaceHandleClick}
          >
            <div
              id="container3"
              className={styles.machineButton}
            ></div>
          </div>
        </div>
        <div className={styles.machinePlacementDown}>
          <div
            className={styles.machinePlacement4}
            onClick={machinePlaceHandleClick}
          >
            <div
              id="container4"
              className={styles.machineButton}
            ></div>
          </div>
          <div
            className={styles.machinePlacement5}
            onClick={machinePlaceHandleClick}
          >
            <div
              id="container5"
              className={styles.machineButton}
            ></div>
          </div>
          <div
            className={styles.machinePlacement6}
            onClick={machinePlaceHandleClick}
          >
            <div
              id="container6"
              className={styles.machineButton}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MagazineBackground;
