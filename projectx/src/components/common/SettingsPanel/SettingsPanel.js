import React, { useRef }from 'react';
import styles from './SettingsPanel.module.scss';
import Icon from '../Icon/Icon';

function SettingsPanel(props) {

    const amountValue = useRef();

    function submitHandler(playerInfo, event){
        event.preventDefault();
        
        /* saving object properties to variables and const depending on purpose */
        const playerUsedEquipmentMaterialQuantity = playerInfo.equipment.materials.ironOre.quantity;
        const playerReceivedEquipmentMaterialQuantity =  playerInfo.equipment.materials.ironOreConcentrate.quantity;
        const playerMoney = playerInfo.money;
        const singleProductionCost = 7;
        const materialDurability = playerInfo.equipment.materials.ironOre.durability;
        const machinePerformance = playerInfo.equipment.machines.impactCrusher.performance;
        const machineState = playerInfo.equipment.machines.impactCrusher.work;

        /* this part of code handle work start, and changing state depending on passed parameters (changing quantity of player material (how much he will be given), taking costs of work) */
        if(!machineState){
            props.setMachineState(true);

            /* this defines our pickedAmount on input and parses to int*/
            const pickedAmount = parseInt(amountValue.current.value);

            /* calculations passed to state depending on props */
            const wholeProductionCost = pickedAmount * singleProductionCost;
            const playerMoneyAfterProduction = playerMoney - wholeProductionCost;
            const playerReceivedMaterialAfterProduction = playerReceivedEquipmentMaterialQuantity + pickedAmount;
            const playerUsedMaterialAfterProduction = playerUsedEquipmentMaterialQuantity - pickedAmount; 
            /* if whole production cost which depends on calculation playerActualMoney - productionCosts is less than 0 it means player don't have enough money to proceed*/
            if(playerMoneyAfterProduction < 0 || playerUsedMaterialAfterProduction < 0){
                alert('You do not have sufficient materials or funds for production.')
                props.setMachineState(false);
            } else {
                props.setMaterialQuantityDown(playerUsedMaterialAfterProduction);
                props.setMoney(playerMoneyAfterProduction);
                setTimeout(() => {
                    /* here we're passing changed values to reducer. Values are calculated before set timeout function. In this part of code, we only changing them in Redux state */
                    props.setMaterialQuantityUp(playerReceivedMaterialAfterProduction);
                    props.setMachineState(false);
                },(materialDurability / machinePerformance) * 1000 );
            }

            /* if machine is still working player can't start second work*/
        } else {
            alert('Machine is still working!');
        }
    }
    
    return(
        <div className={styles.panelCard}>
            <div className={styles.closeBtn} onClick={props.handleClose}>
                <Icon name='times' />
            </div>
            <form className={styles.parametersForm} onSubmit={(event) => submitHandler(props.playerInfo, event)}>
                <label htmlFor='amount'>How many you want to use?</label>
                <input type='range' name='amount' id='amount' min='1' max='1000' ref={amountValue} />
                <button>Start</button>
            </form>
        </div>
    );
}

export default SettingsPanel;