import React from 'react';
import styles from './Store.module.scss';
import Button from '../../common/Button/Button';
const Stores = () => (
    <div>
        <nav>
            <Button buttonText='Store 1' link='/stores/store2' />
            <Button buttonText='Store 2' link='/stores/store2' />
        </nav>
        <h1>Stores view</h1>
        
    </div>
);

export default Stores;