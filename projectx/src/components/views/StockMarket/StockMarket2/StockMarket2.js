import React from 'react';
import styles from './StockMarket2.module.scss';
import Button from '../../../common/Button/Button';
import Section from '../../../layout/Section/Section';
import GameWindow from '../../../layout/GameWindow/GameWindow';

const StockMarket2 = () => (
    <Section>
        <GameWindow>
            <Button buttonText='Materials' iconName='chart-line' link='/stockmarket/stockmarket1' />
            <h1>
                Employees market view
            </h1>
        </GameWindow>
    </Section>
);

export default StockMarket2;