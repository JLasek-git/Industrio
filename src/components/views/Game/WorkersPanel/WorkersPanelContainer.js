import WorkersPanel from "./WorkersPanel";
import { connect } from "react-redux";
import { getAllPlayerInfo } from "../../../../redux/playerRedux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

export default connect(mapStateToProps)(WorkersPanel);
