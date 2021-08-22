import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StockMarket.module.scss';

const StockMarket = () => (
    <div>
        <nav>
            <Link to={`${process.env.PUBLIC_URL}/stockmarket/stockmarket1`}>StockMarket1</Link>
            <Link to={`${process.env.PUBLIC_URL}/stockmarket/stockmarket2`}>StockMarket2</Link>
        </nav>
        <h1>StockMarket view</h1>
    </div>
);

export default StockMarket;