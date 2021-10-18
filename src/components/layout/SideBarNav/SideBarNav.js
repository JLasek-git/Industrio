import React from "react";
// import PropTypes from "prop-types";
import styles from "./SideBarNav.module.scss";
import LinkButton from "../../common/LinkButton/LinkButton";
import Button from "../../common/Button/Button";
import { currencyFormat } from "../../utils/utils";

const linearColors = {
  green: "#017D01",
  white: "#FFFFFF",
};

function SideBarNav({ ...props }) {
  function resetGame() {
    let confirmation = window.confirm(
      "Are you sure you want to reset your game?"
    );

    if (confirmation) {
      localStorage.clear();
      window.location.reload();
    }
  }

  return (
    <aside className={styles.sidePanel}>
      <div className={styles.profilePanel}>
        <div className={styles.avatarContainer}></div>
        <div className={styles.avatar}>
          <img src={props.playerInfo.avatar} alt="avatar"></img>
        </div>
        <div className={styles.playerInfo}>
          <div className={styles.playerNickname}>
            {props.playerInfo.nickname}
          </div>
          <div
            className={styles.experience}
            style={{
              backgroundImage: `linear-gradient(to right, ${
                linearColors.green
              } ${
                (props.playerInfo.experience / props.playerInfo.toNextLevel) *
                100
              }%, ${linearColors.white} 0)`,
            }}
          >
            <span className={styles.levelInfo}>
              Level {props.playerInfo.level}
            </span>
            <span className={styles.experienceAmount}>
              {Math.trunc(props.playerInfo.experience)}/
              {props.playerInfo.toNextLevel}
            </span>
          </div>
          <div className={styles.money}>
            <span className={styles.moneyCount}>
              ${currencyFormat(props.playerInfo.money)}
            </span>
          </div>
        </div>
      </div>
      <nav className={styles.mainNavBar}>
        <LinkButton
          className={styles.mainNavBtn}
          buttonText="Dashboard"
          link="/game"
        />
        <LinkButton
          className={styles.mainNavBtn}
          buttonText="Materials Shop"
          link="/stockmarket/stockmarket1"
        />
        <LinkButton
          className={styles.mainNavBtn}
          buttonText="Machines Shop"
          link="/stores/store1"
        />
        <LinkButton
          className={styles.mainNavBtn}
          buttonText="Expansions Shop"
          link="/stores/store2"
        />
        <LinkButton
          className={styles.mainNavBtn}
          buttonText="Employees Market"
          link="/stockmarket/stockmarket2"
        />
        <div className={styles.resetBtnContainer}>
          <Button btnText="Reset Game" btnFunction={resetGame}></Button>
        </div>
      </nav>
    </aside>
  );
}

export default SideBarNav;
