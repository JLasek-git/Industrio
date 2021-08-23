import React from 'react';
import styles from './StockMarket1.module.scss';
import Button from '../../../common/Button/Button';
import Section from '../../../layout/Section/Section';

const StockMarket1 = () => (
    <Section>
        <Button buttonText='Employees' iconName='chart-line' link='/stockmarket/stockmarket2' />
        <h1>
            Materials market view
        </h1>
    </Section>
);

export default StockMarket1;