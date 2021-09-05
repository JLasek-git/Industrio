import React from "react";
import styles from "./StockMarket1.module.scss";
import Section from "../../../layout/Section/Section";
import ShopElement from "./ShopElement/ShopElement";
import InnerWindow from "../../../layout/InnerWindow/InnerWindow";
import OuterWindow from "../../../layout/OuterWindow/OuterWindow";

function StockMarket1({ ...props }) {
  return (
    <Section>
      <OuterWindow>
        <InnerWindow>
          <ShopElement
            materialStateName="ironOre"
            materialDisplayName="Iron ore"
            {...props}
          />
          <ShopElement
            materialStateName="ironOreConcentrate"
            materialDisplayName="Iron ore concentrate"
            {...props}
          />
        </InnerWindow>
      </OuterWindow>
    </Section>
  );
}

export default StockMarket1;
