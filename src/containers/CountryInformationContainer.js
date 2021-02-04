import { connect } from 'react-redux';
import CountryInformation from '../components/app/body/mainContent/CountryInformation';
//import { increment, decrement, reset } from './actionCreators'

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    //selectedCountry: state.selectedCountry,
  };
};

const mapDispatchToProps = {
  //increment, decrement, reset
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryInformation);
