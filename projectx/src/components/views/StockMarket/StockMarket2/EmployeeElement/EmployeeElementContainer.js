import EmployeeElement from "./EmployeeElement";
import { connect } from "react-redux";
import {
  getAllPlayerInfo,
  setEmployeesArray,
} from "../../../../../redux/playerRedux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setEmployeesArray: (array) => dispatch(setEmployeesArray(array)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeElement);
