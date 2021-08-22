import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import styles from './StockMarket.module.scss';

const StockMarket = () => (
    <div>
        <nav className={styles.navigation}>
            <Button buttonText='StockMarket1' link='/stockmarket/stockmarket1' />
            <Button buttonText='StockMarket2' link='/stockmarket/stockmarket2' />
        </nav>
        <h1>StockMarket view</h1>
    </div>
);

export default StockMarket;