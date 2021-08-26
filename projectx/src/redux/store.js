import { combineReducers, createStore } from 'redux';
import materials from '../data/materials.json';
import machinesPreTreatment from '../data/machinesPreTreatment.json';

import globalReducer from './globalRedux';
import playerReducer from './playerRedux'

/* make initial state */ 
const initialState = {
    playerInfo: {
        nickname: 'Player 1',
        experience: 2000,
        money: 7000,
        equipment: {
            machines: {
                impactCrusher: {
                    id: 'impact-crusher',
                    name: 'Impact Crusher',
                    price: 10000,
                    requirement: 0,
                    type: 'crusher',
                    application: 'pre-treatment-of-ore',
                    performance: 100,
                    work: false,
                }
            },

            materials: {
                ironOre: {
                    id: 'iron-ore',
                    name: 'Iron ore',
                    price: 100,
                    durability: 300,
                    experience: 7.5,
                    quantity: 500
                },

                ironOreConcentrate: {
                    id: 'iron-ore-concentrate',
                    name: 'Iron ore concentrate',
                    price: 200,
                    durability: 450,
                    experience: 7.5,
                    quantity: 0
                }
            }
        }
    },
    materialsInfo: materials,
    machinesInfo: machinesPreTreatment
}

/* define reducers */
const reducers = {
    playerInfo: playerReducer,
};

/* make initial state null for all keys in initial state not declared in reducers */
Object.keys(initialState).forEach(item => {
    if(typeof reducers[item] == 'undefined') {
        reducers[item] = (statePart = null) => statePart;
    }
});


/* combine all reducers */

const combinedReducers = combineReducers(reducers);


/*  */
const storeReducer = (state, action) => {
    const modifiedState = globalReducer(state, action);
    return combinedReducers(modifiedState, action);
};

const store = createStore(
    storeReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;