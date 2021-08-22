import React from 'react';
import styles from './Store1.module.scss';
import Button from '../../../common/Button/Button';

const Store1 = () => (
    <div>
        <Button buttonText='Employees' iconName='shopping-basket' link='/stores/store2' />
        <h1>Materials  shop view</h1>
    </div>
);

export default Store1;