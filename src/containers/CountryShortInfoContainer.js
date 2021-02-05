import { useEffect } from 'react';
import { connect } from 'react-redux';
import { lazzyLoadByCode } from '../actions/CountriesCachActions';
import { LoadCountriesSuccess } from '../actions/searchedCountriesActions';
import CountryShortInfo from '../components/app/body/CountryShortInfo';

const CountryShortInfoContainer = ({ lazzyLoadByCode, country, setSelectedCountryByCode, index, clearSearchResults, isClear }) => {
  return (
    <CountryShortInfo lazzyLoadByCode={lazzyLoadByCode} country={country} setSelectedCountryByCode={setSelectedCountryByCode} index={index} clearSearchResults={clearSearchResults} isClear={isClear} />
  );
};

const mapDispatchToProps = (dispatch) => ({
  lazzyLoadByCode: (code) => dispatch(lazzyLoadByCode(code)),
  clearSearchResults: () => dispatch(LoadCountriesSuccess([])),
});

export default connect(null, mapDispatchToProps)(CountryShortInfoContainer);
