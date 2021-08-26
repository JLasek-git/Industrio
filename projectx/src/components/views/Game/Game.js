import React, { useState } from "react";
import Section from "../../layout/Section/Section";
import GameWindow from "../../layout/GameWindow/GameWindow";
import styles from './Game.module.scss';
import Backdrop from "../../common/Backdrop/Backdrop";
//SET MONEY WORKS


const Game = ({...props}) => {
  
  const [backdrop, isVisible] = useState(false);

  const handleClick = () => {
    isVisible(true);
  }

  const handleClose = () => {
    isVisible(false);
  }
  
  return(
  <Section>
    <GameWindow>
      {backdrop && <Backdrop handleClose={handleClose}/>}
      <button className={styles.machine} onClick={handleClick}></button>
    </GameWindow>
  </Section>
  );
}


export default Game;
