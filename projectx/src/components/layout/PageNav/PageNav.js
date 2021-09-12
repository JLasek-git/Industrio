import React from "react";
import styles from "./PageNav.module.scss";
import LinkButton from "../../common/LinkButton/LinkButton";

const PageNav = () => (
  <nav className={styles.mainNavBar}>
    <LinkButton
      className={styles.mainNavBtn}
      buttonText="Dashboard"
      link="/game"
    />
    <LinkButton
      className={styles.mainNavBtn}
      buttonText="Materials"
      link="/stockmarket/stockmarket1"
    />
    <LinkButton
      className={styles.mainNavBtn}
      buttonText="Machines"
      link="/stores/store1"
    />
    <LinkButton
      className={styles.mainNavBtn}
      buttonText="Expansions"
      link="/stores/store2"
    />
    <LinkButton
      className={styles.mainNavBtn}
      buttonText="Employees"
      link="/stockmarket/stockmarket2"
    />
  </nav>
);

export default PageNav;
