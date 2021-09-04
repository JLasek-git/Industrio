import React from "react";
import styles from "./Store1.module.scss";
import LinkButton from "../../../common/LinkButton/LinkButton";
import Section from "../../../layout/Section/Section";
import GameWindow from "../../../layout/GameWindow/GameWindow";
import ChangeShopButton from "../../../common/ChangeShopButton/ChangeShopButton";
import impactHitterImg from "../../../../images/inpact_hitter_1.png";
import StoreMachine from "./StoreMachine/StoreMachine";
/* Machines store */

function Store1({ ...props }) {
  return (
    <Section>
      <GameWindow>
        <ChangeShopButton>
          <LinkButton
            buttonText="Buildings"
            iconName="shopping-basket"
            link="/stores/store2"
          />
        </ChangeShopButton>
        <div className={styles.machinesList}>
          <StoreMachine
            machineImg={impactHitterImg}
            machineStateName="impactCrusher"
            machineName="Impact Crusher"
            {...props}
          />
        </div>
      </GameWindow>
    </Section>
  );
}

export default Store1;
