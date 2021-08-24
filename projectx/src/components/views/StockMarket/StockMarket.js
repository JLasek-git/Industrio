import React from 'react';
import Button from '../../common/Button/Button';
import Section from '../../layout/Section/Section';
import styles from './StockMarket.module.scss';
import GameWindow from '../../layout/GameWindow/GameWindow';

const StockMarket = () => (
    <Section>
        <GameWindow>
            <Button buttonText='Materials' iconName='chart-line' link='/stockmarket/stockmarket1' />
            <Button buttonText='Employees' iconName='chart-line' link='/stockmarket/stockmarket2' />
        </GameWindow>
    </Section>
);

export default StockMarket;