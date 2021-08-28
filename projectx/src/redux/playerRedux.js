/* SELECTORS */

export const getAllPlayerInfo = ({ playerInfo }) => playerInfo;

// action name creator
const reducerName = "playerInfo";
const createActionName = (name) => `app/${reducerName}/${name}`;

// action types
export const SET_MATERIAL_QUANTITY_UP = createActionName(
  "SET_MATERIAL_QUANTITY_UP"
);
export const SET_MATERIAL_QUANTITY_DOWN = createActionName(
  "SET_MATERIAL_QUANTITY_DOWN"
);
export const SET_MONEY = createActionName("SET_MONEY");
export const SET_MACHINE_STATE = createActionName("SET_MACHINE_STATE");
export const SET_TIME = createActionName("SET_TIME");
export const SET_EXPERIENCE = createActionName("SET_EXPERIENCE");
export const SET_MACHINE_PLACE = createActionName("SET_MACHINE_PLACE");

// action creators
export const setMaterialQuantityUp = (payload) => ({
  payload,
  type: SET_MATERIAL_QUANTITY_UP,
});
export const setMaterialQuantityDown = (payload) => ({
  payload,
  type: SET_MATERIAL_QUANTITY_DOWN,
});
export const setMoney = (payload) => ({ payload, type: SET_MONEY });
export const setMachineState = (payload) => ({
  payload,
  type: SET_MACHINE_STATE,
});
export const setTime = (payload) => ({ payload, type: SET_TIME });
export const setExperience = (payload) => ({ payload, type: SET_EXPERIENCE });
export const setMachinePlace = (payload) => ({ payload, type: SET_MACHINE_PLACE })

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_MATERIAL_QUANTITY_UP:
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          materials: {
            ...statePart.equipment.materials,
            ironOreConcentrate: {
              ...statePart.equipment.materials.ironOreConcentrate,
              quantity: action.payload,
            },
          },
        },
      };

    case SET_MATERIAL_QUANTITY_DOWN:
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          materials: {
            ...statePart.equipment.materials,
            ironOre: {
              ...statePart.equipment.materials.ironOre,
              quantity: action.payload,
            },
          },
        },
      };

    case SET_MACHINE_STATE:
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          machines: {
            ...statePart.equipment.machines,
            impactCrusher: {
              ...statePart.equipment.machines.impactCrusher,
              work: action.payload,
            },
          },
        },
      };

    case SET_MONEY:
      return {
        ...statePart,
        money: action.payload,
      };

    case SET_EXPERIENCE: {
      return {
        ...statePart,
        experience: action.payload,
      };
    }

    case SET_TIME:
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          machines: {
            ...statePart.equipment.machines,
            impactCrusher: {
              ...statePart.equipment.machines.impactCrusher,
              timeDuration: action.payload,
            },
          },
        },
      };

    case SET_MACHINE_PLACE: {
      return {
        ...statePart,
        magazine: {
          ...statePart.magazine,
          poorMagazine: {
            ...statePart.magazine.poorMagazine,
            machinePlaces: {
              ...statePart.magazine.poorMagazine.machinePlaces,
              [action.payload.clickedElementId]: action.payload,
            }
          }
        }
      }
    }
    default:
      return statePart;
  }
}
