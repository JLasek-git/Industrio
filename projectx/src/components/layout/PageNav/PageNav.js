import React from "react";
import styles from "./PageNav.module.scss";
import LinkButton from "../../common/LinkButton/LinkButton";
import Button from "../../common/Button/Button";
const PageNav = () => {
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
  );
};

export default PageNav;
