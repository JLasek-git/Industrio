import MaterialPanel from "./MaterialPanel";
import { connect } from 'react-redux';
import { getAllPlayerInfo } from '../../../redux/playerRedux';


const mapStateToProps = state => ({
    playerInfo: getAllPlayerInfo(state),
});

export default connect(mapStateToProps)(MaterialPanel);