import AlertBox from "./AlertBox";
import { connect } from "react-redux";
import { getAppInfo } from "../../../redux/appInfoRedux";

const mapStateToProps = (state) => ({
  appInfo: getAppInfo(state),
});

export default connect(mapStateToProps)(AlertBox);
