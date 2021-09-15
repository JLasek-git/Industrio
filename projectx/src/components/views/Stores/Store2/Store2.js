import React, { useState } from "react";
// import styles from "./Store2.module.scss";
import Section from "../../../layout/Section/Section";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import EXPANSIONS from "../../../../data/magazines.json";
import StoreExpansion from "./StoreExpansion/StoreExpansionContainer";
import AlertBox from "../../../common/AlertBox/AlertBoxContainer";

const Store2 = () => {
  const [alertBoxIsVisible, setAlertBoxIsVisible] = useState(false);

  function handleError() {
    setAlertBoxIsVisible(!alertBoxIsVisible);
  }

  return (
    <Section>
      <OuterWindow>
        {alertBoxIsVisible && <AlertBox handleError={handleError} />}
        <InnerWindow>
          {EXPANSIONS.map((expansion) => (
            <StoreExpansion
              key={expansion.id}
              name={expansion.name}
              improvement={expansion.improvement}
              cost={expansion.cost}
              handleError={handleError}
            />
          ))}
        </InnerWindow>
      </OuterWindow>
    </Section>
  );
};

export default Store2;
