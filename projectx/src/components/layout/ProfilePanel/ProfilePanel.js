import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfilePanel.module.scss";
import avatar from "../../../images/avatarMockup.jpg";

const ProfilePanel = (props) => (
  <div className={styles.profilePanel}>
    <div className={styles.avatarContainer}></div>
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar"></img>
    </div>
    <div className={styles.playerInfo}>
      <div className={styles.playerNickname}>MistrzMarqs</div>
      <div className={styles.experience}>
        <span className={styles.levelInfo}>Level 1</span>
        <span className={styles.experienceAmount}>2000/4000</span>
      </div>
      <div className={styles.money}>
        <span className={styles.moneyCount}>${props.playerInfo.money}</span>
      </div>
    </div>
  </div>
);

export default ProfilePanel;
