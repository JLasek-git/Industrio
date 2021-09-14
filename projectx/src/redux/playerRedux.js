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
export const SET_MATERIAL_RECEIVED_FROM_PRODUCTION = createActionName(
  "SET_MATERIAL_RECEIVED_FROM_PRODUCTION"
);
export const SET_MONEY = createActionName("SET_MONEY");
export const SET_MACHINE_STATE = createActionName("SET_MACHINE_STATE");
export const SET_TIME = createActionName("SET_TIME");
export const SET_EXPERIENCE = createActionName("SET_EXPERIENCE");
export const SET_MACHINE_PLACE = createActionName("SET_MACHINE_PLACE");
export const SET_MACHINE_EQ_QUANTITY = createActionName(
  "SET_MACHINE_EQ_QUANTITY"
);

export const SET_MATERIAL_QUANTITY_BUY = createActionName(
  "SET_MATERIAL_QUANTITY_BUY"
);
export const SET_MACHINES_CAPACITY = createActionName("SET_MACHINES_CAPACITY");
export const SET_ALL_MACHINES_QUANTITY = createActionName(
  "SET_ALL_MACHINES_QUANTITY"
);
export const SET_AMOUNT_MACHINES_WORKING = createActionName(
  "SET_AMOUNT_MACHINES_WORKING"
);
export const SET_EMPLOYEES_ARRAY = createActionName("SET_EMPLOYEES_ARRAY");
export const SET_EMPLOYEES_WORK_COUNT = createActionName(
  "SET_EMPLOYEES_WORK_COUNT"
);

export const SET_PRODUCTION_COST = createActionName("SET_PRODUCTION_COST");
export const SET_MAGAZINE_CAPACITY = createActionName("SET_MAGAZINE_CAPACITY");
export const SET_PLAYER_LEVEL = createActionName("SET_PLAYER_LEVEL");
export const SET_EXPERIENCE_TO_NEXT_LEVEL = createActionName(
  "SET_EXPERIENCE_TO_NEXT_LEVEL"
);

// action creators
export const setMaterialQuantityUp = (payload) => ({
  payload,
  type: SET_MATERIAL_QUANTITY_UP,
});
export const setMaterialQuantityDown = (payload) => ({
  payload,
  type: SET_MATERIAL_QUANTITY_DOWN,
});
export const setMaterialReceivedFromProduction = (payload) => ({
  payload,
  type: SET_MATERIAL_RECEIVED_FROM_PRODUCTION,
});
export const setMoney = (payload) => ({ payload, type: SET_MONEY });
export const setMachineState = (payload) => ({
  payload,
  type: SET_MACHINE_STATE,
});
export const setTime = (payload) => ({ payload, type: SET_TIME });
export const setExperience = (payload) => ({ payload, type: SET_EXPERIENCE });
export const setMachinePlace = (payload) => ({
  payload,
  type: SET_MACHINE_PLACE,
});
export const setMachineEqQuantity = (payload) => ({
  payload,
  type: SET_MACHINE_EQ_QUANTITY,
});

export const setMaterialQuantityBuy = (payload) => ({
  payload,
  type: SET_MATERIAL_QUANTITY_BUY,
});
export const setMachinesCapacity = (payload) => ({
  payload,
  type: SET_MACHINES_CAPACITY,
});

export const setAllMachinesQuantity = (payload) => ({
  payload,
  type: SET_ALL_MACHINES_QUANTITY,
});
export const setAmountMachinesWorking = (payload) => ({
  payload,
  type: SET_AMOUNT_MACHINES_WORKING,
});

export const setEmployeesArray = (payload) => ({
  payload,
  type: SET_EMPLOYEES_ARRAY,
});

export const setEmployeesWorkCount = (payload) => ({
  payload,
  type: SET_EMPLOYEES_WORK_COUNT,
});

export const setProductionCost = (payload) => ({
  payload,
  type: SET_PRODUCTION_COST,
});
export const setMagazineCapacity = (payload) => ({
  payload,
  type: SET_MAGAZINE_CAPACITY,
});

export const setPlayerLevel = (payload) => ({
  payload,
  type: SET_PLAYER_LEVEL,
});
export const setExperienceToNextLevel = (payload) => ({
  payload,
  type: SET_EXPERIENCE_TO_NEXT_LEVEL,
});
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

    case SET_MATERIAL_RECEIVED_FROM_PRODUCTION:
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          machines: {
            ...statePart.equipment.machines,
            [action.payload.currentMachinePicked]: {
              ...statePart.equipment.machines[
                action.payload.currentMachinePicked
              ],
              materialFromProduction: action.payload.amountAfter,
            },
          },
        },
      };
    case SET_MATERIAL_QUANTITY_BUY:
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          materials: {
            ...statePart.equipment.materials,
            [action.payload.materialStateName]: {
              ...statePart.equipment.materials[
                action.payload.materialStateName
              ],
              quantity: action.payload.playerMaterialAfterAction,
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
            [action.payload.currentMachinePicked]: {
              ...statePart.equipment.machines[
                action.payload.currentMachinePicked
              ],
              work: action.payload.bool,
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
            [action.payload.currentMachinePicked]: {
              ...statePart.equipment.machines[
                action.payload.currentMachinePicked
              ],
              timeDuration: action.payload.counter,
            },
          },
        },
      };

    case SET_MACHINE_EQ_QUANTITY: {
      console.log(action.payload.machineStateName);
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          machines: {
            ...statePart.equipment.machines,
            [action.payload.machineStateName]: {
              ...statePart.equipment.machines[action.payload.machineStateName],
              owned: action.payload.machineQuantity,
            },
          },
        },
      };
    }

    case SET_MACHINES_CAPACITY: {
      return {
        ...statePart,
        magazine: {
          ...statePart.magazine,
          poorMagazine: {
            ...statePart.magazine.poorMagazine,
            machinesCapacity: action.payload,
          },
        },
      };
    }

    case SET_ALL_MACHINES_QUANTITY: {
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          machines: {
            ...statePart.equipment.machines,
            allMachinesQuantity: action.payload,
          },
        },
      };
    }

    case SET_AMOUNT_MACHINES_WORKING: {
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          machines: {
            ...statePart.equipment.machines,
            [action.payload.currentMachinePicked]: {
              ...statePart.equipment.machines[
                action.payload.currentMachinePicked
              ],
              machineWorking: action.payload.pickedMachinesAmount,
            },
          },
        },
      };
    }

    case SET_EMPLOYEES_ARRAY: {
      return {
        ...statePart,
        employees: action.payload,
      };
    }

    case SET_EMPLOYEES_WORK_COUNT: {
      return {
        ...statePart,
        employees: action.payload,
      };
    }

    case SET_PRODUCTION_COST: {
      return {
        ...statePart,
        equipment: {
          ...statePart.equipment,
          machines: {
            ...statePart.equipment.machines,
            [action.payload.currentMachinePicked]: {
              ...statePart.equipment.machines[
                action.payload.currentMachinePicked
              ],
              productionCost: action.payload.productionCost,
            },
          },
        },
      };
    }

    case SET_MAGAZINE_CAPACITY: {
      return {
        ...statePart,
        magazine: {
          ...statePart.magazine,
          poorMagazine: {
            ...statePart.magazine.poorMagazine,
            machinesCapacity: action.payload,
          },
        },
      };
    }

    case SET_PLAYER_LEVEL: {
      return {
        ...statePart,
        level: action.payload,
      };
    }

    case SET_EXPERIENCE_TO_NEXT_LEVEL: {
      return {
        ...statePart,
        toNextLevel: action.payload,
      };
    }
    default:
      return statePart;
  }
}
