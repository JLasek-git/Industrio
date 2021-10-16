import ShopElement from "./ShopElement";
import { connect } from "react-redux";
import {
  getAppInfo,
  setCurrentAlertText,
  setCurrentSuccessText,
} from "../../../../../redux/appInfoRedux";

const mapStateToProps = (state) => ({
  appInfo: getAppInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentAlertText: (text) => dispatch(setCurrentAlertText(text)),
  setCurrentSuccessText: (text) => dispatch(setCurrentSuccessText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopElement);
