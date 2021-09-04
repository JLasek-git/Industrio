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
    money: 60000,
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
          owned: 1,
        },
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
        machinesQuantity: 0,
        machinePlaces: {
          place1: "",
          place2: "",
          place3: "",
          place4: "",
          place5: "",
          place6: "",
        },
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
  initialState
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
