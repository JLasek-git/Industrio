import React from "react";
// import styles from "./Store2.module.scss";
import Section from "../../../layout/Section/Section";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import EXPANSIONS from "../../../../data/magazines.json";
import StoreExpansion from "./StoreExpansion/StoreExpansionContainer";

const Store2 = () => (
  <Section>
    <OuterWindow>
      <InnerWindow>
        {EXPANSIONS.map((expansion) => (
          <StoreExpansion
            key={expansion.id}
            name={expansion.name}
            improvement={expansion.improvement}
            cost={expansion.cost}
          />
        ))}
      </InnerWindow>
    </OuterWindow>
  </Section>
);

export default Store2;
