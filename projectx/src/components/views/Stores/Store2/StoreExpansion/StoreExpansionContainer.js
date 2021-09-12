import StoreExpansion from "./StoreExpansion";
import { connect } from "react-redux";
import {
  getAllPlayerInfo,
  setMagazineCapacity,
  setMoney,
} from "../../../../../redux/playerRedux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMagazineCapacity: (capacity) => dispatch(setMagazineCapacity(capacity)),
  setMoney: (amount) => dispatch(setMoney(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreExpansion);
