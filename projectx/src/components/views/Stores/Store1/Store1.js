import React from "react";
import styles from "./Store1.module.scss";
import LinkButton from "../../../common/LinkButton/LinkButton";
import Section from "../../../layout/Section/Section";
import GameWindow from "../../../layout/GameWindow/GameWindow";
import ChangeShopButton from "../../../common/ChangeShopButton/ChangeShopButton";
import Button from "../../../common/Button/Button";


/* Machines store */

function Store1({...props}) {

  const handleBuy = () => {
    const playerMachineQuantity = props.playerInfo.equipment.machines.impactCrusher.owned;
    const playerMoney = props.playerInfo.money;
    const machineCost = props.playerInfo.equipment.machines.impactCrusher.price;
    const increasedMachineQuantity = playerMachineQuantity + 1;
    const playerMoneyAfterBuy = playerMoney - machineCost;

    props.setMachineEqQuantity(increasedMachineQuantity);
    props.setMoney(playerMoneyAfterBuy);
  };

  return(
    <Section>
    <GameWindow>
      <ChangeShopButton>
        <LinkButton
          buttonText="Buildings"
          iconName="shopping-basket"
          link="/stores/store2"
        />
      </ChangeShopButton>
      <div onClick={() => handleBuy()}>
        <Button btnText="Impact Crusher" />
      </div>
      <p>Price: $10 000</p>
    </GameWindow>
  </Section>
  )
}


export default Store1;
