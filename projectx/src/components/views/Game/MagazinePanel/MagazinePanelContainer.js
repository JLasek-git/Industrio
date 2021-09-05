import MagazinePanel from "./MagazinePanel";
import { connect } from "react-redux";
import { getAllPlayerInfo } from "../../../../redux/playerRedux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

export default connect(mapStateToProps)(MagazinePanel);
