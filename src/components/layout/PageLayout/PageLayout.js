import React, { useState } from "react";
import styles from "./PageLayout.module.scss";
import SideBarNav from "../SideBarNav/SideBarNavContainer";
import Icon from "../../common/Icon/Icon";
import OuterWindow from "../OuterWindow/OuterWindow";
import InnerWindow from "../InnerWindow/InnerWindow";
// import useWindowDimensions from "../../utils/utils";

function PageLayout({ children }) {
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
      <OuterWindow>
        <InnerWindow>{children}</InnerWindow>
      </OuterWindow>
      <div className={styles.hamburgerIconWrapper}>
        <div className={styles.hamburgerIcon} onClick={showPanels}>
          {panels === false ? <Icon name="bars" /> : <Icon name="times" />}
        </div>
      </div>
      {panels && (
        <div className={styles.leftPanels}>
          <SideBarNav closePanels={showPanels} />
        </div>
      )}
    </div>
  );
}

export default PageLayout;
