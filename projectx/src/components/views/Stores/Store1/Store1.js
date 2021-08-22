import React from 'react';
import styles from './Store1.module.scss';
import Button from '../../../common/Button/Button';

const Store1 = () => (
    <div>
        <Button buttonText='Store 2' link='/stores/store2' />
        <h1>Store1 view</h1>
    </div>
);

export default Store1;