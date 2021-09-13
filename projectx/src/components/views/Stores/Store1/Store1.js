import React from "react";
import Section from "../../../layout/Section/Section";
import impactHitterImg from "../../../../images/inpact_hitter_1.png";
import StoreMachine from "./StoreMachine/StoreMachineContainer";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";
import MACHINES from "../../../../data/machinesPreTreatment.json";
import styles from "./Store1.module.scss";
/* Machines store */

function Store1({ ...props }) {
  return (
    <Section>
      <OuterWindow>
        <InnerWindow>
          {MACHINES.map((machine) => (
            <StoreMachine
              key={machine.id}
              machineImg={impactHitterImg}
              machineStateName={machine.id}
              machinePrice={machine.price}
              machineName={machine.name}
            />
          ))}
        </InnerWindow>
      </OuterWindow>
    </Section>
  );
}

export default Store1;
