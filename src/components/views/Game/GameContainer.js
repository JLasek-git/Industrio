import { connect } from "react-redux";
import Game from "./Game";
import { getAllPlayerInfo } from "../../../redux/playerRedux";
import { setCurrentAlertText } from "../../../redux/appInfoRedux";
const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

const mapDispatchtoProps = (dispatch) => ({
  setCurrentAlertText: (text) => dispatch(setCurrentAlertText(text)),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Game);
