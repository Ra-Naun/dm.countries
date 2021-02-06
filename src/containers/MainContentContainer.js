import { connect } from 'react-redux';
import MainContent from '../components/app/body/MainContent';

const MainContentContainer = ({ isVisibleCountryInformation, isVisibleSearchResults }) => {
  let isVisible = isVisibleCountryInformation || isVisibleSearchResults;

  return isVisible && <MainContent />;
};

const mapStateToProps = (state /*, ownProps*/) => {
  const { isFetching, error, countries } = state.searchedCountries;
  return {
    isVisibleCountryInformation: state.selectedCountry.code ? true : false,
    isVisibleSearchResults: countries.length > 0 || error || isFetching,
  };
};

export default connect(mapStateToProps, null)(MainContentContainer);
