import { connect } from 'react-redux';
import { getAllPlayerInfo, setMachinePlace } from '../../../redux/playerRedux';
import MagazineBackground from './MagazineBackground';

const mapStateToProps = state => ({
    playerInfo: getAllPlayerInfo(state),
});


const mapDispatchToProps = dispatch => ({
    setMachinePlace: (occupiedPlace, placeId) => dispatch(setMachinePlace(occupiedPlace)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MagazineBackground);
