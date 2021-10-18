import React, { useState } from "react";
import StoreMachine from "./StoreMachine/StoreMachineContainer";
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
    <>
      {warningIsVisible && <AlertBox handleError={handleError} />}
      {successIsVisible && <SuccessBox handleSuccess={handleSuccess} />}
      {MACHINES.map((machine) => (
        <StoreMachine
          key={machine.id}
          machineImg={machine.img}
          machineStateName={machine.id}
          machinePrice={machine.price}
          machineName={machine.name}
          machineRequirement={machine.requirement}
          handleError={handleError}
          handleSuccess={handleSuccess}
        />
      ))}
    </>
  );
}

export default Store1;
