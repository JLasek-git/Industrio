import React, { useState } from "react";
import Section from "../../../layout/Section/Section";
import impactHitterImg from "../../../../images/inpact_hitter_1.png";
import StoreMachine from "./StoreMachine/StoreMachineContainer";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";
import MACHINES from "../../../../data/machinesPreTreatment.json";
import AlertBox from "../../../common/AlertBox/AlertBoxContainer";
/* Machines store */

function Store1({ ...props }) {
  const [warningIsVisible, setWarningIsVisible] = useState(false);

  function handleError() {
    setWarningIsVisible(!warningIsVisible);
  }

  return (
    <Section>
      <OuterWindow>
        {warningIsVisible && <AlertBox handleError={handleError} />}
        <InnerWindow>
          {MACHINES.map((machine) => (
            <StoreMachine
              key={machine.id}
              machineImg={impactHitterImg}
              machineStateName={machine.id}
              machinePrice={machine.price}
              machineName={machine.name}
              handleError={handleError}
            />
          ))}
        </InnerWindow>
      </OuterWindow>
    </Section>
  );
}

export default Store1;
