import './searchResults.scss';
import Spinner from '../../../Spinner';
import CountryShortInfoContainer from '../../../../containers/CountryShortInfoContainer';
import { useEffect } from 'react';

const SearchResults = ({ searchedCountries, setSelectedCountryByCode, resetSelectedCountry, clearSearchResults }) => {
  const { isFetching, error, countries } = searchedCountries;

  useEffect(() => {
    if (countries.length !== 1) resetSelectedCountry();
  }, [isFetching]);

  const templateCountries = (
    <ol className='search-results__countries'>
      {countries.map((country, index) => (
        <CountryShortInfoContainer key={country.code} country={country} index={index} setSelectedCountryByCode={setSelectedCountryByCode} />
      ))}
    </ol>
  );

  const templateError = (
    <>
      <p className='search-results__error'>{error}</p>
    </>
  );

  const templateFetching = (
    <>
      <div className='search-results__fetching'>
        <Spinner />
      </div>
    </>
  );

  const renderTemplate = isFetching ? templateFetching : error ? templateError : templateCountries;

  if (countries.length === 1) {
    setSelectedCountryByCode(countries[0].code);
    clearSearchResults();
  }

  return (
    <div className='search-results'>
      <p className='search-results__title title'>Search results {'[' + countries.length + ']'}:</p>

      {renderTemplate}
    </div>
  );
};

export default SearchResults;
