import StoreMachine from "./StoreMachine";
import { connect } from "react-redux";
import {
  getAllPlayerInfo,
  setMachineEqQuantity,
  setMoney,
  setAllMachinesQuantity,
} from "../../../../../redux/playerRedux";
const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMachineEqQuantity: (amount) => dispatch(setMachineEqQuantity(amount)),
  setMoney: (amount) => dispatch(setMoney(amount)),
  setAllMachinesQuantity: (amount) => dispatch(setAllMachinesQuantity(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreMachine);
