import React from "react";
import styles from "./Store1.module.scss";
import Section from "../../../layout/Section/Section";
import impactHitterImg from "../../../../images/inpact_hitter_1.png";
import StoreMachine from "./StoreMachine/StoreMachine";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";
/* Machines store */

function Store1({ ...props }) {
  return (
    <Section>
      <OuterWindow>
        <InnerWindow>
          <StoreMachine
            machineImg={impactHitterImg}
            machineStateName="impactCrusher"
            machineName="Impact Crusher"
            {...props}
          />
        </InnerWindow>
      </OuterWindow>
    </Section>
  );
}

export default Store1;
