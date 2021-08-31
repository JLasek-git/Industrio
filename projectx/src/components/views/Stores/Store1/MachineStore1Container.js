import Store1 from "./Store1";
import { connect } from "react-redux";
import {
  getAllPlayerInfo,
  setMachineEqQuantity,
  setMoney,
} from "../../../../redux/playerRedux";
const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMachineEqQuantity: (amount) => dispatch(setMachineEqQuantity(amount)),
  setMoney: (amount) => dispatch(setMoney(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Store1);
