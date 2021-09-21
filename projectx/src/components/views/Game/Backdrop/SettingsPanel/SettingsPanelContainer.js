import {
  setMoney,
  setMaterialQuantityUp,
  setMaterialQuantityDown,
  setMachineState,
  getAllPlayerInfo,
  setTime,
  setExperience,
  setMaterialReceivedFromProduction,
  setAmountMachinesWorking,
  setEmployeesWorkCount,
  setProductionCost,
  setPlayerLevel,
  setExperienceToNextLevel,
} from "../../../../../redux/playerRedux";

import {
  getAppInfo,
  setCurrentAlertText,
  setCurrentSuccessText
} from "../../../../../redux/appInfoRedux";
import SettingsPanel from "./SettingsPanel";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
  appInfo: getAppInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMoney: (moneyAmount) => dispatch(setMoney(moneyAmount)),
  setMaterialQuantityUp: (receivedMaterialAmount) =>
    dispatch(setMaterialQuantityUp(receivedMaterialAmount)),
  setMaterialQuantityDown: (usedMaterialAmount) =>
    dispatch(setMaterialQuantityDown(usedMaterialAmount)),
  setMachineState: (machineState) => dispatch(setMachineState(machineState)),
  setTime: (time) => dispatch(setTime(time)),
  setExperience: (experience) => dispatch(setExperience(experience)),
  setMaterialReceivedFromProduction: (amount) =>
    dispatch(setMaterialReceivedFromProduction(amount)),
  setAmountMachinesWorking: (amount) =>
    dispatch(setAmountMachinesWorking(amount)),
  setEmployeesWorkCount: (count) => dispatch(setEmployeesWorkCount(count)),
  setProductionCost: (cost) => dispatch(setProductionCost(cost)),
  setPlayerLevel: (level) => dispatch(setPlayerLevel(level)),
  setExperienceToNextLevel: (experience) =>
    dispatch(setExperienceToNextLevel(experience)),
  setCurrentAlertText: (text) => dispatch(setCurrentAlertText(text)),
  setCurrentSuccessText: (text) => dispatch(setCurrentSuccessText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
