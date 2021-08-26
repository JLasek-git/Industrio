import { connect } from 'react-redux';
import Game from './Game';
import { getAllPlayerInfo, setMoney, setMaterialQuantity } from '../../../redux/playerRedux';

const mapStateToProps = state => ({
    playerInfo: getAllPlayerInfo(state),
});

const mapDispatchToProps = dispatch => ({
    setMoney: money => dispatch(setMoney(money)),
    setMaterialQuantity: quantity => dispatch(setMaterialQuantity(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);