import React from 'react';
import styles from './StockMarket2.module.scss';
import Button from '../../../common/Button/Button';

const StockMarket2 = () => (
    <div className={styles.component}>
        <Button buttonText='Materials' iconName='chart-line' link='/stockmarket/stockmarket1' />
        <h1>
            Employees market view
        </h1>
    </div>
);

export default StockMarket2;