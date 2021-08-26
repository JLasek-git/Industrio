import React from 'react';
import styles from './Store1.module.scss';
import LinkButton from '../../../common/LinkButton/LinkButton';
import Section from '../../../layout/Section/Section';
import GameWindow from '../../../layout/GameWindow/GameWindow';
import ChangeShopButton from '../../../common/ChangeShopButton/ChangeShopButton';

const Store1 = () => (
    <Section>
        <ChangeShopButton>
            <LinkButton buttonText='Buildings' iconName='shopping-basket' link='/stores/store2' />
        </ChangeShopButton>
        <GameWindow>
            <h1>Machines view</h1>
        </GameWindow>
    </Section>
);

export default Store1;