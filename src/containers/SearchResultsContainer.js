import { connect } from 'react-redux';
import SearchResults from '../components/app/body/mainContent/SearchResults';
import { setSelectedCountryByCode, resetSelectedCountry } from '../actions/selectedCountryActions';

const SearchResultsContainer = ({ searchedCountries, setSelectedCountryByCode, resetSelectedCountry }) => {
  const { isFetching, error, countries } = searchedCountries;

  const showSearchResults = countries.length || error || isFetching;

  return showSearchResults && <SearchResults searchedCountries={searchedCountries} setSelectedCountryByCode={setSelectedCountryByCode} resetSelectedCountry={resetSelectedCountry} />;
};

const mapStateToProps = (state /*, ownProps*/) => {
  console.log('state.searchedCountries', state.searchedCountries);
  return {
    searchedCountries: state.searchedCountries,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedCountryByCode: (code) => dispatch(setSelectedCountryByCode(code)),
  resetSelectedCountry: () => dispatch(resetSelectedCountry()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
