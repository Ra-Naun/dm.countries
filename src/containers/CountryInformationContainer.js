import { connect } from 'react-redux';
import CountryInformation from '../components/app/body/mainContent/CountryInformation';
import { setSelectedCountryByCode, resetSelectedCountry } from '../actions/selectedCountryActions';
import { getSelectedCountry } from '../selectors/selectors';

const CountryInformationContainer = ({ selectedCountry, setSelectedCountryByCode, resetSelectedCountry, shouldComponentUpdate }) => {
  return selectedCountry?.code ? <CountryInformation selectedCountry={selectedCountry} setSelectedCountryByCode={setSelectedCountryByCode} resetSelectedCountry={resetSelectedCountry} /> : null;
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    selectedCountry: getSelectedCountry(state),
    shouldComponentUpdate: state.countriesCache,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedCountryByCode: (code) => dispatch(setSelectedCountryByCode(code)),
  resetSelectedCountry: () => dispatch(resetSelectedCountry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryInformationContainer);
