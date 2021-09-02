import { connect } from 'react-redux';
import { getAllPlayerInfo, setMachinePlace, setMachineEqQuantity, setMachineInMagazineQuantity } from '../../../redux/playerRedux';
import MagazineBackground from './MagazineBackground';

const mapStateToProps = state => ({
    playerInfo: getAllPlayerInfo(state),
});


const mapDispatchToProps = dispatch => ({
    setMachinePlace: (occupiedPlace) => dispatch(setMachinePlace(occupiedPlace)),
    setMachineEqQuantity: (quantity) => dispatch(setMachineEqQuantity(quantity)),
    setMachineInMagazineQuantity: (quantity) => dispatch(setMachineInMagazineQuantity(quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(MagazineBackground);