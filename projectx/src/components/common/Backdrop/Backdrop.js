import React from 'react';
import styles from './Backdrop.module.scss';
import SettingsPanel from '../SettingsPanel/SettingsPanelContainer';

function MachinePanel(props) {

    return(
        <div className={styles.backdrop}>
            <SettingsPanel handleClose={props.handleClose} />
        </div>
    );
};


export default MachinePanel;