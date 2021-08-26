import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({btnText}) {

    return(
        <button className={styles.btn}><span className={styles.btnText}>{btnText}</span></button>
    );
}

Button.propTypes = {
    btnText: PropTypes.node,
};

export default Button;