import { connect } from 'react-redux';
import Game from './Game';
import { getAllPlayerInfo } from '../../../redux/playerRedux';

const mapStateToProps = state => ({
    playerInfo: getAllPlayerInfo(state),
});

export default connect(mapStateToProps)(Game);