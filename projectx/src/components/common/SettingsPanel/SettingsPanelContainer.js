import { setMoney, setMaterialQuantity, getAllPlayerInfo } from "../../../redux/playerRedux";
import SettingsPanel from "./SettingsPanel";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    playerInfo: getAllPlayerInfo(state),
})

const mapDispatchToProps = dispatch => ({
    setMoney: moneyAmount => dispatch(setMoney(moneyAmount)),
    setMaterialQuantity: materialQuantity => dispatch(setMaterialQuantity(materialQuantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);