import React, { useRef, useState}from 'react';
import styles from './SettingsPanel.module.scss';
import Icon from '../Icon/Icon';

function SettingsPanel(props) {

    const amountValue = useRef();
    const [machineWorking, isWorking] = useState(false);

    function submitHandler(event){
        event.preventDefault();
        if(!machineWorking){
            isWorking(true)
            let playerMaterialQuantity = 0;
            const materialDurability = 500;
            const machinePerformance = 100;
            const pickedAmount = parseInt(amountValue.current.value);
            playerMaterialQuantity += pickedAmount;
            setTimeout(() => {
                props.setMaterialQuantity(playerMaterialQuantity);
                isWorking(false);
            },(materialDurability / machinePerformance) * 1000 );
        } else {
            alert('Machine is still working!');
        }
    }
    
    return(
        <div className={styles.panelCard}>
            <div className={styles.closeBtn} onClick={props.handleClose}>
                <Icon name='times' />
            </div>
            <form className={styles.parametersForm} onSubmit={submitHandler}>
                <label htmlFor='amount'>How many you want to use?</label>
                <input type='range' name='amount' id='amount' min='1' max='1000' ref={amountValue} />
                <button>Start</button>
            </form>
        </div>
    );
}

export default SettingsPanel;