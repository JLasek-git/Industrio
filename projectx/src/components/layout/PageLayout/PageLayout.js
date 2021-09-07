import React, { useState } from "react";
import styles from "./PageLayout.module.scss";
import PageNav from "../PageNav/PageNav";
import ProfilePanel from "../ProfilePanel/ProfilePanelContainer";
import Icon from "../../common/Icon/Icon";

function PageLayout() {
  const [panels, isVisible] = useState(true);

  const showPanels = () => {
    isVisible(!panels);
  };

  return (
    <div className={styles.pageLayoutContainer}>
      <div className={styles.windowBorder}>
        <span className={styles.title}>Industrio</span>
        <div className={styles.redCircle}></div>
        <div className={styles.yellowCircle}></div>
        <div className={styles.greenCircle}></div>
      </div>
      <div className={styles.hamburgerIconWrapper}>
        <div className={styles.hamburgerIcon} onClick={showPanels}>
          <Icon name="bars" />
        </div>
      </div>

      {panels && (
        <div className={styles.leftPanels}>
          <ProfilePanel closePanels={showPanels} />
          <PageNav />
        </div>
      )}
    </div>
  );
}

export default PageLayout;
