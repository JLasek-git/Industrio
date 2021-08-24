import React from 'react';
import styles from './Store1.module.scss';
import Button from '../../../common/Button/Button';
import Section from '../../../layout/Section/Section';
import GameWindow from '../../../layout/GameWindow/GameWindow';

const Store1 = () => (
    <Section>
        <GameWindow>
            <Button buttonText='Buildings' iconName='shopping-basket' link='/stores/store2' />
            <h1>Machines view</h1>
        </GameWindow>
    </Section>
);

export default Store1;