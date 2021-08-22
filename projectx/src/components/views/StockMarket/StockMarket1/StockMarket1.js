import React from 'react';
import styles from './StockMarket1.module.scss';
import Button from '../../../common/Button/Button';

const StockMarket1 = () => (
    <div>
        <Button buttonText='Employees' iconName='chart-line' link='/stockmarket/stockmarket2' />
        <h1>
            Materials market view
        </h1>
    </div>
);

export default StockMarket1;