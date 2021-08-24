import React from 'react';
import PropTypes  from 'prop-types';
import styles from './GameWidnow.module.scss';


const GameWindow = ({children}) => (
    <div className={styles.gameWindow}>
        {children}
    </div>
);

GameWindow.propTypes = {
    children: PropTypes.node,
    image: PropTypes.string,
}

export default GameWindow;