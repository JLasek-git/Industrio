/* SELECTORS */

export const getAllPlayerInfo = ({ playerInfo }) => playerInfo;


// action name creator
const reducerName = 'playerInfo';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SET_MATERIAL_QUANTITY = createActionName('SET_MATERIAL_QUANTITY');
export const SET_MONEY = createActionName('SET_MONEY');

// action creators
export const setMaterialQuantity = payload => ({ payload, type: SET_MATERIAL_QUANTITY });
export const setMoney = payload => ({ payload, type: SET_MONEY });

export default function reducer(statePart = [], action = {}) {
    switch (action.type) {
        case SET_MATERIAL_QUANTITY:
            return {
                ...statePart,
                equipment: {
                    ...statePart.equipment,
                   materials: {
                       ...statePart.equipment.materials,
                       ironOreConcentrate: {
                           ...statePart.equipment.materials.ironOreConcentrate,
                           quantity: action.payload,
                       }
                   }
                }
            };
        case SET_MONEY:
            return{
                ...statePart,
                money: action.payload,
            };

        default:
            return statePart;
    }
}