import {
  setMoney,
  setMaterialQuantityUp,
  setMaterialQuantityDown,
  setMachineState,
  getAllPlayerInfo,
  setTime,
  setExperience,
} from "../../../redux/playerRedux";
import SettingsPanel from "./SettingsPanel";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
