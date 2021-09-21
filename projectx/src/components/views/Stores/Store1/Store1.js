import React, { useState } from "react";
import Section from "../../../layout/Section/Section";
import impactHitterImg from "../../../../images/inpact_hitter_1.png";
import StoreMachine from "./StoreMachine/StoreMachineContainer";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";
import MACHINES from "../../../../data/machinesPreTreatment.json";
import AlertBox from "../../../common/AlertBox/AlertBoxContainer";
import SuccessBox from "../../../common/SuccessBox/SuccessBoxContainer";
/* Machines store */

function Store1({ ...props }) {
  const [warningIsVisible, setWarningIsVisible] = useState(false);
  const [successIsVisible, setSuccessIsVisible] = useState(false);

  function handleError() {
    setWarningIsVisible(!warningIsVisible);
  }

  function handleSuccess() {
    setSuccessIsVisible(!successIsVisible);
  }

  return (
    <Section>
      <OuterWindow>
        {warningIsVisible && <AlertBox handleError={handleError} />}
        {successIsVisible && <SuccessBox handleSuccess={handleSuccess} />}
        <InnerWindow>
          {MACHINES.map((machine) => (
            <StoreMachine
              key={machine.id}
              machineImg={impactHitterImg}
              machineStateName={machine.id}
              machinePrice={machine.price}
              machineName={machine.name}
              machineRequirement={machine.requirement}
              handleError={handleError}
              handleSuccess={handleSuccess}
            />
          ))}
        </InnerWindow>
      </OuterWindow>
    </Section>
  );
}

export default Store1;
