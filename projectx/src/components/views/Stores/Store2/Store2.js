import React from 'react';
import styles from './Store2.module.scss';
import LinkButton from '../../../common/LinkButton/LinkButton';
import Section from '../../../layout/Section/Section';
import GameWindow from '../../../layout/GameWindow/GameWindow';
import ChangeShopButton from '../../../common/ChangeShopButton/ChangeShopButton';

const Store2 = () => (
    <Section>
        <ChangeShopButton>
            <LinkButton buttonText='Machines' iconName='shopping-basket' link='/stores/store1' />
        </ChangeShopButton>
        <GameWindow>
            <h1>Buildings view</h1>
        </GameWindow>
    </Section>
);

export default Store2;