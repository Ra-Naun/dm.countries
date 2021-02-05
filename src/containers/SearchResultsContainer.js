import { connect } from 'react-redux';
import SearchResults from '../components/app/body/mainContent/SearchResults';
import { setSelectedCountryByCode, resetSelectedCountry } from '../actions/selectedCountryActions';
import { searchedCountries } from '../selectors/selectors';
import { LoadCountriesSuccess } from '../actions/searchedCountriesActions';

const SearchResultsContainer = ({ searchedCountries, setSelectedCountryByCode, resetSelectedCountry, clearSearchResults }) => {
  const { isFetching, error, countries } = searchedCountries;
  const showSearchResults = countries.length || error || isFetching;

  return (
    showSearchResults && (
      <SearchResults searchedCountries={searchedCountries} setSelectedCountryByCode={setSelectedCountryByCode} resetSelectedCountry={resetSelectedCountry} clearSearchResults={clearSearchResults} />
    )
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    searchedCountries: searchedCountries(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setSelectedCountryByCode: (code) => dispatch(setSelectedCountryByCode(code)),
  resetSelectedCountry: () => dispatch(resetSelectedCountry()),
  clearSearchResults: () => dispatch(LoadCountriesSuccess([])),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer);
