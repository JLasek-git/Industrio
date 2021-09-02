import React, { useRef, useState } from "react";
import styles from "./StockMarket1.module.scss";
import LinkButton from "../../../common/LinkButton/LinkButton";
import Section from "../../../layout/Section/Section";
import GameWindow from "../../../layout/GameWindow/GameWindow";
import ChangeShopButton from "../../../common/ChangeShopButton/ChangeShopButton";
import Button from "../../../common/Button/Button";
import IronOre from "./IronOre/IronOre";
import IronOreConcentrate from "./IronOreConcentrate/IronOreConcentrate";

function StockMarket1({ ...props }) {
  return (
    <Section>
      <GameWindow>
        {/* <ChangeShopButton>
          <LinkButton
            buttonText="Employees"
            iconName="chart-line"
            link="/stockmarket/stockmarket2"
          />
        </ChangeShopButton> */}
        <div className={styles.materialShopList}>
          <IronOre {...props} />
          <IronOreConcentrate {...props} />
        </div>
      </GameWindow>
    </Section>
  );
}

export default StockMarket1;
