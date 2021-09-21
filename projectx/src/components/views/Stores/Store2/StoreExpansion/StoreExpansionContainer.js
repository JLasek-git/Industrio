import StoreExpansion from "./StoreExpansion";
import { connect } from "react-redux";
import {
  getAllPlayerInfo,
  setMagazineCapacity,
  setMoney,
} from "../../../../../redux/playerRedux";

import { setCurrentAlertText, setCurrentSuccessText } from "../../../../../redux/appInfoRedux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMagazineCapacity: (capacity) => dispatch(setMagazineCapacity(capacity)),
  setMoney: (amount) => dispatch(setMoney(amount)),
  setCurrentAlertText: (text) => dispatch(setCurrentAlertText(text)),
  setCurrentSuccessText: (text) => dispatch(setCurrentSuccessText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreExpansion);
