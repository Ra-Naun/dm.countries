import { connect } from 'react-redux';
import CountryInformation from '../components/app/body/mainContent/CountryInformation';
import { setSelectedCountryByCode, resetSelectedCountry } from '../actions/selectedCountryActions';
import { getSelectedCountry } from '../selectors/selectors';

const CountryInformationContainer = ({ selectedCountry, setSelectedCountryByCode, resetSelectedCountry, shouldComponentUpdate }) => {
  let isVisible = selectedCountry?.code ? true : false;

  return isVisible && <CountryInformation selectedCountry={selectedCountry} setSelectedCountryByCode={setSelectedCountryByCode} resetSelectedCountry={resetSelectedCountry} />;
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
