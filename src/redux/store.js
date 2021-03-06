import { combineReducers, createStore } from "redux";

import profileIcon from "../images/profileIcon.png";

import globalReducer from "./globalRedux";
import playerReducer from "./playerRedux";
import appInfoReducer from "./appInfoRedux";
import { saveState } from "./localStorage";

const localStorageState =
  localStorage.state === undefined
    ? "localStorageState"
    : JSON.parse(localStorage.state);

/* local storage state settings */
if (localStorageState !== "localStorageState") {
  const machinesObjectInPlayerEq =
    localStorageState.playerInfo.equipment.machines;
  const playerInfoElements = [];
  for (let machine in machinesObjectInPlayerEq) {
    if (machine !== "allMachinesQuantity") {
      if (machinesObjectInPlayerEq[machine].materialFromProduction > 0) {
        localStorageState.playerInfo.equipment.materials.ironOre.quantity +=
          machinesObjectInPlayerEq[machine].materialFromProduction;
        localStorageState.playerInfo.money +=
          machinesObjectInPlayerEq[machine].productionCost;
        localStorageState.playerInfo.equipment.machines[
          machine
        ].machineWorking = 0;
      }
      machinesObjectInPlayerEq[machine].work = false;
      machinesObjectInPlayerEq[machine].timeDuration = 0;
      machinesObjectInPlayerEq[machine].materialFromProduction = 0;
    }
  }

  for (let playerElement in localStorageState.playerInfo) {
    playerInfoElements.push(playerElement);
  }

  if (!playerInfoElements.includes("newestPatch")) {
    localStorage.clear();
  }
}

/* make initial state */
const initialState =
  localStorage.state !== undefined
    ? localStorageState
    : {
        playerInfo: {
          avatar: profileIcon,
          nickname: "Player 1",
          level: 1,
          experience: 0,
          toNextLevel: 12000,
          money: 50000,
          newestPatch: "true",
          equipment: {
            machines: {
              impactCrusher: {
                id: "impact-crusher",
                name: "Impact Crusher",
                price: 10000,
                requirement: 0,
                type: "crusher",
                application: "pre-treatment-of-ore",
                performance: 20,
                work: false,
                machineWorking: 0,
                timeDuration: 0,
                materialFromProduction: 0,
                productionCost: 0,
                owned: 0,
              },
              jawCrusher: {
                id: "jaw-crusher",
                name: "Jaw Crusher",
                price: 20000,
                requirement: 10,
                type: "crusher",
                application: "pre-treatment-of-ore",
                performance: 30,
                work: false,
                machineWorking: 0,
                timeDuration: 0,
                materialFromProduction: 0,
                productionCost: 0,
                owned: 0,
              },
              coneCrusher: {
                id: "cone-crusher",
                name: "Cone Crusher",
                price: 35000,
                requirement: 20,
                type: "crusher",
                application: "pre-treatment-of-ore",
                performance: 60,
                work: false,
                machineWorking: 0,
                timeDuration: 0,
                materialFromProduction: 0,
                productionCost: 0,
                owned: 0,
              },
              hammerCrusher: {
                id: "hammer-crusher",
                name: "Hammer Crusher",
                price: 50000,
                requirement: 30,
                type: "crusher",
                application: "pre-treatment-of-ore",
                performance: 100,
                work: false,
                machineWorking: 0,
                timeDuration: 0,
                materialFromProduction: 0,
                productionCost: 0,
                owned: 0,
              },
              ballDrumMill: {
                id: "ball-drum-mill",
                name: "Ball Drum Mill",
                price: 100000,
                requirement: 40,
                type: "mill",
                application: "pre-treatment-of-ore",
                performance: 200,
                work: false,
                machineWorking: 0,
                timeDuration: 0,
                materialFromProduction: 0,
                productionCost: 0,
                owned: 0,
              },
              rodDrumMill: {
                id: "rod-drum-mill",
                name: "Rod Drum Mill",
                price: 180000,
                requirement: 70,
                type: "mill",
                application: "pre-treatment-of-ore",
                performance: 300,
                work: false,
                machineWorking: 0,
                timeDuration: 0,
                materialFromProduction: 0,
                productionCost: 0,
                owned: 0,
              },
              drumScreen: {
                id: "drum-screen",
                name: "Drum Screen",
                price: 250000,
                requirement: 100,
                type: "screens-and-separators",
                application: "pre-treatment-of-ore",
                performance: 700,
                work: false,
                machineWorking: 0,
                timeDuration: 0,
                materialFromProduction: 0,
                productionCost: 0,
                owned: 0,
              },

              magneticSeparator: {
                id: "magneticSeparator",
                name: "Magnetic separator",
                price: 650000,
                requirement: 150,
                type: "screens-and-separators",
                application: "pre-treatment-of-ore",
                performance: 2000,
                work: false,
                machineWorking: 0,
                timeDuration: 0,
                materialFromProduction: 0,
                productionCost: 0,
                owned: 0,
              },

              allMachinesQuantity: 0,
            },

            materials: {
              ironOre: {
                id: "iron-ore",
                name: "Iron ore",
                price: 100,
                durability: 300,
                experience: 50,
                productionCost: 10,
                quantity: 100,
              },

              ironOreConcentrate: {
                id: "iron-ore-concentrate",
                name: "Iron ore concentrate",
                price: 170,
                durability: 400,
                experience: 50,
                quantity: 0,
              },
            },
          },
          magazine: {
            poorMagazine: {
              machinesCapacity: 6,
              materialCapacity: 3500,
            },
          },
          employees: [
            {
              id: "none",
              name: "None",
              performanaceIncreased: 0,
              productionTimeBoost: 0,
              experienceBoost: 0,
              productionCostBoost: 0,
              quantityBoost: 0,
              workCost: 0,
            },
          ],
        },
        appInfo: {
          currentAlertText: "none",
          currentSuccessText: "none",
        },
      };

/* define reducers */
const reducers = {
  playerInfo: playerReducer,
  appInfo: appInfoReducer,
};

/* make initial state null for all keys in initial state not declared in reducers */
Object.keys(initialState).forEach((item) => {
  if (typeof reducers[item] == "undefined") {
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
  initialState
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({
    playerInfo: store.getState().playerInfo,
    appInfo: store.getState().appInfo,
  });
});

export default store;
