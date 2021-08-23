import React from 'react';
import Button from '../../common/Button/Button';
import Section from '../../layout/Section/Section';
import styles from './StockMarket.module.scss';

const StockMarket = () => (
    <Section>
            <Button buttonText='Materials' iconName='chart-line' link='/stockmarket/stockmarket1' />
            <Button buttonText='Employees' iconName='chart-line' link='/stockmarket/stockmarket2' />
        <h1>StockMarket view</h1>
    </Section>
);

export default StockMarket;