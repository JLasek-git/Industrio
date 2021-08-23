import React from 'react';
import Button from '../../common/Button/Button';
import Section from '../../layout/Section/Section';
import styles from './Store.module.scss';

const Stores = () => (
    <Section>
            <Button buttonText='Machines' iconName='shopping-basket' link='/stores/store1' />
            <Button buttonText='Buildings' iconName='shopping-basket' link='/stores/store2' />
        <h1>Stores view</h1>
    </Section>
);

export default Stores;