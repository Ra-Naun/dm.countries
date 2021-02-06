import { connect } from 'react-redux';
import { lazzyLoadByCode } from '../actions/CountriesCachActions';
import { clearResults } from '../actions/searchedCountriesActions';
import CountryShortInfo from '../components/app/body/CountryShortInfo';

const CountryShortInfoContainer = ({ lazzyLoadByCode, country, setSelectedCountryByCode, index, clearSearchResults, isClearSearchResults }) => {
  return (
    <CountryShortInfo
      lazzyLoadByCode={lazzyLoadByCode}
      country={country}
      setSelectedCountryByCode={setSelectedCountryByCode}
      index={index}
      clearSearchResults={clearSearchResults}
      isClearSearchResults={isClearSearchResults}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  lazzyLoadByCode: (code) => dispatch(lazzyLoadByCode(code)),
  clearSearchResults: () => dispatch(clearResults()),
});

export default connect(null, mapDispatchToProps)(CountryShortInfoContainer);
