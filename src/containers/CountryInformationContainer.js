import { connect } from 'react-redux';
import CountryInformation from '../components/app/body/mainContent/CountryInformation';
import { setSelectedCountryByCode, resetSelectedCountry } from '../actions/selectedCountryActions';

const CountryInformationContainer = ({ selectedCountry }) => {
  return selectedCountry.code ? <CountryInformation selectedCountry={selectedCountry} /> : null;
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    selectedCountry: state.selectedCountry,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedCountryByCode: (code) => dispatch(setSelectedCountryByCode(code)),
  resetSelectedCountry: () => dispatch(resetSelectedCountry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryInformationContainer);
