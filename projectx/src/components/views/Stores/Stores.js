import React from 'react';
import styles from './Store.module.scss';
import Button from '../../common/Button/Button';
const Stores = () => (
    <div>
        <nav>
            <Button buttonText='Materials' iconName='shopping-basket' link='/stores/store1' />
            <Button buttonText='Employees' iconName='shopping-basket' link='/stores/store2' />
        </nav>
        <h1>Stores view</h1>
        
    </div>
);

export default Stores;