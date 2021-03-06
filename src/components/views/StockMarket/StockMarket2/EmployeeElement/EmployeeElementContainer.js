import EmployeeElement from "./EmployeeElement";
import { connect } from "react-redux";
import {
  getAllPlayerInfo,
  setEmployeesArray,
  setMoney,
} from "../../../../../redux/playerRedux";

import {
  setCurrentAlertText,
  setCurrentSuccessText,
} from "../../../../../redux/appInfoRedux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setEmployeesArray: (array) => dispatch(setEmployeesArray(array)),
  setMoney: (amount) => dispatch(setMoney(amount)),
  setCurrentAlertText: (text) => dispatch(setCurrentAlertText(text)),
  setCurrentSuccessText: (text) => dispatch(setCurrentSuccessText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeElement);
