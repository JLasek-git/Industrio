import React from 'react';
import styles from './Store1.module.scss';
import Button from '../../../common/Button/Button';
import Section from '../../../layout/Section/Section';

const Store1 = () => (
    <Section>
        <Button buttonText='Buildings' iconName='shopping-basket' link='/stores/store2' />
        <h1>Machines view</h1>
    </Section>
);

export default Store1;