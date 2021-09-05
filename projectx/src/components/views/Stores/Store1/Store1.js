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
            {...props}
          />
          <StoreMachine
            machineImg={impactHitterImg}
            machineStateName="jawCrusher"
            {...props}
          />
          <StoreMachine
            machineImg={impactHitterImg}
            machineStateName="coneCrusher"
            {...props}
          />
          <StoreMachine
            machineImg={impactHitterImg}
            machineStateName="hammerCrusher"
            {...props}
          />
          <StoreMachine
            machineImg={impactHitterImg}
            machineStateName="ballDrumMill"
            {...props}
          />
          <StoreMachine
            machineImg={impactHitterImg}
            machineStateName="rodDrumMill"
            {...props}
          />
          <StoreMachine
            machineImg={impactHitterImg}
            machineStateName="drumScreen"
            {...props}
          />
        </InnerWindow>
      </OuterWindow>
    </Section>
  );
}

export default Store1;
