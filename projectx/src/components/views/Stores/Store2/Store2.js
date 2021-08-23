import React from 'react';
import styles from './Store2.module.scss';
import Button from '../../../common/Button/Button';
import Section from '../../../layout/Section/Section';

const Store2 = () => (
    <Section>
        <Button buttonText='Machines' iconName='shopping-basket' link='/stores/store1' />
        <h1>Buildings view</h1>
    </Section>
);

export default Store2;