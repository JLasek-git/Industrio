import { combineReducers, createStore } from "redux";
import materials from "../data/materials.json";
import machinesPreTreatment from "../data/machinesPreTreatment.json";

import profileIcon from "../images/profileIcon.png";

import globalReducer from "./globalRedux";
import playerReducer from "./playerRedux";

/* make initial state */
const initialState = {
  playerInfo: {
    avatar: profileIcon,
    nickname: "Player 1",
    experience: 0,
    toNextLevel: 4000,
    money: 100000,
    equipment: {
      machines: {
        impactCrusher: {
          id: "impact-crusher",
          name: "Impact Crusher",
          price: 10000,
          requirement: 0,
          type: "crusher",
          application: "pre-treatment-of-ore",
          performance: 1000,
          work: false,
          timeDuration: 0,
          owned: 0,
        },
        jawCrusher: {
          id: "jaw-crusher",
          name: "Jaw Crusher",
          price: 20000,
          requirement: 10,
          type: "crusher",
          application: "pre-treatment-of-ore",
          performance: 2.5,
          work: false,
          timeDuration: 0,
          owned: 0,
        },
        coneCrusher: {
          id: "cone-crusher",
          name: "Cone Crusher",
          price: 35000,
          requirement: 20,
          type: "crusher",
          application: "pre-treatment-of-ore",
          performance: 5,
          work: false,
          timeDuration: 0,
          owned: 0,
        },
        hammerCrusher: {
          id: "hammer-crusher",
          name: "Hammer Crusher",
          price: 50000,
          requirement: 30,
          type: "crusher",
          application: "pre-treatment-of-ore",
          performance: 8,
          work: false,
          timeDuration: 0,
          owned: 0,
        },
        ballDrumMill: {
          id: "ball-drum-mill",
          name: "Ball Drum Mill",
          price: 100000,
          requirement: 40,
          type: "mill",
          application: "pre-treatment-of-ore",
          performance: 15,
          work: false,
          timeDuration: 0,
          owned: 0,
        },
        rodDrumMill: {
          id: "rod-drum-mill",
          name: "Rod Drum Mill",
          price: 180000,
          requirement: 70,
          type: "mill",
          application: "pre-treatment-of-ore",
          performance: 25,
          work: false,
          timeDuration: 0,
          owned: 0,
        },
        drumScreen: {
          id: "drum-screen",
          name: "Drum Screen",
          price: 250000,
          requirement: 100,
          type: "screens-and-separators",
          application: "pre-treatment-of-ore",
          performance: 75,
          work: false,
          timeDuration: 0,
          owned: 0,
        },

        magneticSeparator: {
          id: "magneticSeparator",
          name: "Magnetic separator",
          price: 650000,
          requirement: 150,
          type: "screens-and-separators",
          application: "pre-treatment-of-ore",
          performance: 200,
          work: false,
          timeDuration: 0,
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
          experience: 7.5,
          productionCost: 10,
          quantity: 100,
        },

        ironOreConcentrate: {
          id: "iron-ore-concentrate",
          name: "Iron ore concentrate",
          price: 200,
          durability: 450,
          experience: 7.5,
          quantity: 0,
        },
      },
    },
    magazine: {
      poorMagazine: {
        machinesCapacity: 6,
      },
    },
  },

  materialsInfo: materials,
  machinesInfo: machinesPreTreatment,
};

/* define reducers */
const reducers = {
  playerInfo: playerReducer,
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
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
