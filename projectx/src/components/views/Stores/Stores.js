import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Store.module.scss';
const Stores = () => (
    <div>
        <nav>
            <Link to={`${process.env.PUBLIC_URL}/stores/store1`}>Store 1</Link>
            <Link to={`${process.env.PUBLIC_URL}/stores/store2`}>Store 2</Link>
        </nav>
        <h1>Stores view</h1>
        
    </div>
);

export default Stores;