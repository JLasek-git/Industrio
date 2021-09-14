import React from "react";
// import PropTypes from "prop-types";
import styles from "./ProfilePanel.module.scss";
import Icon from "../../common/Icon/Icon";

const linearColors = {
  green: "#017D01",
  white: "#FFFFFF",
};

function ProfilePanel({ ...props }) {
  return (
    <div className={styles.profilePanel}>
      <div className={styles.closeBtn} onClick={props.closePanels}>
        <Icon name="times" />
      </div>
      <div className={styles.avatarContainer}></div>
      <div className={styles.avatar}>
        <img src={props.playerInfo.avatar} alt="avatar"></img>
      </div>
      <div className={styles.playerInfo}>
        <div className={styles.playerNickname}>{props.playerInfo.nickname}</div>
        <div
          className={styles.experience}
          style={{
            backgroundImage: `linear-gradient(to right, ${linearColors.green} ${
              (props.playerInfo.experience / props.playerInfo.toNextLevel) * 100
            }%, ${linearColors.white} 0)`,
          }}
        >
          <span className={styles.levelInfo}>
            Level {props.playerInfo.level}
          </span>
          <span className={styles.experienceAmount}>
            {props.playerInfo.experience}/{props.playerInfo.toNextLevel}
          </span>
        </div>
        <div className={styles.money}>
          <span className={styles.moneyCount}>${props.playerInfo.money}</span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePanel;
