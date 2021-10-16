import Store1 from "./Store1";
import { connect } from "react-redux";
import {
  getAllPlayerInfo,
  setMachineEqQuantity,
  setMoney,
} from "../../../../redux/playerRedux";
import { getAppInfo } from "../../../../redux/appInfoRedux";
const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
  appInfo: getAppInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMachineEqQuantity: (amount) => dispatch(setMachineEqQuantity(amount)),
  setMoney: (amount) => dispatch(setMoney(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Store1);
