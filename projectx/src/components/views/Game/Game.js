import React from 'react';
import Section from '../../layout/Section/Section';
import GameWindow from '../../common/GameWindow/GameWindow';
import styles from './Game.module.scss';
import image from '../../../images/mockupPhoto.jpg';

const Game = () => (
    <Section>
        <GameWindow>
            <img src={image} alt='FactoryView' />
        </GameWindow>
    </Section>
);

export default Game;