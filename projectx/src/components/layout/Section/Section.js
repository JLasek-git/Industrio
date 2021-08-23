import React from 'react';
import styles from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({children}) => (
    <section className={styles.component}>
        {children}
    </section>
);

Section.propTypes = {
    children: PropTypes.node,
};

export default Section;