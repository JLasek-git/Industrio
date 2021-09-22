import StoreMachine from "./StoreMachine";
import { connect } from "react-redux";
import {
  getAllPlayerInfo,
  setMachineEqQuantity,
  setMoney,
  setAllMachinesQuantity,
} from "../../../../../redux/playerRedux";

import {
  getAppInfo,
  setCurrentAlertText,
  setCurrentSuccessText,
} from "../../../../../redux/appInfoRedux";
const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
  appInfo: getAppInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMachineEqQuantity: (amount) => dispatch(setMachineEqQuantity(amount)),
  setMoney: (amount) => dispatch(setMoney(amount)),
  setAllMachinesQuantity: (amount) => dispatch(setAllMachinesQuantity(amount)),
  setCurrentAlertText: (text) => dispatch(setCurrentAlertText(text)),
  setCurrentSuccessText: (text) => dispatch(setCurrentSuccessText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreMachine);
