import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import Icon from '../Icon/Icon';
import { Link } from 'react-router-dom';

function Button(props) {
    return(
    <div className={styles.component}>
        <Link className={styles.linkText} to={`${process.env.PUBLIC_URL}${props.link}`}>
            <div className={styles.linkBtn}>
                <Icon name={props.iconName} />
                <span className={styles.linkDirection}>{props.buttonText}</span>
            </div>
        </Link>
    </div>
    );
}

Button.propTypes = {
    buttonText: PropTypes.node,
};

export default Button;