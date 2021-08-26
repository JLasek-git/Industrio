import React from "react";
import styles from "./PageNav.module.scss";
import LinkButton from "../../common/LinkButton/LinkButton";

const PageNav = () => (
  <nav className={styles.mainNavBar}>
    <LinkButton
      className={styles.mainNavBtn}
      buttonText="Game"
      iconName="gamepad"
      link="/"
    />
    <LinkButton
      className={styles.mainNavBtn}
      buttonText="Market"
      iconName="chart-line"
      link="/stockmarket"
    />
    <LinkButton
      className={styles.mainNavBtn}
      buttonText="Stores"
      iconName="shopping-basket"
      link="/stores"
    />
    <LinkButton
      className={styles.mainNavBtn}
      buttonText="Options"
      iconName="cogs"
      link="/gameoptions"
    />
  </nav>
);

export default PageNav;
