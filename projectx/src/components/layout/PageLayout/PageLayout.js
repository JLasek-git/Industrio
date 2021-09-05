import React from "react";
import styles from "./PageLayout.module.scss";
import PageNav from "../PageNav/PageNav";
import ProfilePanel from "../ProfilePanel/ProfilePanelContainer";

function PageLayout() {
  return (
    <div className={styles.pageLayoutContainer}>
      <div className={styles.windowBorder}>
        <span className={styles.title}>Industrio</span>
        <div className={styles.redCircle}></div>
        <div className={styles.yellowCircle}></div>
        <div className={styles.greenCircle}></div>
      </div>
      <div className={styles.leftPanels}>
        <ProfilePanel />
        <PageNav />
      </div>
    </div>
  );
}

export default PageLayout;
