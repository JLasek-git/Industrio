import StockMarket1 from "./StockMarket1";
import { connect } from "react-redux";
import {
  setMaterialQuantityBuy,
  setMoney,
  getAllPlayerInfo,
} from "../../../../redux/playerRedux";

const mapStateToProps = (state) => ({
  playerInfo: getAllPlayerInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setMaterialQuantityBuy: (buyInfo) =>
    dispatch(setMaterialQuantityBuy(buyInfo)),
  setMoney: (amount) => dispatch(setMoney(amount)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(StockMarket1);
