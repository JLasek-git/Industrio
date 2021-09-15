import ShopElement from "./ShopElement";
import { connect } from "react-redux";
import {
  getAppInfo,
  setCurrentAlertText,
} from "../../../../../redux/appInfoRedux";

const mapStateToProps = (state) => ({
  appInfo: getAppInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentAlertText: (text) => dispatch(setCurrentAlertText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopElement);
