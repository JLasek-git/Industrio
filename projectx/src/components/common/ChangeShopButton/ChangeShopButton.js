import React from 'react';
import PropTypes from 'prop-types';
import styles from './ChangeShopButton.module.scss';

const ChangeShopButton = ({children}) => (
    <div className={styles.changeShopBtn}>
        {children}
    </div>
);

ChangeShopButton.propTypes = {
    children: PropTypes.node,
}

export default ChangeShopButton;