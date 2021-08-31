import StockMarket1 from "./StockMarket1";
import { connect } from "react-redux";
import {
  setMaterialQuantityUp,
  getAllPlayerInfo,
} from "../../../../redux/playerRedux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMaterialQuantityUp: (quantity) =>
    dispatch(setMaterialQuantityUp(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockMarket1);
