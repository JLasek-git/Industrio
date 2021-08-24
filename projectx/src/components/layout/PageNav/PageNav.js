import React from "react";
import styles from "./PageNav.module.scss";
import Button from "../../common/Button/Button";

const PageNav = () => (
  <nav className={styles.mainNavBar}>
    <Button
      className={styles.mainNavBtn}
      buttonText="Game"
      iconName="gamepad"
      link="/"
    />
    <Button
      className={styles.mainNavBtn}
      buttonText="Market"
      iconName="chart-line"
      link="/stockmarket"
    />
    <Button
      className={styles.mainNavBtn}
      buttonText="Stores"
      iconName="shopping-basket"
      link="/stores"
    />
    <Button
      className={styles.mainNavBtn}
      buttonText="Options"
      iconName="cogs"
      link="/gameoptions"
    />
  </nav>
);

export default PageNav;
