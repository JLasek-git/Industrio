import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import styles from './StockMarket.module.scss';

const StockMarket = () => (
    <div>
        <nav className={styles.navigation}>
            <Button buttonText='Materials' iconName='chart-line' link='/stockmarket/stockmarket1' />
            <Button buttonText='Employees' iconName='chart-line' link='/stockmarket/stockmarket2' />
        </nav>
        <h1>StockMarket view</h1>
    </div>
);

export default StockMarket;